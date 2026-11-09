'use strict';

const { spawn } = require('node:child_process');
const net = require('node:net');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

function findAvailablePort(startPort, maxAttempts = 25) {
  return new Promise((resolve, reject) => {
    let port = startPort;
    let attempts = 0;

    function checkPort() {
      const server = net.createServer();

      server.once('error', (error) => {
        if (error.code !== 'EADDRINUSE') {
          reject(error);
          return;
        }

        attempts += 1;
        if (attempts >= maxAttempts) {
          reject(new Error(`Could not find an available port starting at ${startPort}.`));
          return;
        }

        port += 1;
        checkPort();
      });

      server.once('listening', () => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(port);
        });
      });

      server.listen(port);
    }

    checkPort();
  });
}

async function main() {
  const apiPort = await findAvailablePort(Number(process.env.PORT || 4000));
  const webPort = await findAvailablePort(Number(process.env.WEB_PORT || 5173));
  const env = {
    ...process.env,
    PORT: String(apiPort),
    WEB_PORT: String(webPort),
    VITE_API_URL: `http://localhost:${apiPort}`,
    CLIENT_ORIGIN: `http://localhost:${webPort}`,
  };
  const viteCli = path.join(path.dirname(require.resolve('vite/package.json')), 'bin', 'vite.js');
  const tsxCli = require.resolve('tsx/cli');
  const web = spawn(process.execPath, [viteCli, '--config', 'vite.config.ts', '--host', 'localhost'], {
    cwd: path.join(root, 'apps', 'web'),
    env,
    stdio: 'inherit',
  });
  const server = spawn(process.execPath, [tsxCli, 'watch', 'src/app.ts'], {
    cwd: path.join(root, 'apps', 'server'),
    env,
    stdio: 'inherit',
  });

  const children = [web, server];
  let stopping = false;

  function stop(exitCode) {
    if (stopping) {
      return;
    }

    stopping = true;
    process.exitCode = exitCode;
    for (const child of children) {
      if (child.exitCode === null) {
        child.kill();
      }
    }
  }

  for (const child of children) {
    child.once('error', (error) => {
      console.error('Failed to start a development process:', error);
      stop(1);
    });
    child.once('exit', (code) => {
      if (!stopping) {
        stop(code ?? 1);
      }
    });
  }

  process.once('SIGINT', () => stop(130));
  process.once('SIGTERM', () => stop(143));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

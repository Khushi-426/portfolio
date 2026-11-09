# Khushi Digital Twin Portfolio

A React and TypeScript portfolio with a fixed video avatar, grounded project information, Express API, and an extensible generic voice provider.

## Requirements
Node.js 20 or newer and npm.

## Setup
1. Copy `.env.example` to `.env` in the repository root if you need custom settings.
2. Install dependencies: `npm install`
3. Run the web app and API: `npm run dev`
4. Open the Vite URL printed by npm (normally http://localhost:5173). If the default API or web port is already in use, `npm run dev` selects the next available port and configures the client and API to use it.

The web client is available separately with `npm run dev:web`; the API is available separately with `npm run dev:server` at http://localhost:4000. Check `GET /api/health` for server health. `npm run build` and `npm run typecheck` check both workspaces.

## Avatar assets
The supplied clips are at `apps/web/public/videos/welcome.mp4` and `apps/web/public/videos/explaining.mp4`. Welcome plays once per page session. The explaining clip plays once when Projects first becomes active. Both are muted, use metadata preload, and cannot overlap. If an asset is missing or fails, the avatar panel degrades to a typographic neutral fallback. Optional stills can be added as `apps/web/public/images/avatar-idle.png`, `avatar-thinking.png`, `avatar-listening.png`, `avatar-talking-open.png`, and `avatar-talking-closed.png`.

## AI and voice
Chat starts with a mock, fact-grounded response service. The Express voice endpoint supports optional OpenAI-compatible TTS when `AI_API_KEY` is configured; keys stay on the server. Without a key, the endpoint reports that no server audio provider is configured and the client can use browser speech synthesis, clearly labeled as browser-generated. No voice cloning is implemented.

## Portfolio facts
Project descriptions are limited to the information supplied in the brief. Add verified details, links, skills, contact information, and achievements in `apps/web/src/data/portfolio.ts`. Replace placeholder contact links before publishing.

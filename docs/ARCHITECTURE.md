# Architecture

The repository is a small npm-workspaces monorepo. `apps/web` owns the React experience and typed avatar/chat controllers. `apps/server` is a modular Express API. Voice synthesis is isolated behind a provider interface at the server, and browser speech is a client-side fallback. Static portfolio facts are maintained in one editable data module. No database, RAG, or personal voice cloning is included in this milestone.

#!/usr/bin/env node

import { exec } from "node:child_process";

let port = process.argv.find(flag => flag.includes("--port") || flag.includes("-p")).split(/=|\s/)[1] || 8888;

exec(`bun run start --port ${port}`, (err, stdout) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Launched server on port", port);
  console.log(`Launching browser at http://127.0.0.1:${port}`);
  exec(`open http://127.0.0.1:${port}`);
});

#!/usr/bin/env node

const { spawn } = require('child_process');

const child = spawn(
  process.execPath,
  [require.resolve('@markgrama/next-audit'), ...process.argv.slice(2)],
  {
    stdio: 'inherit',
    cwd: process.cwd()
  }
);

child.on('exit', process.exit);

const core = require("@actions/core");
const exec = require('@actions/exec');

async function run() {
  try {
    await exec.exec('./node_modules/.bin/eslint-remote-tester', [], { ignoreReturnCode: true });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

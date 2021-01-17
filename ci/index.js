const core = require("@actions/core");
const exec = require('@actions/exec');

const { context, getOctokit } = require("@actions/github");

const TRIGGER_KEYWORD = "@eslint-remote-tester-bot";

async function run() {
  try {
    await exec.exec('./node_modules/.bin/eslint-remote-tester', [], { ignoreReturnCode: true });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

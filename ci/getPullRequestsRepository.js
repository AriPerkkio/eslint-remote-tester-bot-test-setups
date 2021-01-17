const core = require("@actions/core");
const exec = require("@actions/exec");

const { context, getOctokit } = require("@actions/github");

const TRIGGER_KEYWORD = "@eslint-remote-tester-bot";

async function run() {
  try {
    const octokit = getOctokit(process.env.GITHUB_TOKEN);

    if (context.eventName !== "issue_comment") {
      return console.warn(`invalid eventName: (${context.eventName})`);
    }

    const comment = context.payload.comment.body;
    if (!comment.startsWith(TRIGGER_KEYWORD)) return;

    const pullRequest = await octokit.pulls.get({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: context.issue.number,
    });

    core.setOutput('repository', pullRequest.data.head.repo.full_name);
    core.setOutput('branch', pullRequest.data.head.ref);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

const core = require("@actions/core");
const { context, getOctokit } = require("@actions/github");

const TRIGGER_KEYWORD = "@eslint-remote-tester-bot";

async function run() {
  try {
    const client = getOctokit(process.env.GITHUB_TOKEN);

    if (context.eventName !== "issue_comment") {
      return console.warn(`invalid eventName: (${context.eventName})`);
    }

    const comment = context.payload.comment.body;
    if (!comment.startsWith(TRIGGER_KEYWORD)) return;

    const pullRequest = await client.pulls.get({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: context.issue.number,
    });

    const prRepository = pullRequest.data.head.repo.full_name;
    const prBranch = pullRequest.data.head.ref;

    core.info(`prRepository ${prRepository} prBranch ${prBranch}`);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

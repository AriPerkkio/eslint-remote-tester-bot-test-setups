const fs = require('fs');
const core = require("@actions/core");

const { context, getOctokit } = require("@actions/github");

const BASE_PATH = 'eslint-remote-tester-results/comparison-results';
const ADDED = `${BASE_PATH}/added.md`;
const REMOVED = `${BASE_PATH}/removed.md`;

async function run() {
  try {
    const octokit = getOctokit(process.env.GITHUB_TOKEN);

    const body = [ADDED, REMOVED].reduce((all, filename) => {
        if(fs.existsSync(filename)) {
             const content = fs.readFileSync(filename);
             return all + content;
        }

        return all;
    }, 'Comparison results: ');


    await octokit.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      body,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

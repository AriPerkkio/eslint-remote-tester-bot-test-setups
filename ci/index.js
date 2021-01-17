const core = require("@actions/core");
const { context } = require("@actions/github");

async function run() {
  try {
    if (context.eventName !== "issue_comment") {
      return console.warn(
        `event name is not 'issue_comment': ${context.eventName}`
      );
    }

    const comment = context.payload.comment.body;
    core.info(`Found comment (${comment})`);

    core.setOutput("Exit");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

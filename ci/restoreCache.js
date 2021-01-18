const core = require("@actions/core");
const io = require("@actions/io");

async function run() {
  try {
    await io.mv(
      "/tmp/.comparison-cache.json",
      ".cache-eslint-remote-tester/.comparison-cache.json"
    );
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

const repl = require("repl");
const models = require('./db/models');

const replServer = repl.start({
  prompt: "job-app-tracker> ",
});
// Define models variable for REPL
replServer.context.models = models;

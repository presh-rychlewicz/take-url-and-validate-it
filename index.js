const readline = require("readline");
const process = require("process");

const URL_REGEX =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your url: \n", (answer) => {
  const isValidUrl = URL_REGEX.test(answer);

  rl.write(`"${answer}" is${isValidUrl ? "" : " not"} valid url!\n`);
});

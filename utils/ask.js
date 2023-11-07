const ask = (options) => {
  options.interface.question(`${options.question}?\n`, (answer) => {
    const isValid = options.validator(answer);

    if (isValid) {
      options.callback(answer);
    } else {
      options.interface.write(`${answer}" is not valid!\n`);
      ask(options);
    }
  });
};

module.exports = ask;

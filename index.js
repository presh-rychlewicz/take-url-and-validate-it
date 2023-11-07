const readline = require("readline");
const process = require("process");
const ask = require("./utils/ask");
const validateUrl = require("./utils/validateUrl");
const cheerio = require("cheerio");
const axios = require("axios");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  const url = await new Promise((res) =>
    ask({
      interface,
      question: "What is url",
      validator: validateUrl,
      callback: res,
    })
  );

  const cssSelector = await new Promise((res) =>
    ask({
      interface,
      question: "What is CSS selector",
      validator: () => true,
      callback: res,
    })
  );

  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const element = $(cssSelector);
  const textContent = element.text();

  if (textContent) {
    interface.write(`Text content for this selector is "${textContent}".`);
  } else {
    interface.write("There is not text content for this element!");
  }
})();

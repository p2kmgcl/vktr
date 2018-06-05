/* global console */

const { exit } = require("process");
const { resolve } = require("path");
const puppeteer = require("puppeteer");
const executeFunctionalText = require("./functional-test");

let browser;
let page;

puppeteer
  .launch({
    args: ["--no-sandbox"]
  })
  .then(_browser => {
    browser = _browser;
    return browser.newPage();
  })
  .then(_page => {
    page = _page;
    page.on("console", message => console.log(message.text()));
    return page.goto("about:blank");
  })
  .then(() => {
    return page.addScriptTag({
      path: resolve("./dist/vktr.js")
    });
  })
  .then(() => {
    return page.evaluate(executeFunctionalText);
  })
  .then(() => {
    if (browser) {
      browser.close();
    }
  })
  .catch(error => {
    console.log(error);
    exit(1);
  });

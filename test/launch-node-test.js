const executeFunctionalText = require("./functional-test");
const vktr = require("../dist/vktr");

global.vktr = vktr;
executeFunctionalText();

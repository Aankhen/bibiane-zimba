const markdownIt = require("markdown-it");
const { markdownItOptions } = require("../libraries/markdownIt");

module.exports = function(_value) {
  const md = new markdownIt(markdownItOptions)
  return md.render(_value)
}
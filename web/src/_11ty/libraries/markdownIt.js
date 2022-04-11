const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}

const markdownItAnchorOptions = {
  permalink: true,
  permalinkClass: "direct-link",
  permalinkSymbol: "#"
}

const markdownItConfigured = () => markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions);

module.exports = {markdownItConfigured, markdownItOptions, markdownItAnchorOptions};
// filters
const debug = require('./src/_11ty/filters/debug.js');
const markdownify = require('./src/_11ty/filters/markdownify.js');
const { readableDate, htmlDateString } = require("./src/_11ty/filters/date.js");

// library config
const { markdownItConfigured } = require('./src/_11ty/libraries/markdownIt.js');

module.exports = function(eleventyConfig) {
  // Filters
  eleventyConfig.addFilter("debug", debug);
  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("markdownify", markdownify);

  // Library Configs
  eleventyConfig.setLibrary("md", markdownItConfigured);

  // Passthrough
  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
});
  
  return {
    templateFormats: ["md","njk","html"],
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    }
  };
}

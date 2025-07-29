const pluginRss = require("@11ty/eleventy-plugin-rss");
const timeToRead = require('eleventy-plugin-time-to-read');
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy the `img/` directory
  eleventyConfig.addPassthroughCopy("src/content/pico-games/**/*.js");
  eleventyConfig.addPassthroughCopy("src/static");
  
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(timeToRead);

  //Filters
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    passthroughFileCopy: true
  };
};

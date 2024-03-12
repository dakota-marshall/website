const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Copy the `img/` directory
  eleventyConfig.addPassthroughCopy("src/imgs");
  
  // Plugins
  eleventyConfig.addPlugin(pluginRss);

  return {
    passthroughFileCopy: true
  };
};

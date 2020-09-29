module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.setTemplateFormats(["md", "liquid", "css"]);
  eleventyConfig.addShortcode("version", function () {
    return new Date().toDateString();
  });
};

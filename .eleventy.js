module.exports = function (eleventyConfig) {
  eleventyConfig.addLiquidFilter("boldAuthor", function (value) {
    return value.replace("Pepe-Ranney, C", '<span class="font-bold">$&</span>');
  });
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.setTemplateFormats(["md", "liquid", "css"]);
  eleventyConfig.addShortcode("version", function () {
    return new Date().toDateString();
  });
};

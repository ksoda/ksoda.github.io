module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  return {
    dir: {
      input: "dist",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    }
  };
};

module.exports = function (eleventyConfig) {
  // Passthrough copy for any static assets (if needed)
  // eleventyConfig.addPassthroughCopy("source/assets");

  // Add a filter for formatting dates (if needed)
  // eleventyConfig.addFilter("date", function(date) {
  //     return new Date(date).toLocaleDateString();
  // });

  // Set the template formats
  return {
    dir: {
      input: "source",
      includes: "_includes",
      layouts: "_layouts",
      output: "webapp",
    },
  };
};

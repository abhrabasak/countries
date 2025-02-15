import ejsPlugin from "@11ty/eleventy-plugin-ejs";

export default (ec) => {
  ec.addPlugin(ejsPlugin);
  // ec.addPassthroughCopy("source/styles.css");
  // ec.on("beforeBuild", copyData);

  return {
    dir: {
      input: "source",
      includes: "_includes",
      layouts: "_layouts",
      output: "webapp",
    },
  };
};

const inspect = require("util").inspect;

module.exports = (ec) => {
  // ec.addPassthroughCopy("source/styles.css");
  // ec.on("beforeBuild", copyData);
  ec.addFilter("debug", (c) => `<pre>${inspect(c)}</pre>`);
  ec.addFilter("lookup", (obj, key) => obj[key.toLowerCase()]);

  return {
    dir: {
      input: "source",
      includes: "_includes",
      layouts: "_layouts",
      output: "webapp",
    },
  };
};

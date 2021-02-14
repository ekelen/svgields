module.exports = (config) => {
  config.addPassthroughCopy("src/font");
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/img");

  // config.addPassthroughCopy('src/js');

  return {
    dir: {
      input: "src",
    },
  };
};

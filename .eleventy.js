module.exports = (config) => {
  config.addPassthroughCopy("src/font");
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/img");

  return {
    pathPrefix: process.env.NODE_ENV === "production" ? "/svgields/" : "/",
    dir: {
      input: "src",
    },
  };
};

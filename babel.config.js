module.exports = api => {
  api.cache(true);
  if (process.env.NODE_ENV === "test") {
    return {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
              esmodules: true
            }
          }
        ]
      ]
    };
  }

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: ["ie >= 11"]
          },
          modules: false,
          spec: true,
          forceAllTransforms: true,
          useBuiltIns: "usage",
          corejs: 3
        }
      ]
    ]
  };
};
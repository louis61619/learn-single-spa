const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "louis61619",
    projectName: "child-react",
    webpackConfigEnv,
    argv,
  });

  

  defaultConfig.module.rules = defaultConfig.module.rules.map((item, index) => {
    if (index === 1 || index === 2) {
      return {}
    }
    return item
  })

  console.log(defaultConfig.module.rules)

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'my-loader'
          ],
        },
      ],
    },
    resolveLoader: {
      modules: ["node_modules", "./loader"]
    },
  });
};

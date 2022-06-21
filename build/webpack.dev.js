const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const portFinderSync = require("portfinder-sync");

const infoColor = (_message) => {
  return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`;
};

module.exports = merge(commonConfig, {
  stats: "errors-warnings", //webpack 在控制台只输出错误信息
  mode: "development",
  infrastructureLogging: {
    level: "warn",
  },
  devServer: {
    host: "local-ip",
    port: portFinderSync.getPort(8080),
    open: true,
    https: false,
    allowedHosts: "all",
    hot: false,
    watchFiles: ["src/**", "static/**"],
    static: {
      watch: true,
      directory: path.join(__dirname, "../static"),
    },
    client: {
      logging: "none",
      overlay: true,
      progress: false,
    },
    setupMiddlewares: function (middlewares, devServer) {
      console.log("-------three.js 开发环境 基本配置--------");
      const port = devServer.options.port;
      const https = devServer.options.https ? "s" : "";
      const domain1 = `http${https}://${devServer.options.host}:${port}`;
      const domain2 = `http${https}://localhost:${port}`;
      console.log(
        `项目运行在 :\n  - ${infoColor(domain1)}\n  - ${infoColor(domain2)}`
      );
      return middlewares;
    },
  },
});

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_HOST,
      changeOrigin: true,
      pathRewrite: (path) => {
        return path.replace("/api", "");
      },
      timeout: 600000,
      proxyTimeout: 600000,
    })
  );

  app.use(
    "/creatortime",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_HOST_CREATORTIME,
      changeOrigin: true,
      pathRewrite: (path) => {
        return path.replace("/creatortime", "");
      },
      timeout: 600000,
      proxyTimeout: 600000,
    })
  );
};

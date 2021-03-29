const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
};

// const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   // Use the CDN in production and localhost for development.
//   assetPrefix: isProd ? 'https://d1nd6ebc4fb67p.cloudfront.net/' : '',
// }
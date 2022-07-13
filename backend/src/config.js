const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: process.env.EXT_HOST || "localhost",
    user: "root",
    password: "root",
    database: "evidencias",
    port: !process.env.PRODUCTION ? 8003 : "",
  },
};
module.exports = config;

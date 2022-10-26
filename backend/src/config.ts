const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: process.env.EXT_HOST || "localhost",
    user: "root",
    password: "root",
    database: "evidencias",
    port: 8003,
  },
};

export default config

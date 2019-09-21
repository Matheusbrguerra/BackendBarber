module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "postgres",
  define: {
    timstamps: true,
    underscored: true,
    underscoredAll: true
  }
};

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("kumar", "root", "Vaneet5509@", {
  host: "localhost",
  dialect: "mysql",
  port: "3307",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//call the users.js file here where we define modules
db.users = require("./users")(sequelize, DataTypes);

db.sequelize.sync().then(() => {
  console.log("yes re sync");
});
module.exports = db;

module.exports = (sequelize, DataType) => {
  const Users = sequelize.define(
    "users", //users is there is a table name
    {
      name: DataType.STRING,
      email: DataType.STRING,
      gender: DataType.STRING,
      isdeleted: {
        type: DataType.INTEGER,
        defaultValue: 0,
      },
    },
    {
      paranoid: true,
      deletedAt: "SoftDeleted",
    }
  );
  return Users; // it is a module 
};

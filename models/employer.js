module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Employer;
};

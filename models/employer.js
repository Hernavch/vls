module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Employer;
};

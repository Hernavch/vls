module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define("Candidate", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    target: DataTypes.STRING,
    status: DataTypes.STRING,
    industry: DataTypes.STRING,
    exp: DataTypes.INTEGER,
    location: DataTypes.INTEGER,
    CPR: DataTypes.BOOLEAN,
    HCA: DataTypes.BOOLEAN,
    BLS: DataTypes.BOOLEAN,
    CNA: DataTypes.BOOLEAN,
    HHA: DataTypes.BOOLEAN,
    DSP1: DataTypes.BOOLEAN,
    DSP2: DataTypes.BOOLEAN,
    CPI1: DataTypes.BOOLEAN,
    CPI2: DataTypes.BOOLEAN,
    RN: DataTypes.BOOLEAN
  });
  return Candidate;
};

module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define("Candidate", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    target: DataTypes.STRING,
    job_type: DataTypes.STRING,
    status: DataTypes.STRING,
    industry: DataTypes.STRING,
    exp: DataTypes.INTEGER,
    location: DataTypes.INTEGER,
    CPR: DataTypes.BOOLEAN,
    HCA: DataTypes.BOOLEAN,
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

// CPR/BLS
// Home Care Aid (HCA California)
// Certified Nurse Assistant (CNA)
// Home Health Aid (HHA)
// DSP 1
// DSP 2
// CPI 1
// CPI 2
// Registered Nurse (RN)

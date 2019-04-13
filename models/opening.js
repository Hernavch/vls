module.exports = function(sequelize, DataTypes) {
  var Opening = sequelize.define("Opening", {
    certs_req: DataTypes.STRING,
    exp_req: DataTypes.INTEGER,
    certs_pref: DataTypes.STRING,
    exp_pref: DataTypes.INTEGER,
    position: DataTypes.STRING,
    location: DataTypes.INTEGER
  });

  // Opening.associate = function(models) {
  //   // We're saying that a Opening should belong to an Author
  //   // A Opening can't be created without an Author due to the foreign key constraINTEGER
  //   Opening.belongsTo(models.Employer, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Opening;
};

module.exports = function(sequelize, DataTypes) {
    var Opening = sequelize.define("Opening", {
      certs_req: DataTypes.STRING,
      exp_req: DataTypes.INT,
      certs_pref: DataTypes.STRING,
      exp_pref: DataTypes.INT,
      position: DataTypes.STRING,
      location: DataTypes.INT
    });

    Opening.associate = function(models) {
        // We're saying that a Opening should belong to an Author
        // A Opening can't be created without an Author due to the foreign key constraint
        Opening.belongsTo(models.Employer, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Opening;
  };
  
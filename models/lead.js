

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lead = sequelize.define('Lead', {
    id: {
      type: DataTypes.UUID,
      defaultvalue: DataTypes.UUIDV4,

      allowNull: false,
      primarykey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Lead;
};

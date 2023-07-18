const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID, //  454654ASDASDF58-ASDASDFDG72424-524588DASDG14
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    background_image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    released:{
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  },
  { freezeTableName: true, timestamps: false }
  );
};

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    },
  });

  Task.associate = (models) => {
    Task.belongsTo(models.status, { foreignKey: 'status', as:'status'})
  }

  return Task;
};
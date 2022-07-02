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
    status_type: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    },
  });

  Task.associate = (models) => {
    Task.belongsTo(models.Status, { foreignKey: 'status_type', as:'status'})
  }

  return Task;
};
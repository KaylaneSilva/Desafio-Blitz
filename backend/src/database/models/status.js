module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    timestamps: false,
  });

  Status.associate = (models) => {
    Status.hasMany(models.Task, { foreignKey: 'status_type', as:'tasks'})
  }

  return Status;
};

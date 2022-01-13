module.exports = (sequelize, DataTypes) => {

    let alias = "Categoria";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }
    let config = {
        tableName: 'categorias',
        timestamps: false
    };

    const Categoria = sequelize.define(alias, cols, config);

  

    return Categoria;

}
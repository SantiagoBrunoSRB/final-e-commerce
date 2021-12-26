module.exports = (sequelize, DataTypes) => {

    let alias = "Categoria";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }
    let config = {
        tableName: 'categorias',
        timestamps: false
    };

    const Categoria = sequelize.define("Categoria", cols, config);

  

    return Categoria;

}
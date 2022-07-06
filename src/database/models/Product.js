
module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        prince: {
            type: dataTypes.INTEGER
        },
        ingredients: {
            type: dataTypes.STRING
        },
        img: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING,
        },
        categoryId: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        todaysDay:{
            type: dataTypes.BOOLEAN,
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    /* Product.associate = function (models) {
        Actor.belongsToMany(models.Movie, {
            as: "product",
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    } */
    return Product;
}
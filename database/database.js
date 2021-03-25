const sequelize = require('sequelize')

const connection = new sequelize('guiaperguntas', 'root', '35117423', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
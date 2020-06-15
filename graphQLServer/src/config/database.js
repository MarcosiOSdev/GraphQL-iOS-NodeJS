const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

//Insert
knex('users').insert({
    name: 'Teste',
    email: 'teste@teste.com',
    password: 'teste'
}).then(data => console.log(data))


//Select
knex('users')
    .then(resultado => console.log(resultado))


//Select 
knex('users')
    .where( {id: 1})
    .first()
    .then(resultado => console.log(resultado))
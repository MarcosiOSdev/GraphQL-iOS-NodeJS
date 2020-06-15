const db = require('../config/database')

var count = 2
var users = [
    {
        'id': 1,
        'name': 'Marcos',
        'email': 'mfelipesp@gmail.com',
        'password': 'myP@ssw0rd'
    },
    {
        'id': 2,
        'name': 'João',
        'email': 'myNameJonny@gmail.com',
        'password': 'Jon@123'
    },
]

module.exports = {
    Query: {
        async getUser(_, { id }) {
                          //db('users').where({ id: params.id })
                         //db('users').where({ id: id })
            // return await db('users').where({ id })


            return users.find(x => x.id == id)
        },

        async getUsers() {
            // return await db('users')
            return users
        }
    },

    Mutation: {
        async createUser(_, { input }){

            count++
            
            users.push( {
                id: count,
                name: input.name,
                email: input.email,
                password: input.password
            })
            

            const resultado = {
                id: count,
                name: input.name,
                email: input.email,
                password: input.password
            }


            // const resultado = await db('users').insert({
            //     name: input.name,
            //     email: input.email,
            //     password: input.password
            // })

            // const id = resultado[0]
            // return await db('users').where({id}).first()

            return resultado
        }
    }
}
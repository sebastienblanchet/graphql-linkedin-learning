import {
    buildSchema
} from 'graphql';

/*
Queries are type defined

{type}! is required parameted
[] array
*/
const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        emails: [Email]!
    }

    type Email {
        email: String
    }

    type Query {
        friend: Friend
    }
`)

export default schema;
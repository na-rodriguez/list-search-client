import { gql } from '@apollo/client'

export const GET_CONTACTS_BY_NAME = gql`
  query getContactsByName($name: String!) {
    getContactsByName(name: $name) {
        id
        name
        age
        picture
        eyeColor
        email
        company
      }
    }
`

export const GET_CONTACT = gql`
  query getContact($id: ID!) {
    getContact(id: $id) {
        id
        name
        age
        picture
        eyeColor
        email
        company
      }
    }
`

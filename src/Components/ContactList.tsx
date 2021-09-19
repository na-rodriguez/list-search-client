import { useState, useEffect } from 'react'
import { GET_CONTACTS_BY_NAME } from '../Graphql/Queries'
import { useLazyQuery } from '@apollo/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import ContactDetail from './ContactDetail'


export default function ContactList() {
    const [ searchTerm, setSearchTerm ] = useState('')

    const [getContactsByName, { data }] = useLazyQuery(GET_CONTACTS_BY_NAME, {
        variables: { name: searchTerm },
    })
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
        getContactsByName()
        if (data) {
            setContacts(data.getContactsByName);
        }
    }, [searchTerm, data, getContactsByName])

    return (
    <div style={{ margin: "1rem"}}>
        <Form style={{ margin: "2rem"}}>
            <Form.Group as={Row} className="mb-1" controlId="formTitle">
                <Form.Label column sm={12} md={2} lg={1} style={{fontWeight: "bold", fontSize: "large"}}>
                    MySocial
                </Form.Label>
                <Col sm={12} md={4} lg={5}>
                    <Form.Control
                        type="text"
                        style={{borderRadius: "1.5em"}}
                        onChange={event => setSearchTerm(event.target.value)}
                        placeholder="search"
                    />
                </Col>
            </Form.Group>
        </Form>
        <Container>
            <Row xs={1} md={4} className="g-4">
                {contacts.map((contact: any) => (
                    <Col key={contact.id}>
                        <ContactDetail contact={contact} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
    )
}

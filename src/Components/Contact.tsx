import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { GET_CONTACT } from '../Graphql/Queries'
import { useLazyQuery } from '@apollo/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Image } from 'react-bootstrap'

export default function Contact(props: any) {
    const { id } = useParams<{ id: string }>()
    const [getContact, { data }] = useLazyQuery(GET_CONTACT, {
        variables: { id: id },
    })

    const [contact, setContact] = useState({
        name : '',
        age: '',
        email: '',
        picture: '',
    })
    useEffect(() => {
        getContact()
        if (data)
            setContact(data.getContact)
    }, [data, getContact])

    return (
        <>
            <Row>
                <Col xs={3} md={2}>
                    <Image src={`${contact.picture}/100px180?text=Image cap`} rounded fluid />
                </Col>
                <Col xs={9} md={10}>
                    <div>name: {contact.name}</div>
                    <div>age: {contact.age}</div>
                    <div>email: {contact.email}</div>
                </Col>
            </Row>
        </>
    )
}

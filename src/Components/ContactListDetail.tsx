import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'
import ContactDetail from './ContactDetail'

export default function ContactListDetail(props: any) {
    const { contacts } = props

    return (
        <Row xs={1} md={4} className="g-4">
            {contacts.map((contact: any) => (
                <Col key={contact.id}>
                    <ContactDetail contact={contact} />
                </Col>
            ))}
        </Row>
    )
}

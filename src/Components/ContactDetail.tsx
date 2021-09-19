import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

export default function ContactDetail(props: any) {
  const {name, age, eyeColor, company, email, picture, id} = props.contact

  return (
    <Card style={{ padding: "1.5rem", borderRadius: "1.5rem"}}>
      <Link to={`/contact/${id}`}>
        <Card.Img variant="top" src={`${picture}/100px180?text=Image cap`} />
      </Link>
      <Card.Body style={{ paddingTop: "1rem"}}>
          <div>name: {name}</div>
          <div>age: {age}</div>
          <div>eyeColor: {eyeColor}</div>
          <div>company: {company}</div>
          <div>email: {email}</div>
      </Card.Body>
    </Card>
  )
}

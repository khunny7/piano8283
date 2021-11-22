import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Practices = () => {
  return (
    <>
      <h1>Practices</h1>
      <Link to="/practices/1">
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="https://picsum.photos/300/200" />
          <Card.Body>
            <Card.Title>[React]State and Props basic</Card.Title>
            <Card.Text>
              Try to make two components under 1 parent component.
              1. where the users input their name and email
              2. where that user information is displayed with different greetings.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 11/21/2021</small>
          </Card.Footer>
        </Card>
      </Link>
    </>
  )
};

export { Practices };

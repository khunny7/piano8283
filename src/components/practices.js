import { Card, Stack } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { practicesData } from './practice-data';

const Practices = () => {
  return (
    <>
      <h1>Practices</h1>
      <Stack direction="horizontal" gap={3}>
      {
        practicesData.map(practice => (
          <Link key={practice.id} to={`/practices/${practice.id}`} style={{ textDecoration: 'none' }}>
            <Card style={{ width: '24rem', height: '32rem'}}>
              <Card.Img variant="top" src={`https://picsum.photos/id/${practice.id}/300/150`} />
              <Card.Body>
                <Card.Title>{practice.title}</Card.Title>
                <Card.Text>
                  {practice.text}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated {practice.updated}</small>
              </Card.Footer>
            </Card>
          </Link>
        ))
      }
      </Stack>

    </>
  );
};

export { Practices };

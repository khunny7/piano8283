
import { Form } from 'react-bootstrap';

const UserInfoInput = (props) => {
  const { name, email, setName, setEmail } = props;

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Password"
        />
      </Form.Group>
    </Form>
  )

}

export { UserInfoInput };
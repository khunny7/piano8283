import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

const UserInfoDisplay = (props) => {
  const {
    name,
    email,
  } = props;

  const [greeting, setGreeting] = useState('Hello');

  return (
    <div>
      {
        (!name || !email) &&
        <Alert variant='warning'>We need both name and email to display greeting</Alert>
      }
      {
        name && email &&
        <>
          <p>{`${greeting} ${name}, your email is ${email}`}</p>
          <div>
            Set your custom greeting.
          </div>
          <Button onClick={() => setGreeting('Hello')}>Hello</Button>
          <Button onClick={() => setGreeting('Laliho')}>Laliho</Button>
          <Button onClick={() => setGreeting('Yo!')}>Yo!</Button>
        </>
      }

    </div>
  )
};

export { UserInfoDisplay };

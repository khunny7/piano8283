import { useState } from 'react';
import { UserInfoDisplay } from "./user-info-display";
import { UserInfoInput } from "./user-info-input";

const Practice1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <UserInfoInput
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      />
      <UserInfoDisplay name={name} email={email} />
    </>
  )
};

export { Practice1 };

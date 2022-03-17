import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const Signup = () => {
  const [email, setEmail] = useState('');
  const mailHandler = async () => {
    // window.location.href =
    //   'mailto:fabricatear@gmail.com?cc=sidhdharth@nyxwolves.com';
    // check mail is valid or not
    if (email.length === 0) {
      swal('Please enter your email');
      return;
    }

    // check mail is valid email or text
    if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      swal('Please enter valid email');
      return;
    }

    const data = {
      email,
    };
    // send a email to api call
    try {
      let res = await axios.post('https://nyxwolves.com/api/email', data);
      console.log(res);
      swal(
        'Good job!',
        'Mail Successfully sent ! We will contact you as soon as possible ',
        'success'
      );
    } catch (error) {
      swal('Oops...', 'Something went wrong!', 'error');
    }
  };
  return (
    <>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email id'
      />
      <button onClick={() => mailHandler()}>Join Now</button>
    </>
  );
};

export default Signup;

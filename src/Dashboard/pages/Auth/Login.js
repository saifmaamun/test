import GoogleLogo from './img/google-logo.png';
import {
  AuthWrapper,
  Button,
  FormGroup,
  GoogleButton,
  LoginButtons,
  LoginForm,
  LoginFormContainer,
  OrDivider,
} from './Auth.styled';
import useAuth from '../../../hooks/useAuth'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const {user, handleUserLogin, error, logOut, googleSignin
}=useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

// capture the email
  const hanldeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };

  // capture the password
  const hanldePassword = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };

  const handleLogin = () => {
    console.log(email,password)
    handleUserLogin(email, password);
    history.push('/dashboard')
    
  };
  
  // 
  // google login
  const googleLogin = () => {
    googleSignin()
    // if (user) {
    //   history.push('/dashboard')
    // }
    
    }


// 







  return (
    <AuthWrapper>
      <LoginFormContainer>
        <h1>Hello ! Welcome back.</h1>
        <p>Log in with your credentials</p>
        <LoginForm>
          <FormGroup>
            <label>Email Address</label>
            <input type='text' name='email' placebolder='Email Address' onBlur={hanldeEmail}/>
          </FormGroup>
          <FormGroup>
            <label>
              Password
              <span>Forgot Password ?</span>
            </label>
            <input type='password' name='password' placebolder='Password' onBlur={hanldePassword} />
          </FormGroup>

          <LoginButtons>
            <Button onClick={handleLogin} >Log in</Button> <br />
            <OrDivider>
              <span />
              OR
              <span />
            </OrDivider>
             
            
            <GoogleButton onClick={googleLogin} >
             

              <img src={GoogleLogo} alt='google-logo' />
              <span>Sign in with Google</span>
              

            </GoogleButton>
             
            <h3>{user.displayName}</h3>
            <Button onClick={logOut}>logOut</Button>
            <h4>
              Don't have an account? <span>Sign Up</span>
            </h4>
          </LoginButtons>
        </LoginForm>
      </LoginFormContainer>
    </AuthWrapper>
  );
};

export default Login;





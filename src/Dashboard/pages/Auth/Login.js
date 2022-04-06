import GoogleLogo from './img/google-logo.png';
import {
  AuthWrapper,
  Button,
  FacebookButton,
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
  const { user, handleUserLogin, error, logOut, googleSignin, facebookSignin}=useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const history = useHistory();

// agree on terms and conditions
  const checkboxHandler = () => {
    console.log(agree)
    setAgree(!agree);
    console.log(agree)
  };



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
    handleUserLogin(email, password,history);
    
  };
  
  // 
  // google login
  const googleLogin = () => {
    googleSignin(history)
    }
// 
  // facebook login
  const facebookLogin = () => {
    facebookSignin(history)
    console.log(user);
    }
// 



// 
  const btnHandler = () => {
    alert('The buttion is clickable!');
  };
  const signUp = () => {
    history.push("/register");
  };


  return (
    <AuthWrapper>
      <LoginFormContainer>
        <h1>Hello ! Welcome back.</h1>
        <p>Log in with your credentials</p>
        {error ? 
          <p style={{color:"red"}}> enter a valid email address or password </p> 
        : <p></p> }
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
          {/* <div>
            <input type="checkbox" id="rem" onChange={checkboxHandler} />
            <label htmlFor="agree"> Remember Me</label>
          </div>

          <br />

          <div>
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
          </div> */}
          <br />
         
          


          <LoginButtons >
           <Button onClick={handleLogin} >Log in</Button><br />
            <OrDivider>
              <span />
              OR
              <span />
            </OrDivider>
             
            
            <GoogleButton  onClick={googleLogin} >
             

              <img src={GoogleLogo} alt='google-logo' />
              <span>Sign in with Google</span>
              

            </GoogleButton>

            <FacebookButton onClick={facebookLogin} >
             

              <img src={GoogleLogo} alt='google-logo' />
              <span>Sign in with Facebook</span>
              

            </FacebookButton>
             
            <h3>{user.displayName}</h3>
            <Button onClick={logOut}>logOut</Button>
            <h4>
              Don't have an account? <button onClick={signUp}><span>Sign Up</span></button>
            </h4>
          </LoginButtons>
        </LoginForm>
      </LoginFormContainer>
    </AuthWrapper>
  );
};

export default Login;





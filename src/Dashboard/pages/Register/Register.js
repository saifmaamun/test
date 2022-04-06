import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  RegisterWrapper,
  RegisterFormContainer,
  RegisterForm,
  FormGroup,
  EyeIcon,
  OrDivider,
} from "./Register.styled";
import { auth, googleProvider } from "../../../firebase-config";
import GoogleLogo from "./img/google-logo.png";
import axios from "axios"
// import {resgisterUser} from "../../../apis"
import useAuth from '../../../hooks/useAuth';




const Register = () => {
  const { serverUrl}=useAuth()
  const [firebaseId, setFirebaseId] = useState("")
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState({
    email: false,
    name: false,
    website: false,
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    website: "",
    password: "",
    confirmPassword: "",
  });
  let [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { ...formData };

    // validate the form
    if (
      newUser.name === "" ||
      newUser.email === "" ||
      newUser.password === "" ||
      newUser.confirmPassword === ""
    ) {
      alert("Please enter the required fields");
      return;
    } else if (newUser.password !== newUser.confirmPassword) {
      alert("Both the Passwords should match!")
      return;
    }

    try {
      user = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.confirmPassword
      );
      // console.log(user.user.uid);
      setFirebaseId((prev) => user.user.uid)
      history.push("/projects");
      updateProfile(auth.currentUser, {
        displayName: newUser.name,
      });
      
    } catch (error) {
      console.log(error.message);
    }

    const createUser = async () => {
      const userData = {
        Name: newUser.name,
        Email: newUser.email,
        Firebase_Id: user.user.uid
      }
      // console.log(userData)
      try {
        const res = await axios.post(`${serverUrl}/users/create`, userData)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }

    createUser()



    return () => {
      setFormData({
        email: "",
        name: "",
        website: "",
        password: "",
        confirmPassword: "",
      });
    };
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // store it in local storage

        const createUser = async () => {
          const userData = {
            Name: result.user.displayName,
            Email: result.user.email,
            Firebase_Id: result.user.uid
          }
          // console.log(userData)
          try {
            const res = await axios.post("http://localhost:3001/users/create", userData)
            console.log(res)
          } catch (err) {
            console.log(err)
          }
        }
    
        createUser()
        // console.log(result.user.uid);
        // setFirebaseId(result.user.uid)
        // console.log("Firebase id: ", firebaseId)
        history.push("/projects");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateForm = (value) => {
    setFormData((prev) => {
      return { ...prev, ...value };
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = (value) => {
    setFocused((prev) => {
      return { ...prev, ...value };
    });
  };

  return (
    <RegisterWrapper>
      <RegisterFormContainer>
        <h1>New to Fabricate-AR?</h1>
        <h4>Register Now!</h4>
        <RegisterForm onSubmit={handleSubmit}>
          {/* Email */}
          <FormGroup>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="johnsmith123@email.com"
              required
              onBlur={(e) => handleFocus({ email: true })}
              focused={focused.email.toString()}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
            <span className="errorMessage">
              It should be a valid email address!
            </span>
          </FormGroup>

          {/* FirstName, LastName */}
          <FormGroup className="formGroup">
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              name="name"
              pattern="[A-Za-z ]{3,16}"
              placeholder="John Smith"
              required
              onBlur={(e) => handleFocus({ name: true })}
              focused={focused.name.toString()}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
            <span className="errorMessage">
              Name should be 3-30 characters and shouldn't include any special
              characters!
            </span>
          </FormGroup>

          {/* Website (optional) */}
          {/* <FormGroup>
            <label>Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
              required
              onBlur={(e) => handleFocus({ website: true })}
              focused={focused.website.toString()}
              onChange={(e) => updateForm({ website: e.target.value })}
            />
            <span className="errorMessage">It should be a valid link!</span>
          </FormGroup> */}

          {/* Password */}
          <FormGroup>
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$"
              required
              onBlur={(e) => handleFocus({ password: true })}
              focused={focused.password.toString()}
              onChange={(e) => updateForm({ password: e.target.value })}
            />
            <EyeIcon onClick={toggleShowPassword} className="eyeIcon">
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </EyeIcon>
            <span className="errorMessage">
              Password should be 8-16 characters and include both uppercase and
              lower case characters. It should include at least one number and
              one special character!
            </span>
          </FormGroup>

          {/* Confirm Password */}
          <FormGroup>
            <label>Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              name="password"
              pattern={formData.password}
              required
              onBlur={(e) => handleFocus({ confirmPassword: true })}
              onFocus={(e) => handleFocus({ confirmPassword: true })}
              focused={focused.confirmPassword.toString()}
              onChange={(e) => updateForm({ confirmPassword: e.target.value })}
            />
            <span className="errorMessage">Passwords don't match!</span>
          </FormGroup>

          {/* Captcha */}
          {/* Terms and Conditions */}

          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
          <OrDivider>
            <span />
            OR
            <span />
          </OrDivider>
          <button
            className="googleButton"
            type="submit"
            onClick={signInWithGoogle}
          >
            <img src={GoogleLogo} alt="google-logo" />
            Sign up with Google
          </button>
        </RegisterForm>
      </RegisterFormContainer>
    </RegisterWrapper>
  );
};

export default Register;

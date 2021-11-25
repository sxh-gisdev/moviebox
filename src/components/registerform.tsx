import { Box, Button, TextField } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../styles/form.styles";
import { AuthContext } from "../context/authContext";
import { auth } from "./base";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const user = useContext(AuthContext);
  // const auth = getAuth();

  //const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // async function handleSubmit(e: any) {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     register(emailRef.current.value, passwordRef.current.value);
  //     navigate("/");
  //     console.log(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     setError("Failed to create account");
  //     alert(error);
  //   }
  //   setLoading(false);
  // }

  const register = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      ).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <h2>Register</h2>
      <Box component="form" onSubmit={register}>
        <div>
          <TextField
            id="name"
            label="Name"
            type="text"
            ref={nameRef}
            required
            className="inputbox"
          />

          <TextField
            id="email"
            label="Email"
            type="email"
            ref={emailRef}
            required
            className="inputbox"
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            ref={passwordRef}
            required
            className="inputbox"
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={loading}
        >
          Register
        </Button>
      </Box>

      <div style={{ paddingTop: 30 }}>
        Already have an account?<Link to="/login">Sign In</Link>
      </div>
    </Wrapper>
  );
}

export default RegisterForm;

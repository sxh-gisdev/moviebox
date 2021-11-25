import { Box, Button, TextField } from "@material-ui/core";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../styles/form.styles";
import { auth } from "./base";

function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(
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
      <h2>Login</h2>
      <Box component="form" onSubmit={signIn}>
        <div>
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
          Log In
        </Button>
      </Box>
      <div style={{ paddingTop: 30 }}>
        Don't have an account?<Link to="/register">Sign Up</Link>
      </div>
    </Wrapper>
  );
}

export default LoginForm;

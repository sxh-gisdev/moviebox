import { Box, Button, TextField } from "@material-ui/core";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./styles/form.styles";
import { auth } from "../../auth/base";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        e.currentTarget.elements.email.value,
        e.currentTarget.elements.password.value
      ).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      });

      navigate("/", { replace: true });
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
            required
            className="inputbox"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
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

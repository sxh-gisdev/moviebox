import { Box, Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./styles/form.styles";
import { AuthContext } from "../../auth/authContext";
import { auth } from "../../auth/base";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function RegisterForm() {
  const user = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        e.currentTarget.elements.email.value,
        e.currentTarget.elements.password.value
      );
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <h2>Register</h2>
      <h3>{user?.email}</h3>
      <Box component="form" onSubmit={register}>
        <div>
          <TextField
            id="name"
            label="Name"
            type="text"
            required
            className="inputbox"
          />

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

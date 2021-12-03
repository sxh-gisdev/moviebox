import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../styles/card.styles";
import { AuthContext } from "../../auth/authContext";
import { auth } from "../../auth/base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Alert from "@mui/material/Alert";
import { LockOutlined } from "@material-ui/icons";

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
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        e.currentTarget.elements.email.value,
        e.currentTarget.elements.password.value
      );
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to create account");
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <Card className="card">
        <Avatar style={{ margin: "auto", background: "lightblue" }}>
          <LockOutlined />
        </Avatar>
        <h2>Register</h2>
        <Typography>
          {error && <Alert severity="error">{error}</Alert>}
        </Typography>
        <Box component="form" onSubmit={register}>
          <CardContent>
            <Typography>
              <TextField
                id="name"
                label="Name"
                type="text"
                required
                className="inputbox"
              />
            </Typography>
            <Typography>
              <TextField
                id="email"
                label="Email"
                type="email"
                required
                className="inputbox"
              />
            </Typography>

            <Typography>
              <TextField
                id="password"
                label="Password"
                type="password"
                required
                className="inputbox"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              disabled={loading}
              fullWidth
            >
              Register
            </Button>
          </CardActions>
        </Box>

        <Typography style={{ paddingTop: 30 }}>
          Already have an account?<Link to="/login">Sign In</Link>
        </Typography>
      </Card>
    </Wrapper>
  );
}

export default RegisterForm;

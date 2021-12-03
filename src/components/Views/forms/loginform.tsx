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
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../styles/card.styles";
import { auth } from "../../auth/base";
import Alert from "@mui/material/Alert";
import { LockOutlined } from "@material-ui/icons";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signIn = async (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        e.currentTarget.elements.email.value,
        e.currentTarget.elements.password.value
      );
      //.then(user => {
      // return user.getIdToken().then(idToken => {

      //   const csrfToken = getCookie('csrfToken')
      //   return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
      // })});
      navigate("/", { replace: true });
    } catch {
      setError("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <Card className="card">
        <Avatar style={{ margin: "auto", background: "lightblue" }}>
          <LockOutlined />
        </Avatar>
        <h2>Login</h2>
        <Typography>
          {error && <Alert severity="error">{error}</Alert>}
        </Typography>
        <Box component="form" onSubmit={signIn}>
          <CardContent>
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
              Log In
            </Button>
          </CardActions>
        </Box>
        <Typography style={{ paddingTop: 30 }}>
          Don't have an account?<Link to="/register">Sign Up</Link>
        </Typography>
      </Card>
    </Wrapper>
  );
}

export default LoginForm;

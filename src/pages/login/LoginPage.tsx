import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link as LinkMUI,
  useTheme,
} from "@mui/material";
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../shared/hooks";
import { BaseLayout } from "../../shared/layouts";

export const LoginPage: React.FC = () => {
  const theme = useTheme();
  const { onLogin } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnected, setKeepConnected] = useState(true);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setLoading(true);

      await onLogin(email, password);

      setLoading(false);
    },
    [email, password]
  );

  return (
    <Grid container spacing={0} justifyContent="center" direction="row">
      <Grid item>
        <Grid container direction="column" justifyContent="center" spacing={0}>
          <Paper variant="elevation" elevation={2}>
            <Grid item>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      type="email"
                      placeholder="Email"
                      fullWidth
                      name="email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoFocus
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      placeholder="Password"
                      fullWidth
                      name="password"
                      variant="outlined"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item>
              <LinkMUI href="#">Forgot Password?</LinkMUI>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

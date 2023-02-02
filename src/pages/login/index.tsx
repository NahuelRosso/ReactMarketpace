import {
  Container,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";

type LoginType = {
  username: string;
  password: string;
};
export const LoginPage: React.FC<{}> = () => {
  const [loginData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });
  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <Container sx={{ mt: 9 }} maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ ninHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="username"
                fullWidth
                type="text"
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={dataLogin}
              />
              <TextField
                name="password"
                fullWidth
                type="Password"
                label="password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataLogin}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

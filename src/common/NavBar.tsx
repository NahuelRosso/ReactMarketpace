import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexBrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>SocialUp</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" onClick={()=>navigate("/login")}>Login</Button>
                  <Button variant="contained">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

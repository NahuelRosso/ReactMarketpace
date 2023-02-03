import { Container, Button } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components";
import { useNotification } from "../../context/notification.context";

export const HomePage: React.FC<{}> = () => {
  const handleClick = () => {};
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola Mundo"
        description="Hola Bienvenido a SocialUp"
        element={
          <Button fullWidth variant="contained">
            Hola Mundo
          </Button>
        }
      />
    </Container>
  );
};

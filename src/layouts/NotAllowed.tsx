import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotAllowed = () => {
  const navigate = useNavigate();
  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
    >
      Você não possui permissão para acessar essa página
      <Button
        onClick={() => {
          navigate(-1);
        }}
        variant="outline"
      >
        Voltar
      </Button>
    </Box>
  );
};

export default NotAllowed;

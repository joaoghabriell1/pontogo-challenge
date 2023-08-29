import { Box, Heading, Image } from "@chakra-ui/react";
import IconLogo from "../../../assets/logo-pontogo-blue.svg";

const FormHeading = () => {
  return (
    <Box>
      <Image maxH="4.7rem" src={IconLogo} />
      <Heading mt="1.8rem" mb="1.4rem" fontSize="2xl" color="main-color">
        Faça login
      </Heading>
    </Box>
  );
};

export default FormHeading;

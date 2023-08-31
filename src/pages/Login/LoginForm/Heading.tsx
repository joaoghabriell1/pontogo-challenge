import IconLogo from "../../../assets/logo-pontogo-blue.svg";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FormHeading = () => {
  return (
    <Box>
      <Link to="/">
        <Image
          mx={{ base: "auto", sm: "0rem" }}
          maxH={{ base: "3rem", sm: "4.7rem" }}
          src={IconLogo}
        />
      </Link>
      <Heading mt="1.8rem" mb="1.4rem" fontSize="2xl" color="main-color">
        Faça login
      </Heading>
    </Box>
  );
};

export default FormHeading;

import { Box } from "@chakra-ui/react";

const FooterContent = () => {
  return (
    <>
      <Box textAlign={{ base: "center", md: "start" }} color="pure-white">
        <Box fontWeight="bold" fontSize="lg">
          @pontogo
        </Box>
        <Box fontWeight="300" fontSize="sm">
          Se conecta com a gente
        </Box>
      </Box>
    </>
  );
};

export default FooterContent;

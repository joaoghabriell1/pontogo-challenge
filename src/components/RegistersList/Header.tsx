import { Box } from "@chakra-ui/react";

const RegistersListHeader = () => {
  return (
    <>
      <Box
        as="header"
        borderRadius="0.3125rem"
        minH="4.5rem"
        display="flex"
        alignItems="center"
      >
        <Box
          fontSize={{ base: ".8rem", md: "1.375rem" }}
          fontWeight="700"
          minW={{ base: "7rem", sm: "9.5rem", md: "16.5rem" }}
        >
          Colaborador
        </Box>
        <Box
          fontSize={{ base: ".8rem", md: "1.375rem" }}
          fontWeight="700"
          minW={{ base: "4rem", sm: "8.5rem", md: "15.5rem" }}
        >
          Data
        </Box>
        <Box fontSize={{ base: ".8rem", md: "1.375rem" }} fontWeight="700">
          Horário
        </Box>
      </Box>
    </>
  );
};

export default RegistersListHeader;

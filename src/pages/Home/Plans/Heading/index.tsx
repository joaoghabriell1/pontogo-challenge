import { Box, Heading, Text } from "@chakra-ui/react";
const PlansHeading = () => {
  return (
    <>
      <Box my="4.3rem">
        <Heading
          fontWeight="800"
          mb="4"
          color="pure-white"
          textAlign="center"
          fontSize="2xl"
        >
          Encontre o plano perfeito
        </Heading>
        <Text
          color="pure-white"
          textAlign="center"
          fontSize="lg"
          mx="auto"
          maxW="52ch"
          opacity=".7"
        >
          Escolha o plano que melhor se encaixa na sua empresa e faça sua
          assinatura, dentro de 72h iremos liberar seus acessos.
        </Text>
      </Box>
    </>
  );
};

export default PlansHeading;

import { Heading, Image, Box, Text } from "@chakra-ui/react";
import Hero from "../../../assets/hero-login.png";
const LoginHero = () => {
  return (
    <>
      <Box textAlign="center" flexBasis="100%">
        <Image
          objectFit="cover"
          mx="auto"
          h={{ base: "0rem", sm: "36rem" }}
          src={Hero}
        />
        <Heading
          my=".7rem"
          fontSize={{ base: "2rem", sm: "2xl" }}
          fontWeight="700"
          color="main-color"
        >
          Bem vido ao PontoGo
        </Heading>
        <Text
          mx="auto"
          maxW="30ch"
          opacity="0.7"
          fontSize={{ base: "1.4rem", sm: "1.5625rem" }}
          color="main-color"
          mb={{ base: "2rem", sm: "0rem" }}
        >
          Aqui você fará toda gestão do seu sistema de pontos.
        </Text>
      </Box>
    </>
  );
};

export default LoginHero;

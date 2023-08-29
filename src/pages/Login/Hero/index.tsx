import { Heading, Image, Box, Text } from "@chakra-ui/react";
import Hero from "../../../assets/hero-login.png";
const LoginHero = () => {
  return (
    <>
      <Box textAlign="center" flexBasis="100%">
        <Image mx="auto" h="36rem" src={Hero} />
        <Heading my=".7rem" fontSize="2xl" fontWeight="700" color="main-color">
          Bem vido ao PontoGo
        </Heading>
        <Text
          mx="auto"
          maxW="30ch"
          opacity="0.7"
          fontSize="1.5625rem"
          color="main-color"
        >
          Aqui você fará toda gestão do seu sistema de pontos.
        </Text>
      </Box>
    </>
  );
};

export default LoginHero;

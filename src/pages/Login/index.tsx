import { Container, Flex } from "@chakra-ui/react";
import LoginForm from "./LoginForm";
import LoginHero from "./Hero";
const Login = () => {
  return (
    <>
      <Container
        bg="rgba(255, 255, 255, 0.70)"
        backdropBlur="25px"
        maxW="1136px"
        px={{ base: "1rem", xl: "0rem" }}
        h="100vh"
      >
        <Flex flexDirection={{ base: "column", sm: "row" }}>
          <LoginHero />
          <LoginForm />
        </Flex>
      </Container>
    </>
  );
};

export default Login;

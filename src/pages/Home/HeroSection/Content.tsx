import { Heading, Box, Text, ButtonGroup } from "@chakra-ui/react";
import PrimaryButton from "../../../components/PrimaryButton";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Box
        color="pure-white"
        pt={{ base: "0rem", lg: "2rem" }}
        textAlign={{ base: "center", lg: "start" }}>
        <Heading
          fontWeight="300"
          as="h3"
          fontFamily="inherit"
          letterSpacing="0.2475rem"
          textTransform="uppercase"
          opacity=".9"
          fontSize="xl">
          esquece o ponto manual
        </Heading>
        <Heading
          fontWeight="800"
          as="h2"
          fontSize="2xl"
          fontFamily="inherit"
          opacity=".9"
          lineHeight="3.8rem"
          my="1.3rem">
          Chegou a nova realidade para{" "}
          <Box as="span" color="secondary-color">
            Controle de Pontos
          </Box>
        </Heading>
        <Text
          mb="1.8rem"
          maxW="42ch"
          fontSize="md"
          mx={{ base: "auto", lg: "0" }}
          textAlign={{ base: "center", lg: "start" }}>
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma
          fácil e rápida, possuindo também uma Dashboard intuitiva.
        </Text>

        <ButtonGroup>
          <PrimaryButton
            bg="secondary-color"
            color="pure-white"
            text="Assinar agora"
          />
          <Link onClick={() => window.location.replace("/#plans")} to="#plans">
            <PrimaryButton
              bg="transparent"
              color="pure-white"
              variant="outline"
              text="Ver Planos"
              border=" 1px solid pure-white"
            />
          </Link>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Content;

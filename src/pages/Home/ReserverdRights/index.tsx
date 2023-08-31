import { Box, Divider, AbsoluteCenter } from "@chakra-ui/react";

const AllRightsReserved = () => {
  return (
    <>
      <Box position="relative" padding="10">
        <Divider position="absolute" left="70%" />
        <AbsoluteCenter
          textAlign="center"
          bg="transparent"
          color="pure-white"
          px="4"
        >
          PontoGo - Todos direitos reservados
        </AbsoluteCenter>
        <Divider position="absolute" right="70%" />
      </Box>
    </>
  );
};

export default AllRightsReserved;

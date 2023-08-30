import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH={{ base: "300px", sm: "320px", md: "480px" }}
      >
        <Spinner />
      </Box>
    </>
  );
};

export default Loading;

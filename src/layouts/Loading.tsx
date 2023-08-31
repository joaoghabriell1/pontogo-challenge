import { Spinner, Box } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
    >
      <Spinner />
    </Box>
  );
};

export default Loading;

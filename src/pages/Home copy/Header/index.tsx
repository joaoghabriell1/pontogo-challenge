import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <Box color="pure-white" pt={12}>
        <Flex align="center" justify="space-between">
          <Logo />
          <NavBar />
        </Flex>
      </Box>
    </header>
  );
};

export default Header;

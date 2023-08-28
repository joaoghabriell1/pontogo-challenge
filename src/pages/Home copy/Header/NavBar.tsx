import { Link } from "react-router-dom";
import { List, ListItem, Flex } from "@chakra-ui/react";

import PrimaryButton from "../../../components/PrimaryButton";

const NavBar = () => {
  return (
    <nav>
      <List>
        <Flex align="center">
          <ListItem pl={{ base: "3", sm: "12" }}>
            <Link to="/">Início</Link>
          </ListItem>
          <ListItem pl={{ base: "3", sm: "12" }}>
            <Link to="/">Planos</Link>
          </ListItem>
          <ListItem pl={{ base: "3", sm: "12" }}>
            <PrimaryButton
              bg="pure-white"
              color="main-color"
              text="Fazer login"
            />
          </ListItem>
        </Flex>
      </List>
    </nav>
  );
};

export default NavBar;

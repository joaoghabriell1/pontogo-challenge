import PrimaryButton from "../../../components/PrimaryButton";
import { List, ListItem, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/login");
  };

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
              onClick={onClickHandler}
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

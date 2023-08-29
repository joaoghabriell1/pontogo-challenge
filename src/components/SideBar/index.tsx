import { Box, Button, Image, List, ListItem } from "@chakra-ui/react";
import RegistersIcon from "../../assets/icon-registers.svg";
import LogoutIcon from "../../assets/icon-logout.svg";
import Logo from "../../assets/logo-pontogo-blue.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface Props {
  role: string;
}

const Sidebar = ({ role }: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    navigate("/login");
  };

  return (
    <>
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        w="11.25rem"
        bg="pure-white"
        boxShadow=" 0px 4px 10px 0px rgba(0, 0, 0, 0.10)"
      >
        <Box p="2.5rem 1.4rem">
          <Link to="/">
            <Image maxW="100%" src={Logo} />
          </Link>
        </Box>
        <Box flex="1" as="nav">
          <List
            borderLeft="4px solid rgba(51, 6, 147, 1)"
            borderBlock="1px solid rgba(10, 9, 9, 0.08)"
            p="2.5rem 1.5rem"
            color="main-color"
          >
            <ListItem _hover={{ cursor: "pointer" }} display="flex" gap=".6rem">
              <Box>
                <Image src={RegistersIcon} />
              </Box>
              Registros
            </ListItem>
          </List>
        </Box>
        <Button
          fontSize="sm"
          bg="none"
          justifyContent="start"
          gap="1rem"
          fontWeight="400"
          p="1.25rem"
          color="dark-grey"
          onClick={handleLogout}
        >
          <Image src={LogoutIcon} />
          Sair
        </Button>
      </Box>
    </>
  );
};

export default Sidebar;

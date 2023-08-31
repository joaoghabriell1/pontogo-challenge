import { Box, List, ListItem, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import RegistersIcon from "../../assets/icon-registers.svg";
import DashBoardIcon from "../../assets/icon-dashboard.svg";

interface Props {
  role: string;
}

const NavBar = ({ role }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 770px)");
  return (
    <Box flex="1" as="nav">
      <List
        borderLeft="4px solid rgba(51, 6, 147, 1)"
        borderBlock="1px solid rgba(10, 9, 9, 0.08)"
        p="2.5rem 1.25rem"
        color="main-color"
      >
        <ListItem
          fontSize=".875rem"
          alignItems="center"
          _hover={{ cursor: "pointer" }}
          display="flex"
          gap=".4rem"
        >
          <Box>
            {role === "user" ? (
              <Image minW="18px" height="1.5rem" src={RegistersIcon} />
            ) : (
              <Image minW="18px" height="19px" src={DashBoardIcon} />
            )}
          </Box>
          {!isMobile && role === "user" && "Meus Registros"}
          {!isMobile && role === "admin" && "Dashboard"}
        </ListItem>
      </List>
    </Box>
  );
};

export default NavBar;

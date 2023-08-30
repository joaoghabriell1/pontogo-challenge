import { Box } from "@chakra-ui/react";
import LogoutButton from "./LogoutButton";
import NavBar from "./NavBar";
import Logo from "./Logo";

interface Props {
  role: string;
}

const Sidebar = ({ role }: Props) => {
  return (
    <>
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        w={{ base: "4.5rem", md: "11.25rem" }}
        bg="pure-white"
        boxShadow=" 0px 4px 10px 0px rgba(0, 0, 0, 0.10)"
        zIndex="1500"
      >
        <Logo />
        <NavBar role={role} />
        <LogoutButton />
      </Box>
    </>
  );
};

export default Sidebar;

import { Container, Flex } from "@chakra-ui/react";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router";

const PrivateRoutesLayout = () => {
  return (
    <>
      <Container p="0" maxW="100%" h="100vh">
        <Flex h="100%">
          <Sidebar />
          <Outlet />
        </Flex>
      </Container>
    </>
  );
};

export default PrivateRoutesLayout;

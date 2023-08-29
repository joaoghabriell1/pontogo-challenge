import { Container, Flex } from "@chakra-ui/react";
import { GET_CURRENT_USER } from "../api/queries";
import Sidebar from "../components/SideBar";
import { useLocation } from "react-router";
import { useQuery } from "@apollo/client";
import { Navigate } from "react-router";
import { Outlet } from "react-router";

const PrivateRoutesLayout = () => {
  const {
    loading,
    error,
    data: userIsLoggedIn,
  } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });

  const currentUserRole = userIsLoggedIn?.me?.role?.name;
  const currentUserId = userIsLoggedIn?.me?.id;
  const { pathname } = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userIsLoggedIn) {
    return <Navigate to="/login"></Navigate>;
  }

  if (error) {
    return <p>Um erro inesperado aconteceu.</p>;
  }

  if (pathname === "/dashboard" && currentUserRole !== "admin") {
    return <p>Você não possui permissão para acessar essa página</p>;
  }

  if (pathname === "/meus-registros" && currentUserRole !== "user") {
    return <p>Você nssão possui permissão para acessar essa página</p>;
  }

  return (
    <>
      <Container p="0" maxW="100%" h="100vh">
        <Flex h="100%">
          <Sidebar role={currentUserRole!} />
          <Outlet context={{ id: currentUserId }} />
        </Flex>
      </Container>
    </>
  );
};

export default PrivateRoutesLayout;

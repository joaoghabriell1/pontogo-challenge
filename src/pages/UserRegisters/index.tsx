import { LOAD_CURRENT_USER_REGISTERS } from "../../api/queries";
import { useDisclosure, Box } from "@chakra-ui/react";
import { useOutletContext } from "react-router";
import { Outlet } from "../../types/Outlet";
import { useQuery } from "@apollo/client";

import RegistersListHeader from "../../components/RegistersList/Header";
import RegistersList from "../../components/RegistersList";
import RegisterModal from "../../components/RegisterModal";
import RegisterButton from "../../components/SecondaryButotn";

const UserRegisters = () => {
  const { id }: Outlet = useOutletContext();

  const { data, loading, error } = useQuery(LOAD_CURRENT_USER_REGISTERS, {
    variables: {
      userId: id,
      limit: 5,
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }

  return (
    <Box overflow="hidden" p="2.5rem 1.8rem 5.5rem 1.8rem" flex="1">
      <RegisterModal isOpen={isOpen} onClose={onClose} />
      <RegisterButton text="Registrar ponto" onClick={onOpen} />
      <RegistersListHeader />
      <RegistersList registeredTimes={data!} />
    </Box>
  );
};

export default UserRegisters;

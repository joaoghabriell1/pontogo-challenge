import { LOAD_CURRENT_USER_REGISTERS } from "../../api/queries";
import { useDisclosure, Box } from "@chakra-ui/react";
import { useOutletContext } from "react-router";
import { Outlet } from "../../types/Outlet";
import { useQuery } from "@apollo/client";
import { useState } from "react";

import RegistersListFooter from "../../components/RegistersList/Footer/index";
import RegistersListHeader from "../../components/RegistersList/Header";
import RegistersList from "../../components/RegistersList";
import RegisterModal from "../../components/RegisterModal";
import RegisterButton from "../../components/SecondaryButotn";

const limit = 6;

const UserRegisters = () => {
  const { id }: Outlet = useOutletContext();
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(LOAD_CURRENT_USER_REGISTERS, {
    variables: {
      userId: id,
      limit: limit,
      start: page * limit,
    },
  });

  console.log(page);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }

  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { value, innerText } = e.currentTarget;
    if (value === "next") {
      setPage((prev) => {
        const nextPage = prev + 1;
        return nextPage;
      });
    }
    if (value === "previous") {
      if (page == 1) {
        return;
      }
      setPage((prev) => {
        const previousPage = prev - 1;
        return previousPage;
      });
    }
    if (value === "toPage") {
      console.log(innerText);
      setPage(+innerText);
    }
  };

  return (
    <Box p="2.5rem 1.8rem 5.5rem 1.8rem" flex="1">
      <RegisterModal isOpen={isOpen} onClose={onClose} />
      <RegisterButton text="Registrar ponto" onClick={onOpen} />
      <RegistersListHeader />
      <RegistersList registeredTimes={data!} />
      <RegistersListFooter page={page} onClick={handlePageChange} id={id} />
    </Box>
  );
};

export default UserRegisters;

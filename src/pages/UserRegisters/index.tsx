import { useDisclosure, Box } from "@chakra-ui/react";
import { useOutletContext } from "react-router";
import { Outlet } from "../../types/Outlet";
import { useState, Suspense } from "react";

import ListSkeleton from "../../components/RegistersList/SkeletonLoading/Skeleton";
import CurrentUserRegistersListFooter from "./CurrentUserRegistersListFooter";
import RegistersListHeader from "../../components/RegistersList/Header";
import CurrentUserRegistersList from "./CurrentUserRegistersList";
import RegisterButton from "../../components/SecondaryButotn";
import RegisterModal from "../../components/RegisterModal";

const UserRegisters = () => {
  const { id }: Outlet = useOutletContext();
  const [page, setPage] = useState(1);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p="2.5rem 1.8rem 5.5rem 1.8rem" flex="1">
      <RegisterModal isOpen={isOpen} onClose={onClose} />
      <RegisterButton text="Registrar ponto" onClick={onOpen} />
      <RegistersListHeader />
      <Suspense fallback={<ListSkeleton />}>
        <CurrentUserRegistersList page={page} />
      </Suspense>
      <CurrentUserRegistersListFooter page={page} setPage={setPage} id={id} />
    </Box>
  );
};

export default UserRegisters;

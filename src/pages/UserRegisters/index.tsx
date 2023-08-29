import { LOAD_CURRENT_USER_REGISTERS } from "../../api/queries";
import RegistersList from "../../components/RegistersList";
import { useOutletContext } from "react-router";
import RegistersListHeader from "../../components/RegistersList/Header";
import { Outlet } from "../../types/Outlet";
import { useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";
const UserRegisters = () => {
  const { id }: Outlet = useOutletContext();

  const { data, loading, error } = useQuery(LOAD_CURRENT_USER_REGISTERS, {
    variables: {
      userId: id,
      limit: 5,
    },
  });

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }

  return (
    <Box overflow="hidden" p="2.5rem 1.8rem 5.5rem 1.8rem" flex="1">
      <RegistersListHeader />
      <RegistersList registeredTimes={data!} />
    </Box>
  );
};

export default UserRegisters;

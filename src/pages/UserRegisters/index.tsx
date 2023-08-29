import { LOAD_CURRENT_USER_REGISTERS } from "../../api/queries";
import RegistersList from "../../components/RegistersList";
import { useOutletContext } from "react-router";
import { Outlet } from "../../types/Outlet";
import { useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";

const UserRegisters = () => {
  const { id }: Outlet = useOutletContext();

  const { data, loading, error } = useQuery(LOAD_CURRENT_USER_REGISTERS, {
    variables: {
      userId: id,
    },
  });

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }

  return (
    <Box bg="red" flex="1">
      <RegistersList registeredTimes={data!} />
    </Box>
  );
};

export default UserRegisters;

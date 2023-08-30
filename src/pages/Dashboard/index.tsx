import AllUsersRegistersList from "./AllUsersRegisters";
import AllRegistersListFooter from "./AllRegistersListFooter";
import { useState, Suspense } from "react";

import { Box } from "@chakra-ui/react";
const Dashboard = () => {
  const [page, setPage] = useState(1);

  return (
    <Box p="2.5rem 1.8rem 5.5rem 1.8rem" flex="1">
      <Suspense fallback={<p>Loading...</p>}>
        <AllUsersRegistersList page={page} />
      </Suspense>
      <AllRegistersListFooter setPage={setPage} page={page} />
    </Box>
  );
};

export default Dashboard;

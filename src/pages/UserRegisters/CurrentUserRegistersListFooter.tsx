import RegistersListFooter from "../../components/RegistersList/Footer";
import { LOAD_CURRENT_USER_REGISTERS } from "../../api/queries";
import { useQuery } from "@apollo/client";
import { Flex } from "@chakra-ui/react";

interface Props {
  id: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const CurrentUserRegistersListFooter = ({ id, page, setPage }: Props) => {
  const { data } = useQuery(LOAD_CURRENT_USER_REGISTERS, {
    variables: {
      userId: id,
    },
  });

  return (
    <Flex mt="1.25rem">
      <RegistersListFooter data={data} page={page} setPage={setPage} />
    </Flex>
  );
};

export default CurrentUserRegistersListFooter;

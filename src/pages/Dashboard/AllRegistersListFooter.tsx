import RegistersListFooter from "../../components/RegistersList/Footer";
import { GET_ALL_REGISTERED_TIMES } from "../../api/queries";
import { useQuery } from "@apollo/client";
import { Flex } from "@chakra-ui/react";

interface Props {
  id?: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const AllRegistersList = ({ id, page, setPage }: Props) => {
  const { data } = useQuery(GET_ALL_REGISTERED_TIMES, {
    variables: {},
  });

  return (
    <Flex mt="1.25rem">
      <RegistersListFooter setPage={setPage} data={data} page={page} />
    </Flex>
  );
};

export default AllRegistersList;

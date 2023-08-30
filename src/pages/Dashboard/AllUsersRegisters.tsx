import { GET_ALL_REGISTERED_TIMES } from "../../api/queries";
import RegistersList from "../../components/RegistersList";
import { useSuspenseQuery } from "@apollo/client";

const limit = 6;
const AllUsersRegistersList = ({ page }: { page: number }) => {
  const { data, error } = useSuspenseQuery(GET_ALL_REGISTERED_TIMES, {
    variables: {
      limit: limit,
      start: page * limit,
    },
  });

  if (error) {
    return <p>Um erro inesperado aconteceu.</p>;
  }

  return (
    <div>
      <RegistersList data={data} />
    </div>
  );
};

export default AllUsersRegistersList;

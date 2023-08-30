import RegistersList from "../../components/RegistersList";
import { useOutletContext } from "react-router";
import { useSuspenseQuery } from "@apollo/client";
import { Outlet } from "../../types/Outlet";
import { LOAD_CURRENT_USER_REGISTERS } from "../../api/queries";

const limit = 6;
const CurrentUserRegistersList = ({ page }: { page: number }) => {
  const { id }: Outlet = useOutletContext();
  const { data, error } = useSuspenseQuery(LOAD_CURRENT_USER_REGISTERS, {
    variables: {
      userId: id,
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

export default CurrentUserRegistersList;

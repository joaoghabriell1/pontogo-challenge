import { LOAD_CURRENT_USER_REGISTERS } from "../../api/queries";
import RegistersList from "../../components/RegistersList";
import { useSuspenseQuery } from "@apollo/client";
import { useOutletContext } from "react-router";
import { Outlet } from "../../types/Outlet";

const limit = 6;
const CurrentUserRegistersList = ({ page }: { page: number }) => {
  const { id }: Outlet = useOutletContext();
  const { data, error } = useSuspenseQuery(LOAD_CURRENT_USER_REGISTERS, {
    variables: {
      sort: "timeRegistered:ASC",
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

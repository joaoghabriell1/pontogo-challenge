import { Outlet } from "react-router";

const PrivateRoutesLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoutesLayout;

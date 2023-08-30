import LogoutIcon from "../../assets/icon-logout.svg";
import { Button, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const LogoutButton = () => {
  const [isMobile] = useMediaQuery("(max-width: 770px)");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    navigate("/login");
  };

  return (
    <div>
      <Button
        fontSize={{ base: "xs", sm: "sm" }}
        bg="none"
        justifyContent={{ base: "center", sm: "start" }}
        gap="1rem"
        fontWeight="400"
        p="1.25rem"
        w="100%"
        color="dark-grey"
        onClick={handleLogout}
      >
        <Image w={{ base: "15px", sm: "25px" }} src={LogoutIcon} />
        {!isMobile && "Sair"}
      </Button>
    </div>
  );
};

export default LogoutButton;

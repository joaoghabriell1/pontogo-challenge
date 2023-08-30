import LogoMobile from "../../assets/logo-mobile-pontogo-blue.svg";
import LogoIcon from "../../assets/logo-pontogo-blue.svg";
import { useMediaQuery } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  const [isMobile] = useMediaQuery("(max-width: 770px)");

  return (
    <Box p={{ base: "1.5rem 1.4rem", sm: "2.5rem 1.4rem" }}>
      <Link to="/">
        {isMobile ? (
          <Image w="4rem" maxW="100%" src={LogoMobile} />
        ) : (
          <Image minW="5rem" maxW="100%" src={LogoIcon} />
        )}
      </Link>
    </Box>
  );
};

export default Logo;

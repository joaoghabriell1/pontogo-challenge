import DesktopLogo from "../../../assets/icon-logo-white.svg";
import MobileLogo from "../../../assets/icon-mobile-logo.png";
import { useMediaQuery } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Logo = () => {
  const [isMobile] = useMediaQuery("(max-width: 580px)");

  return (
    <>
      <Image src={isMobile ? MobileLogo : DesktopLogo} alt="PontoGo logo" />
    </>
  );
};

export default Logo;

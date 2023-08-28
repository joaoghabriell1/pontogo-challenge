import { Image, Box } from "@chakra-ui/react";
import Hero from "../../../assets/image-hero-svg.svg";

const HeroIcon = () => {
  return (
    <>
      <Box height={{ base: "15rem", sm: "18rem", md: "25rem", lg: "31rem" }}>
        <Image
          objectFit="cover"
          objectPosition="top"
          height="100%"
          maxW="36rem"
          src={Hero}
        />
      </Box>
    </>
  );
};

export default HeroIcon;

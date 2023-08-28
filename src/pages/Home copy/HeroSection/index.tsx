import { Flex } from "@chakra-ui/react";
import HeroIcon from "./HeroIcon";
import Content from "./Content";

const HeroSection = () => {
  return (
    <>
      <Flex
        alignItems={{ base: "center" }}
        mt="2.5rem"
        direction={{ base: "column-reverse", lg: "row" }}
      >
        <Content />
        <HeroIcon />
      </Flex>
    </>
  );
};

export default HeroSection;

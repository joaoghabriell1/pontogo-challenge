import BrainnyLogo from "../../../assets/logo-brainny.png";
import AmopetLogo from "../../../assets/logo-amopet.svg";
import BusLogo from "../../../assets/logo-bus.svg";
import GoStudyLogo from "../../../assets/logo-go-study.svg";
import { Image, HStack } from "@chakra-ui/react";

const Companies = () => {
  return (
    <>
      <HStack
        mt="3.5rem"
        px="2rem"
        align="center"
        justify="space-between"
        wrap="wrap"
        rowGap="2rem"
      >
        <Image h={{ base: "2.5rem", lg: "3.5rem" }} src={BrainnyLogo} />
        <Image h={{ base: "2.5rem", lg: "3.5rem" }} src={AmopetLogo} />
        <Image h={{ base: "2.5rem", lg: "3.5rem" }} src={BusLogo} />
        <Image h={{ base: "2.5rem", lg: "3.5rem" }} src={GoStudyLogo} />
      </HStack>
    </>
  );
};

export default Companies;

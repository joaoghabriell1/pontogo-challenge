import BrainnyLogo from "../../../assets/logo-brainny.png";
import AmopetLogo from "../../../assets/logo-amopet.svg";
import BusLogo from "../../../assets/logo-bus.svg";
import GoStudyLogo from "../../../assets/logo-go-study.svg";
import { Image, HStack } from "@chakra-ui/react";

const Companies = () => {
  return (
    <>
      <HStack
        mt="4rem"
        px={{ base: "1rem", lg: "4rem" }}
        align="center"
        justify="space-between"
        wrap="wrap"
        rowGap="2rem"
      >
        <Image h={{ base: "2.5rem", lg: "4rem" }} src={BrainnyLogo} />
        <Image h={{ base: "2.5rem", lg: "4rem" }} src={AmopetLogo} />
        <Image h={{ base: "2.5rem", lg: "4rem" }} src={BusLogo} />
        <Image h={{ base: "2.5rem", lg: "4rem" }} src={GoStudyLogo} />
      </HStack>
    </>
  );
};

export default Companies;

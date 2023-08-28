import { Card, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Header from "./Header";
import BenefitsList from "./BenefitsList";
import { Plan } from "../plans";
import PrimaryButton from "../../../../components/PrimaryButton";

interface Props {
  selected: boolean;
  plan: Plan;
  position: number;
}

const PlanCard = ({ selected, plan, position }: Props) => {
  return (
    <Card
      display={position === 3 ? "none" : "static"}
      padding={{ base: "2.5rem 1rem", sm: "2.75rem 2.75em" }}
      borderRadius=".625rem"
      bgColor="rgba(212, 135, 135, 0.08)"
      backdropBlur="2.5px"
      backdropFilter="blur(2.5px)"
      color="pure-white"
      variant="outline"
      flexBasis="100%"
      border="1px solid #8A53FF"
      sx={{ backdropFilter: "blur(2.5px)" }}
      minW={{ base: "17rem", sm: "20rem" }}
      ml={selected ? "-3.5rem" : "0rem"}
      mr={selected ? "-3.5rem" : "0rem"}
      opacity={selected ? "1" : ".3"}
    >
      <Header header={plan.heading} />
      <BenefitsList benefits={plan.benefits} />
      <Box mt="1.8rem" display={selected ? "flex" : "none"}>
        <PrimaryButton
          text="Assinar agora"
          bg="secondary-color"
          color="pure-white"
        />
      </Box>
    </Card>
  );
};

export default PlanCard;

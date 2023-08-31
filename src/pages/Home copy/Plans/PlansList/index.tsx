import RightArrow from "../../../../assets/icon-right-arrow.svg";
import LeftArrow from "../../../../assets/icon-left-arrow.svg";
import { HStack, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PlanCard from "../PlanCard";
import { useState } from "react";
import { plans } from "../plans";

const PlansList = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  const [plansOrder, setPlansOrder] = useState<number[]>([1, 2, 3, 4]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    if (value === "left") {
      setSelectedPlan((prev) => {
        if (prev === 1) {
          return 4;
        }
        return prev - 1;
      });

      setPlansOrder((prev) => {
        const newOrder = prev.map((num, index, array) => {
          if (index === 0) {
            return array[3];
          }
          return array[index - 1];
        });
        return newOrder;
      });
    }

    if (value === "right") {
      setSelectedPlan((prev) => {
        if (prev === 4) {
          return 1;
        }
        return prev + 1;
      });
      setPlansOrder((prev) => {
        const newOrder = prev.map((num, index, array) => {
          if (index === 3) {
            return array[0];
          }
          return array[index + 1];
        });
        return newOrder;
      });
    }
  };

  return (
    <>
      <Flex id="plans" align="center" justify="center">
        <motion.button
          whileHover={{
            scale: "1.4",
          }}
          whileTap={{
            scale: "1.5",
          }}
          value="left"
          onClick={handleClick}
        >
          <Image minW="2rem" src={LeftArrow} />
        </motion.button>
        <HStack
          width="990px"
          padding=".3rem"
          mx="auto"
          overflowX="hidden"
          justify="center"
        >
          {plansOrder.map((num, index) => {
            const plan = plans.find((plan) => plan.id == num);
            return (
              <PlanCard
                key={index}
                position={index}
                selected={selectedPlan === plan!.id}
                plan={plan!}
              />
            );
          })}
        </HStack>
        <motion.button
          whileHover={{
            scale: "1.4",
          }}
          whileTap={{
            scale: "1.6",
          }}
          value="right"
          onClick={handleClick}
        >
          <Image minW="2rem" src={RightArrow} />
        </motion.button>
      </Flex>
    </>
  );
};

export default PlansList;

import { List, ListItem, Image, Flex, Text } from "@chakra-ui/react";
import CheckIcon from "../../../../assets/icon-check.svg";
import IconClose from "../../../../assets/icon-close.svg";

import { BenefitType } from "../plans";

interface Props {
  benefits: BenefitType[];
}

const BenefitsList = ({ benefits }: Props) => {
  return (
    <List
      mt="1.25rem"
      sx={{ display: "flex", gap: ".8rem", "flex-direction": "column" }}>
      {benefits.map(({ available, body }, index) => {
        return (
          <ListItem whiteSpace="nowrap" key={index} fontWeight="300">
            <Flex align="center" gap=".6rem">
              <Image
                w="1rem"
                src={available ? CheckIcon : IconClose}
                alt="check iconc"
              />
              <Text opacity={available ? "1" : ".3"}>{body}</Text>
            </Flex>
          </ListItem>
        );
      })}
    </List>
  );
};

export default BenefitsList;

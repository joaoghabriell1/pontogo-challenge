import { List, ListItem, Image, Flex } from "@chakra-ui/react";
import CheckIcon from "../../../../assets/icon-check.svg";
import CloseIcon from "../../../../assets/icon-x.svg";
import IconClose from "../../../../assets/icon-close.svg";

import { BenefitType } from "../plans";

interface Props {
  benefits: BenefitType[];
}

const BenefitsList = ({ benefits }: Props) => {
  return (
    <List
      mt="1.25rem"
      sx={{ display: "flex", gap: ".8rem", "flex-direction": "column" }}
    >
      {benefits.map(({ available, body }, index) => {
        return (
          <ListItem key={index} fontWeight="300">
            <Flex opacity={available ? "1" : ".3"} align="center" gap=".6rem">
              <Image
                w="1rem"
                src={available ? CheckIcon : IconClose}
                alt="check iconc"
              />
              {body}
            </Flex>
          </ListItem>
        );
      })}
    </List>
  );
};

export default BenefitsList;

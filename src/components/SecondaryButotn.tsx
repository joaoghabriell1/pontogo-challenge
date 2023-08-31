import React from "react";

import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
  onClick: () => void;
}

const SecondaryButton = ({ onClick, text }: Props) => {
  return (
    <Button
      fontSize={{ base: "xsm", md: "sm" }}
      bg="main-color"
      fontWeight="400"
      padding={{ base: "", sm: "1.5rem 2.5rem" }}
      color="pure-white"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;

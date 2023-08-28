import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
  bg: string;
  color: string;
  variant?: string;
  border?: string;
}

const PrimaryButton = ({ bg, text, color, border, variant }: Props) => {
  return (
    <Button
      mx="auto"
      color={color}
      borderRadius="0.3125rem"
      maxW="10rem"
      variant={variant}
      bg={bg}
      fontSize={{ base: "xm", sm: "sm" }}
      fontWeight="normal"
      height="3.125rem"
      _hover={{
        opacity: ".8",
      }}
      px={{ base: "1rem", sm: "2.3rem" }}
      py={{ base: ".5rem", sm: ".8rem" }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;

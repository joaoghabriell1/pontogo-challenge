import { ModalFooter, Button, Flex } from "@chakra-ui/react";
import SecondaryButton from "../SecondaryButotn";

interface Props {
  onClose: () => void;
}

const RegisterModalFooter = ({ onClose }: Props) => {
  return (
    <ModalFooter p="0">
      <Flex
        direction="column"
        gap="0.6rem"
        sx={{
          button: {
            py: { base: ".75rem" },
            minW: { base: "12.5rem" },
          },
        }}
      >
        <SecondaryButton onClick={() => {}} text="Bater Ponto" />
        <Button
          onClick={onClose}
          fontWeight="400"
          borderColor="main-color"
          fontSize="sm"
          color="main-color"
          variant="outline"
        >
          Cancelar
        </Button>
      </Flex>
    </ModalFooter>
  );
};

export default RegisterModalFooter;

import { ModalFooter, Button, Flex } from "@chakra-ui/react";
import SecondaryButton from "../SecondaryButotn";
import { REGISTER_NEW_TIME_MUTATION } from "../../api/mutations";
import { LOAD_CURRENT_USER_REGISTERS } from "../../api/queries";
import { useMutation } from "@apollo/client";
import { useOutletContext } from "react-router";
import { Outlet } from "../../types/Outlet";

interface Props {
  onClose: () => void;
}

const RegisterModalFooter = ({ onClose }: Props) => {
  const context: Outlet = useOutletContext();
  const id = context.id;

  const [createRegisteredTime] = useMutation(REGISTER_NEW_TIME_MUTATION, {
    variables: {
      input: {
        data: {
          timeRegistered: new Date(),
          user: id,
          published_at: new Date(),
          created_by: id,
          updated_by: id,
        },
      },
    },
    refetchQueries: [LOAD_CURRENT_USER_REGISTERS],
  });

  const handleRegisterNewTime = () => {
    createRegisteredTime();
    onClose();
  };
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
        <SecondaryButton onClick={handleRegisterNewTime} text="Bater Ponto" />
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

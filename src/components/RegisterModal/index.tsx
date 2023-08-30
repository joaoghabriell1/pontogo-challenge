import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  Flex,
} from "@chakra-ui/react";
import RegisterModalFooter from "./ModalFooter";
import RegisterModalBody from "./ModalBody";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Flex
            p={{ base: "3.25rem 5.75rem" }}
            direction="column"
            align="center"
          >
            <ModalCloseButton />
            <ModalHeader p="0" m="0" whiteSpace="nowrap">
              Registrar novo ponto
            </ModalHeader>
            <RegisterModalBody />
            <RegisterModalFooter onClose={onClose} />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;

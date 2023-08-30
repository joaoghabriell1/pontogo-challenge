import ClockImage from "../../assets/image-clock.svg";
import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formatTime";
import { ModalBody } from "@chakra-ui/react";
import { Image, Flex, Box } from "@chakra-ui/react";

const RegisterModalBody = () => {
  const dateString = new Date();
  const date = dateString.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const time = dateString.toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <ModalBody>
      <Flex py="1.25rem" align="center" direction="column">
        <Image src={ClockImage} />
        <Box color="main-color" fontWeight="700" fontSize="1.875rem" as="span">
          {time}
        </Box>
        <Box color="main-color" opacity="0.5" fontSize="1rem" as="span">
          {date}
        </Box>
      </Flex>
    </ModalBody>
  );
};

export default RegisterModalBody;

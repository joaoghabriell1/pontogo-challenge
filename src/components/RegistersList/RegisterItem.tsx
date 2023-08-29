import { formatTime } from "../../utils/formatTime";
import { formatDate } from "../../utils/formatDate";
import { ListItem, Box } from "@chakra-ui/react";

interface Props {
  userName: string;
  date: string;
  id: string;
}

const RegisterItem = ({ userName, date }: Props) => {
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);

  return (
    <ListItem
      border="1px solid  rgba(32, 41, 46, 0.30)"
      borderRadius="0.3125rem"
      p="1rem"
      display="flex"
      alignItems="center"
    >
      <Box
        _before={{
          content: '""',
          position: "absolute",
          left: "0",
          top: "0",
          bottom: "0",
          bg: "secondary-color",
          w: "5px",
          borderTopRadius: "100vh",
          borderBottomRadius: "100vh",
        }}
        fontSize={{ base: ".8rem", md: "1.375rem" }}
        fontWeight="700"
        color="dark-grey"
        position="relative"
        pl={{ base: "1rem", md: "2.5rem" }}
        pr={{ base: "1rem", sm: "none" }}
        minW={{ base: "min-content", sm: "8.5rem", md: "15.5rem" }}
      >
        {userName}
      </Box>
      <Box
        color="dark-grey"
        opacity=".6"
        fontSize={{ base: ".8rem", md: "1.375rem" }}
        pr={{ base: "1rem", sm: "none" }}
        minW={{ base: "min-content", sm: "8.5rem", md: "15.5rem" }}
      >
        {formattedDate}
      </Box>
      <Box
        color="dark-grey"
        opacity=".6"
        fontSize={{ base: ".8rem", md: "1.375rem" }}
      >
        {formattedTime}
      </Box>
    </ListItem>
  );
};

export default RegisterItem;

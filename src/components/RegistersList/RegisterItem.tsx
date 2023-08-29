import { formatTime } from "../../utils/formatTime";
import { formatDate } from "../../utils/formatDate";
import { ListItem } from "@chakra-ui/react";

interface Props {
  userName: string;
  date: string;
}

const RegisterItem = ({ userName, date }: Props) => {
  const formatedDate = formatDate(date);
  const formatedTime = formatTime(date);
  return (
    <ListItem>
      {userName}
      <p>{formatedDate}</p>
      <p>{formatedTime}</p>
    </ListItem>
  );
};

export default RegisterItem;

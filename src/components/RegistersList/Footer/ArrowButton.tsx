import { Button, Image } from "@chakra-ui/react";
import LeftArrow from "../../../assets/icon-left-smallarrow.svg";
import RightArrow from "../../../assets/icon-right-smallarrow.svg";

interface Props {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  page: number;
}
const ArrowButton = ({ value, onClick, page }: Props) => {
  return (
    <Button
      borderRadius="0.125rem"
      opacity="0.5"
      border="0.5px solid #20292E"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
      value={value}
      p="0"
      height="1.875rem"
      minW="1.875rem"
      w="1.875rem"
      bg="none"
    >
      {value === "previous" && <Image minW="0.937rem" src={LeftArrow} />}
      {value === "next" && <Image minW="0.937rem" src={RightArrow} />}
    </Button>
  );
};

export default ArrowButton;

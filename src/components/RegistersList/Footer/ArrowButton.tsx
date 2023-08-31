import { Button, Image } from "@chakra-ui/react";
import LeftArrow from "../../../assets/icon-left-smallarrow.svg";
import RightArrow from "../../../assets/icon-right-smallarrow.svg";

interface Props {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  page: number;
  numOfpages?: number;
}
const ArrowButton = ({ value, onClick, page, numOfpages }: Props) => {
  return (
    <Button
      disabled={numOfpages === page}
      borderRadius="0.125rem"
      opacity="0.5"
      border="0.5px solid #20292E"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (page == numOfpages && value === "next") return;
        onClick(e);
      }}
      value={value}
      p="0"
      h={{ base: "1rem", sm: "1.875rem" }}
      minW={{ base: "1rem", sm: "1.875rem" }}
      w={{ base: "1rem", sm: "1.875rem" }}
      bg="none"
    >
      {value === "previous" && <Image minW="0.937rem" src={LeftArrow} />}
      {value === "next" && <Image minW="0.937rem" src={RightArrow} />}
    </Button>
  );
};

export default ArrowButton;

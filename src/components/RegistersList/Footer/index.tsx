import { List, ListItem, Flex, Button } from "@chakra-ui/react";
import { LOAD_CURRENT_USER_REGISTERS } from "../../../api/queries";
import { useQuery } from "@apollo/client";
import ArrowButton from "./ArrowButton";

interface Props {
  id: string;
  page: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RegistersListFooter = ({ id, page, onClick }: Props) => {
  const { data, loading, error } = useQuery(LOAD_CURRENT_USER_REGISTERS, {
    variables: {
      userId: id,
    },
  });

  let numOfPages: number | undefined;
  let array: number[] | undefined;

  if (data) {
    numOfPages = Math.ceil(data?.registeredTimes?.length! / 6);
    array = new Array(numOfPages).fill(1);
  }

  return (
    <Flex mt="1.25rem">
      <ArrowButton value="previous" page={page} onClick={onClick} />
      <List mx="0.30rem" display="flex" gap=".30rem">
        {numOfPages &&
          array?.map((num, index) => {
            return (
              <ListItem
                borderRadius="0.125rem"
                border={
                  index + 1 === page ? "2px solid black" : "0.5px solid #20292E"
                }
                opacity="0.5"
                aspectRatio="1/1"
                h="1.875rem"
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  fontSize="0.875rem"
                  fontWeight="400"
                  bg="none"
                  _hover={{ bg: "none" }}
                  value="toPage"
                  onClick={onClick}
                >
                  {index + 1}
                </Button>
              </ListItem>
            );
          })}
      </List>
      <ArrowButton value="next" page={page} onClick={onClick} />
    </Flex>
  );
};

export default RegistersListFooter;

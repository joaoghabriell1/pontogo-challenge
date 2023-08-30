import { List, ListItem, Flex, Button } from "@chakra-ui/react";
import ArrowButton from "./ArrowButton";
import { RegisteredTimesQuery } from "../../../../gql/graphql";
import { GetCurrentUserRegisteredTimesQuery } from "../../../../gql/graphql";

interface Props {
  page: number;
  data: RegisteredTimesQuery | GetCurrentUserRegisteredTimesQuery | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const RegistersListFooter = ({ page, data, setPage }: Props) => {
  let numOfPages: number | undefined;
  let array: number[] | undefined;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value, innerText } = e.currentTarget;
    if (value === "next") {
      setPage((prev) => {
        const nextPage = prev + 1;
        return nextPage;
      });
    }
    if (value === "previous") {
      if (page == 1) {
        return;
      }
      setPage((prev) => {
        const previousPage = prev - 1;
        return previousPage;
      });
    }
    if (value === "toPage") {
      setPage(+innerText);
    }
  };

  if (data) {
    numOfPages = Math.floor(data?.registeredTimes?.length! / 6);
    array = new Array(numOfPages).fill(1);
  }

  return (
    <Flex mt="1.25rem">
      <ArrowButton
        value="previous"
        page={page}
        numOfpages={numOfPages!}
        onClick={handleClick}
      />
      <List
        maxW={{ base: "170px", sm: "none" }}
        overflowX={{ base: "scroll", sm: "initial" }}
        mx="0.30rem"
        display="flex"
        gap=".30rem"
      >
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
                h={{ base: "1rem", sm: "1.875rem" }}
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  fontSize={{ base: ".4rem", sm: "0.875rem" }}
                  fontWeight="400"
                  bg="none"
                  _hover={{ bg: "none" }}
                  value="toPage"
                  onClick={handleClick}
                >
                  {index + 1}
                </Button>
              </ListItem>
            );
          })}
      </List>
      <ArrowButton
        numOfpages={numOfPages}
        value="next"
        page={page}
        onClick={handleClick}
      />
    </Flex>
  );
};

export default RegistersListFooter;

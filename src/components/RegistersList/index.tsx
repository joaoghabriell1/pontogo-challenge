import RegisterItem from "./RegisterItem";
import { List } from "@chakra-ui/react";
import { RegisteredTimesQuery } from "../../../gql/graphql";
import { GetCurrentUserRegisteredTimesQuery } from "../../../gql/graphql";
import { RegisteredTime } from "../../../gql/graphql";

const RegistersList = ({
  data,
}: {
  data: RegisteredTimesQuery | GetCurrentUserRegisteredTimesQuery;
}) => {
  return (
    <List
      minH={{ base: "min-content", sm: "480px" }}
      display="flex"
      flexDirection="column"
      gap="1rem"
    >
      {data?.registeredTimes?.map((item, index) => {
        return (
          <RegisterItem
            key={index}
            id={item!.id}
            userName={item?.user?.name!}
            date={item?.timeRegistered}
          />
        );
      })}
    </List>
  );
};

export default RegistersList;

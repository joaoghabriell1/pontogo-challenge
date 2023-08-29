import { GetCurrentUserRegisteredTimesQuery } from "../../../gql/graphql";
import RegisterItem from "./RegisterItem";
import { List } from "@chakra-ui/react";

const RegistersList = ({
  registeredTimes,
}: {
  registeredTimes: GetCurrentUserRegisteredTimesQuery;
}) => {
  return (
    <List display="flex" flexDirection="column" gap="1rem">
      {registeredTimes.registeredTimes?.map((item, index) => {
        return (
          <RegisterItem
            key={index}
            id={item!.id}
            userName={item!.user!.name!}
            date={item?.timeRegistered}
          />
        );
      })}
    </List>
  );
};

export default RegistersList;

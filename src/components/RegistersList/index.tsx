import { GetCurrentUserRegisteredTimesQuery } from "../../../gql/graphql";
import RegisterItem from "./RegisterItem";
import { List } from "@chakra-ui/react";

const RegistersList = ({
  registeredTimes,
}: {
  registeredTimes: GetCurrentUserRegisteredTimesQuery;
}) => {
  return (
    <List>
      {registeredTimes.registeredTimes?.map((item) => {
        return (
          <RegisterItem
            userName={item!.user!.username}
            date={item?.timeRegistered}
          />
        );
      })}
    </List>
  );
};

export default RegistersList;

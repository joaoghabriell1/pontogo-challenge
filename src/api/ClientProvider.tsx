import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

interface Props {
  children: React.ReactNode;
}

function ClientProvider({ children }: Props) {
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "http://test.frontend.api.brainny.cc/graphql" }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
  });

  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
}

export default ClientProvider;

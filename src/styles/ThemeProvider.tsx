import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;

import { CardHeader, Heading, Box } from "@chakra-ui/react";
import { HeaderType } from "../plans";

interface Props {
  header: HeaderType;
}

const Header = ({ header }: Props) => {
  return (
    <CardHeader padding="0" textAlign="center">
      <Heading fontWeight={400} as="h3" fontSize="lg" margin="0">
        {header.title}
      </Heading>
      <Heading my=".5rem" as="h2" fontSize="3xl" fontWeight="800">
        R$ {header.price}
      </Heading>
      <Box fontWeight="300" fontSize="sm" color="secondary-color">
        {header.title === "Plano Platina" ? (
          "Acessos Ilimitados"
        ) : (
          <>Uso de {header.collaborators} colaboradores</>
        )}
      </Box>
    </CardHeader>
  );
};

export default Header;

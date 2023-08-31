import { Container, Flex, Divider } from "@chakra-ui/react";
import SocialNav from "./SocialNav";
import FooterContent from "./Content";

const Footer = () => {
  return (
    <footer>
      <Container mt="6.25rem" mb="3.75rem">
        <Divider position="absolute" left="0" />
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align="centser"
          py="1.25rem"
          gap="3.75rem"
        >
          <FooterContent />
          <SocialNav />
        </Flex>
        <Divider position="absolute" left="0" />
      </Container>
    </footer>
  );
};

export default Footer;

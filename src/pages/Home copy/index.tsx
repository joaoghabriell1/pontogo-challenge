import { Box, Container } from "@chakra-ui/react";
import Companies from "./CompaniesSection";
import AllRightsReserved from "./ReserverdRights";
import HeroSection from "./HeroSection";
import Plans from "./Plans/index";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Box
        minH="100vh"
        bgColor="#1b0055"
        bgImage="url('src/assets/bg-image-1.png')"
        overflowX="hidden"
      >
        <Container maxW="1200px" px={{ base: "1rem", xl: "0rem" }}>
          <Header />
          <HeroSection />
          <Companies />
          <Plans />
          <Footer />
          <AllRightsReserved />
        </Container>
      </Box>
    </>
  );
};

export default Home;

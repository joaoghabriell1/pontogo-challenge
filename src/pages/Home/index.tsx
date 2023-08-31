import { Box, Container } from "@chakra-ui/react";
import Companies from "./CompaniesSection";
import AllRightsReserved from "./ReserverdRights";
import HeroSection from "./HeroSection";
import Plans from "./Plans/index";
import Footer from "./Footer";
import Header from "./Header";
import Bg from "../../assets/bg-image-1.png";

const Home = () => {
  return (
    <>
      <Box
        minH="100vh"
        bgImage="url({})"
        sx={{ bgImage: `url(${Bg})` }}
        bgRepeat="no-repeat"
        bgSize="cover"
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

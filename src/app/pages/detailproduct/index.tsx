import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const DetailProduct = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <Box sx={{ minWidth: "1024px", background: "#f5f5f5" }}>
        <Navbar />

        <Footer />
      </Box>
    </>
  );
};

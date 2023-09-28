import FlashOnIcon from "@mui/icons-material/FlashOn";

import { Box, Container, Typography } from "@mui/material";
import { CarouselComponent } from "../carousel";

export const FlashSale = () => {
  return (
    <>
      <Container sx={{ mx: "0 10px" }}>
        <Box sx={BoxBackground}>
          <Typography
            variant="h3"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
          >
            <FlashOnIcon sx={{ fontSize: "40px" }} /> FLASH SALE
          </Typography>

          <CarouselComponent height="200" />

          <Typography
            variant="h6"
            component="div"
            sx={{
              textAlign: "right",
              fontWeight: "bold",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            XEM TẤT CẢ
          </Typography>
        </Box>
      </Container>
    </>
  );
};

const BoxBackground = {
  backgroundImage: "linear-gradient(#AED2FF, #3699ff)",
  height: "600px",
  marginTop: 5,
  borderRadius: "30px",
  padding: "20px",
};

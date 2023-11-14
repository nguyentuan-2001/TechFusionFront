import { Box, Container, Typography } from "@mui/material";
import { CardProduct } from "./product";
import styled from "styled-components";

export const ListProduct = (props: any) => {
  const { data } = props;

  const items = [
    { name: "SẢN PHẨM HOT" },
    { name: "HỌC TẬP - VĂN PHÒNG" },
    { name: "ĐỒ HỌA - KỸ THUẬT" },
    { name: "LAPTOP GAMING" },
    { name: "CAO CẤP - SANG TRỌNG" },
    { name: "CASE - PC GIÁ RẺ" },
    { name: "PHỤ KIỆN" },
  ];
  return (
    <>
      <Container sx={{ mx: "0 10px" }}>
        {items.map((items, index) => (
          <Box key={index}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", my: 4 }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {items.name}
              </Typography>
              <StyleTypography variant="body1" component="p">
                Xem tất cả
              </StyleTypography>
            </Box>
            <CardProduct data={data} />
          </Box>
        ))}
      </Container>
    </>
  );
};

const StyleTypography = styled(Typography)`
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #3699ff;
  }
`;

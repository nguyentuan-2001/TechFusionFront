import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";

import MouseIcon from "@mui/icons-material/Mouse";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import BackpackIcon from "@mui/icons-material/Backpack";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import CableIcon from "@mui/icons-material/Cable";
import RectangleIcon from "@mui/icons-material/Rectangle";
import UsbIcon from "@mui/icons-material/Usb";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AlbumIcon from "@mui/icons-material/Album";
import { Link } from "react-router-dom";
import Path from "../../../../../config/clientPath";

export const ListCategoryBottom = () => {
  const items = [
    {
      icon: <MouseIcon fontSize="inherit" />,
      name: "Chuột máy tính",
      bgcolor: "#BC7AF9",
    },
    {
      icon: <KeyboardIcon fontSize="inherit" />,
      name: "Bàn phím",
      bgcolor: "#FFA1F5",
    },
    {
      icon: <BackpackIcon fontSize="inherit" />,
      name: "Balo, túi xách",
      bgcolor: "#F8FF95",
    },
    {
      icon: <HeadphonesIcon fontSize="inherit" />,
      name: "Loa, tai nghe",
      bgcolor: "#A6FF96",
    },
    {
      icon: <DeveloperBoardIcon fontSize="inherit" />,
      name: "Ổ cứng di động",
      bgcolor: "#96C291",
    },
    {
      icon: <CableIcon fontSize="inherit" />,
      name: "Cổng chuyển đổi",
      bgcolor: "#FFDBAA",
    },
    {
      icon: <RectangleIcon fontSize="inherit" />,
      name: "Bàn di chuột",
      bgcolor: "#FFB7B7",
    },
    {
      icon: <UsbIcon fontSize="inherit" />,
      name: "USB flash",
      bgcolor: "#F4EEEE",
    },
    {
      icon: <LocalHospitalIcon fontSize="inherit" />,
      name: "Keo tản nhiệt",
      bgcolor: "#E7B10A",
    },
    {
      icon: <AlbumIcon fontSize="inherit" />,
      name: "Phần mềm bản quyền",
      bgcolor: "#F2EE9D",
    },
  ];
  return (
    <>
      <Container sx={{ mx: "0 10px" }}>
        <Box sx={StyleBG}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 5,
            }}
          >
            {items.map((item, index) => (
              <Box key={index} sx={{ width: "110px", cursor: "pointer" }}>
                <StyleBoxIcon bgcolor={item.bgcolor}>{item.icon}</StyleBoxIcon>
                <Typography
                  variant="subtitle2"
                  sx={{ mt: 1, textAlign: "center" }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Container sx={{ mx: "0 10px", pb:5 }}>
        <Box
          sx={{ display: "flex", gap: "10px", justifyContent: "space-between" }}
        >
          <Link to={Path.DETAILS} style={StyleBoderImage}>
            <img
              src="https://img.meta.com.vn/Data/image/2021/09/29/anh-binh-minh-1.jpg"
              alt="ảnh"
              height="100%"
              width="100%"
            />
          </Link>
          <Link to={Path.DETAILS} style={StyleBoderImage}>
            <img
              src="https://img.meta.com.vn/Data/image/2021/09/29/anh-binh-minh-1.jpg"
              alt="ảnh"
              height="100%"
              width="100%"
            />
          </Link>
          <Link to={Path.DETAILS} style={StyleBoderImage}>
            <img
              src="https://img.meta.com.vn/Data/image/2021/09/29/anh-binh-minh-1.jpg"
              alt="ảnh"
              height="100%"
              width="100%"
            />
          </Link>
        </Box>
      </Container>
    </>
  );
};

const StyleBG = {
  background: "#fff",
  borderRadius: "20px",
  p: 5,
  my: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const StyleBoxIcon = styled(Box)<{ bgcolor: string }>`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  background: ${(props) => props.bgcolor};
`;

const StyleBoderImage = {
  flex: "0 0 calc(33.33% - 10px)",
  borderTop: "3px solid #fd7e14",
  borderLeft: "3px solid #fd7e14",
  height: "165px",
};

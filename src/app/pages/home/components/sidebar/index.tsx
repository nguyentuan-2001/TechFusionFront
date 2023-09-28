import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DevicesIcon from "@mui/icons-material/Devices";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import HandymanIcon from "@mui/icons-material/Handyman";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CloseIcon from "@mui/icons-material/Close";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";

///////end icon////////////

import { ButtonBetween } from "../../../../components/ButtonIcon";
import { Container, Box, Typography } from "@mui/material";
import { CarouselOneImg } from "../carousel";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Path from "../../../../../config/clientPath";

export const Sidebar = () => {
  const datasidebar = [
    {
      icon1: <LaptopMacIcon fontSize={"medium"} />,
      icon2: <ChevronRightIcon fontSize={"medium"} />,
      text: "Laptop Mới",
    },
    {
      icon1: <DevicesIcon fontSize={"medium"} />,
      icon2: <ChevronRightIcon fontSize={"medium"} />,
      text: "Laptop Cũ",
    },
    {
      icon1: <DeveloperBoardIcon fontSize={"medium"} />,
      icon2: <ChevronRightIcon fontSize={"medium"} />,
      text: "Linh Kiện",
    },
    {
      icon1: <DesktopWindowsIcon fontSize={"medium"} />,
      icon2: <ChevronRightIcon fontSize={"medium"} />,
      text: "Màn Hình",
    },
    {
      icon1: <HandymanIcon fontSize={"medium"} />,
      text: "Bảo Hành",
    },
    {
      icon1: <HeadphonesIcon fontSize={"medium"} />,
      icon2: <ChevronRightIcon fontSize={"medium"} />,
      text: "Phụ Kiện",
    },
  ];

  const dataaddress = [
    {
      address: "Hà Nội",
      zalo: "0123456789",
    },
    {
      address: "Hà Nội",
      zalo: "0123456789",
    },
    {
      address: "Hà Nội",
      zalo: "0123456788",
    },
    {
      address: "Hà Nội",
      zalo: "0123456789",
    },
    {
      address: "Hà Nội",
      zalo: "0123456789",
    },
    {
      address: "Hà Nội",
      zalo: "0123456789",
    },
    {
      address: "Hà Nội",
      zalo: "0123456789",
    },
  ];

  const [selectedKey, setSelectedKey] = useState<number>();
  const [openSidebarChild, setOpenSidebarChild] = useState<boolean>(false);

  const openSideChild = (index: number) => {
    setSelectedKey(index);
    setOpenSidebarChild(true);
  };

  return (
    <>
      <Container sx={{ mx: "0 10px", display: "flex" }}>
        <Box>
          {datasidebar.map((data, index) => (
            <div key={index} onClick={() => openSideChild(index)}>
              <ButtonBetween
                color="#000"
                fontSize={0.9}
                width={200}
                icon1={data.icon1}
                icon2={data.icon2}
                text={data.text}
                bgcolor="#fff"
              />
            </div>
          ))}
        </Box>

        <Box width={"65%"} p={2}>
          <CarouselOneImg />
        </Box>
        <StyleBoxAddress>
          <StyleAddress>
            {dataaddress.map((data, index) => (
              <Box key={index}>
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  {data.address}
                </Typography>
                <ButtonStyle> Zalo: {data.zalo}</ButtonStyle>
              </Box>
            ))}
          </StyleAddress>
        </StyleBoxAddress>
        <SideBarHover show={openSidebarChild}>
          <HeaderSidebar>
            <button onClick={() => setOpenSidebarChild(false)}>
              <CloseIcon />
            </button>
          </HeaderSidebar>
          {dataaddress.map((data, index) => (
            <div key={index}>
              {selectedKey !== null && selectedKey === index ? (
                <Box>
                  <Link to={Path.DETAILS}>{data.zalo}</Link>
                </Box>
              ) : null}
            </div>
          ))}
        </SideBarHover>
      </Container>
      <Container sx={{ mx: "0 10px"}}>
        <Box sx={{ display: "flex", gap: "10px",justifyContent: 'space-between' }}>
          <Link to={Path.DETAILS} style={StyleBoderImage}>
            <img
              src="https://img.meta.com.vn/Data/image/2021/09/29/anh-binh-minh-1.jpg"
              alt="ảnh"
              height='100%'
              width="100%"
            />
          </Link>
          <Link to={Path.DETAILS} style={StyleBoderImage}>
            <img
              src="https://img.meta.com.vn/Data/image/2021/09/29/anh-binh-minh-1.jpg"
              alt="ảnh"
              height='100%'
              width="100%"
            />
          </Link>
          <Link to={Path.DETAILS} style={StyleBoderImage}>
            <img
              src="https://img.meta.com.vn/Data/image/2021/09/29/anh-binh-minh-1.jpg"
              alt="ảnh"
              height='100%'
              width="100%"
            />
          </Link>
        </Box>
      </Container>
    </>
  );
};

const StyleBoxAddress = styled(Box)`
  border: 1px solid #3699ff;
  border-radius: 20px;
  padding: 20px;
  width: calc(100% - 65% - 200px);
  max-height: 270px;
  margin-top: 15px;
`;

const StyleAddress = styled(Box)`
  max-height: 260px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
const ButtonStyle = styled.button`
  background: #3699ff;
  color: #fff;
  border-radius: 20px;
  border: none;
  padding: 8px 10px;
  margin: 2px 0;
  width: 100%;
`;

const SideBarHover = styled(Box)<{ show: boolean }>`
  background: #fff;
  position: absolute;
  width: 50%;
  height: 325px;
  z-index: 2;
  margin-left: 200px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const HeaderSidebar = styled(Box)`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    background: none;
    border: none;
    cursor: pointer;
    height: 35px;
    padding: 5px;
    margin: 10px 20px 0 0;
    &:hover {
      background: #3699ff;
      color: #fff;
      border-radius: 50px;
      box-shadow: 0px 0px 15px rgba(54, 153, 255, 0.8);
    }
  }
`;

const StyleBoderImage={
    flex: "0 0 calc(33.33% - 10px)" ,
    borderTop: '3px solid #fd7e14',
    borderLeft: '3px solid #fd7e14',
    height:'165px'
}
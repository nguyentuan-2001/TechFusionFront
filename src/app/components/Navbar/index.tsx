import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

/////////icons////////
import SearchIcon from "@mui/icons-material/Search";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SortIcon from "@mui/icons-material/Sort";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon";
import { Link } from "react-router-dom";
import Path from "../../../config/clientPath";

const imglogo = require("../../images/logo1.png");

export default function Navbar() {
  const items = [
    {
      text: "Dell Inspiron 7620 Plus 40GB RAM Sale 9 Triệu",
    },
    {
      text: "Dell Inspiron 7620 Plus 40GB RAM Sale 9 Triệu",
    },
    {
      text: "Dell Inspiron 7620 Plus 40GB RAM Sale 9 Triệu",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ flexGrow: 1, background: "#0d1527" }}>
        <Toolbar>
          <Container sx={styleContainer}>
            <Link to={Path.HOME}>
              <img src={imglogo} width="70px" />
            </Link>

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                borderRadius: "40px",
                ml: "10px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, px: "10px" }}
                placeholder="Search"
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <ButtonIcon
              text="Góp ý khiếu nại"
              icon={<ManageAccountsIcon fontSize={"large"} />}
              color="#fff"
              fontSize={0.7}
            />
            <ButtonIcon
              text="Tra cứu bảo hành"
              icon={<TravelExploreIcon fontSize={"large"} />}
              color="#fff"
              fontSize={0.7}
            />
            <ButtonIcon
              text="Liên hệ trực tiếp"
              icon={<PhoneInTalkIcon fontSize={"large"} />}
              color="#fff"
              fontSize={0.7}
            />
            <ButtonIcon
              text="Tư vấn mua hàng"
              icon={<SupportAgentIcon fontSize={"large"} />}
              color="#fff"
              fontSize={0.7}
            />
            <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
              <ButtonStyle>Chính sách</ButtonStyle>
              <ButtonStyle>Tuyển dụng</ButtonStyle>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <div
        style={{
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Container sx={{ mx: "0 10px" }}>
          <DivGrid>
            <div
              className="grid-item"
              style={{ background: "#3699ff", padding: 0 }}
            >
              <ButtonIcon
                text="Danh mục sản phẩm"
                icon={<SortIcon fontSize={"medium"} />}
                color="#fff"
                fontSize={0.9}
              />
            </div>
            {items.map((item, index) => (
              <div className="grid-item" key={index}>
                <DivAnimation>
                  <div className="animation"></div>
                  <FiberManualRecordIcon
                    sx={{
                      position: "absolute",
                      fontSize: "10px",
                      color: "#3699ff",
                    }}
                  />
                </DivAnimation>
                <DivSpan>{item.text}</DivSpan>
              </div>
            ))}
          </DivGrid>
        </Container>
      </div>
    </Box>
  );
}

export const styleContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "auto",
  background: "#0d1527",
  height: "80px",
  with: "100%",
};

const ButtonStyle = styled.button`
  background: #3699ff;
  color: #fff;
  border-radius: 20px;
  border: none;
  padding: 8px 10px;
  margin: 2px 0;
  width: 100px;
`;

const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(3, 1fr);
  /* gap: 10px; */
  width: 100%;

  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    position: relative;

    .animation {
      animation: expand 1s linear infinite;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #3699ff;
    }
    @keyframes expand {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(2);
        opacity: 0.7;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
  }
`;

const DivAnimation = styled.div`
  position: relative;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivSpan = styled.span`
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    color: #3699ff;
  }
`;

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Path from "../../../config/clientPath";
import { Box } from "@mui/material";
import { Sidebar } from "./components/sidebar";
import { FlashSale } from "./components/flashsale";

export const HomeComponent = () => {
  return (
    <Box sx={{minWidth:'1024px',background: "#f5f5f5"}}>
      <Navbar />
      <Sidebar/>
      <FlashSale/>
      {/* <h1 style={{float:'right'}}>Home</h1>
      <Link to={Path.LOGIN}>Chuyển đến Trang Chi Tiết</Link> */}
      
    </Box>
  );
};

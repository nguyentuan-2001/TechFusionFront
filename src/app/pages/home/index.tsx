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
import { ListProduct } from "./components/list_product";
import { ListCategoryBottom } from "./components/list_category";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

export const HomeComponent = () => {

  const [data, setData] = useState([]);

  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products');
        const result = await response.json();
        setData(result);

        const dataslider = await fetch('http://127.0.0.1:8000/api/slider');
        const sliderjson = await dataslider.json();
        setSlider(sliderjson);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <Box sx={{ minWidth: "1024px", background: "#f5f5f5" }}>
        <Navbar />
        <Sidebar slider={slider}/>
        <FlashSale data={data} />
        <ListProduct data={data}/>
        <ListCategoryBottom />
        <Footer />
        {/* <h1 style={{float:'right'}}>Home</h1>
      <Link to={Path.LOGIN}>Chuyển đến Trang Chi Tiết</Link> */}
      </Box>
    </>
  );
};

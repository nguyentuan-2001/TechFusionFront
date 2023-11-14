import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./css.css";
import {
  Box,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import styled from "styled-components";
import CountdownTimer from "../countdowntimer";

export interface ICarousel {
  product_image?: string;
  product_name?: string;
  product_desc?: string;
  product_price?: number;
  product_sale?: number;
  slider_name?: string;
  slider_image?: string;
  slider_status?: string;
}
interface IDataCarousel {
  height: string;
  data: ICarousel[];
}

export const CarouselOneImg = ({ height, data }: IDataCarousel) => {
  const items = data.map((item, index) => (
    <div key={index} className="div_li_ca">
      <img
        src={item.slider_image}
        alt={`Image ${index + 1}`}
        height={height}
        width={"100%"}
      />
    </div>
  ));

  const renderPrevButton = ({
    isDisabled = false,
  }: {
    isDisabled?: boolean;
  }) => (
    <button disabled={isDisabled} className="custom-prev-button">
      <ArrowCircleLeftIcon />
    </button>
  );

  const renderNextButton = ({
    isDisabled = false,
  }: {
    isDisabled?: boolean;
  }) => (
    <button disabled={isDisabled} className="custom-next-button">
      <ArrowCircleRightIcon />
    </button>
  );

  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={3000}
      infinite
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
      disableDotsControls={true}
      autoWidth={true}
    />
  );
};

export function truncateText(text: any, maxLength: number) {
  if (typeof text !== "string") {
    return "";
  }
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}
export function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

export const CarouselComponent = ({ height, data }: IDataCarousel) => {
  const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  const items = data.map((item, index) => (
    <Card key={index} sx={{ mx: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={height}
          image={item?.product_image}
          alt={`Image ${index + 1}`}
          sx={{margin:'auto', width:'auto', py:2}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="center">
            {item.product_name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
            {truncateText(item.product_desc, 30)}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            align="center"
            sx={{ textDecoration: "line-through", fontSize: "1rem" }}
          >
            {formatPrice(
              ((item?.product_price || 0) / 100) * (item?.product_sale || 0)
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonStyle>{formatPrice(item?.product_price || 0)}</ButtonStyle>
      </CardActions>
      <Box sx={StyleBoxTime}>
        Kết thúc sau: <CountdownTimer days={7} />
      </Box>
    </Card>
  ));

  const renderPrevButton = ({
    isDisabled = false,
  }: {
    isDisabled?: boolean;
  }) => (
    <button disabled={isDisabled} className="custom-prev-button">
      <ArrowCircleLeftIcon />
    </button>
  );

  const renderNextButton = ({
    isDisabled = false,
  }: {
    isDisabled?: boolean;
  }) => (
    <button disabled={isDisabled} className="custom-next-button">
      <ArrowCircleRightIcon />
    </button>
  );

  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={3000}
      infinite
      responsive={responsive}
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
      disableDotsControls={true}
    />
  );
};

export const ButtonStyle = styled.button`
  background: #3699ff;
  color: #fff;
  border-radius: 30px;
  border: none;
  padding: 10px 15px;
  margin: 2px 0;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  min-width: 150px;
`;

const StyleBoxTime = {
  border: "1px solid black",
  borderRadius: "20px",
  height: "30px",
  m: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

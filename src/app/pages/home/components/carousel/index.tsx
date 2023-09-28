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

interface ICarousel {
  images?: any;
  height?: string;
  name?: string;
  gift?: string;
  price?: number;
  old_price?: number;
}

export const CarouselOneImg = () => {
  const images = [
    "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
    "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
    "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
    "https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-8-1024x576.jpg?tr=dpr-2,w-675",
    "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
  ];
  const items = images.map((image, index) => (
    <div key={index} className="div_li_ca">
      <img src={image} alt={`Image ${index + 1}`} height={310} width={"100%"} />
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
      // autoPlay
      // autoPlayInterval={3000}
      // infinite
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
function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

// {
//   images,
//   height,
//   name,
//   gift,
//   price,
//   old_price,
// }: ICarousel

export const CarouselComponent = ({ height }: ICarousel) => {
  const images = [
    {
      image:
        "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
      name: "iphone",
      gift: "1 chiếc cặp",
      price: 2000000,
      old_price: 4000000,
    },
    {
      image:
        "https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-8-1024x576.jpg?tr=dpr-2,w-675",
      name: "iphone",
      gift: "1 chiếc cặp",
      price: 2000000,
      old_price: 4000000,
    },
    {
      image:
        "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
      name: "iphone",
      gift: "1 chiếc cặp",
      price: 2000000,
      old_price: 4000000,
    },
    {
      image:
        "https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-8-1024x576.jpg?tr=dpr-2,w-675",
      name: "iphone",
      gift: "1 chiếc cặp",
      price: 2000000,
      old_price: 4000000,
    },
  ];

  const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  const items = images.map((item, index) => (
    <Card key={index} sx={{ mx: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={height}
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="center">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{my:2}}>
            {truncateText(item.gift, 30)}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            align="center"
            sx={{ textDecoration: "line-through" }}
          >
            {formatPrice(item.old_price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonStyle>{formatPrice(item.price)}</ButtonStyle>
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

const ButtonStyle = styled.button`
  background: #3699ff;
  color: #fff;
  border-radius: 30px;
  border: none;
  padding: 10px 15px;
  margin: 2px 0;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
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

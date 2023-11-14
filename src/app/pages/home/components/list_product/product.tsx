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
import { ButtonStyle, formatPrice, truncateText } from "../carousel";
import styled from "styled-components";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export interface IProduct {
  product_image?: string;
  product_name?: string;
  product_desc?: string;
  product_price?: number;
  product_sale?: number;
  product_status?: number;
  product_detail: {
    product_cpu: string;
    product_ram: string;
    hard_drive: string;
    product_card: string;
    desktop: string;
  };
}
interface IDataProduct {
  data: IProduct[];
}

export const CardProduct = ({ data }: IDataProduct) => {
  return (
    <Box sx={{ display: "flex" }}>
      {data.slice(0, 5).map((item, index) => (
        <Card sx={{ mx: 0.5, p: "10px", maxWidth: "205px" }} key={index}>
          <CardMedia
            component="img"
            image={item.product_image}
            alt="green iguana"
            sx={{ height: "205px", width: "205px" }}
          />
          <CardContent sx={{ p: 0 }}>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              align="center"
              sx={{
                fontSize: "14px",
                fontWeight: "550",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              {truncateText(item.product_name, 45)}
            </Typography>
            {item.product_status === 1 ? (
              <StyleType color1="#AED2FF" color2="#3699ff">
                <ConnectedTvIcon />
                Cấu Hình Cao
              </StyleType>
            ) : (
              <StyleType color1="#ff9300" color2="#e3330b">
                <LocalFireDepartmentIcon />
                New
              </StyleType>
            )}

            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 0.4 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  CPU
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  RAM
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  Ổ cứng
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  Card
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  Màn hình
                </Typography>
              </Box>
              <Box sx={{ flex: 0.6 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  {item.product_detail?.product_cpu}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  {item.product_detail?.product_ram}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  {item.product_detail?.hard_drive}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  {item.product_detail?.product_card}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 0.8, fontSize: "0.8rem" }}
                >
                  {item.product_detail?.desktop}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="body2"
                component="div"
                align="center"
                sx={{ textDecoration: "line-through", fontSize: "1rem" }}
              >
                {formatPrice(item.product_price || 0)}
              </Typography>
              <Box
                sx={{
                  background: "#d00012",
                  px: "3px",
                  py: "1",
                  color: "white",
                  borderRadius: "5px",
                  ml: "5px",
                  fontSize: "11px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  wordWrap: "break-word",
                }}
              >
                -{item?.product_sale || 0}%
              </Box>
            </Box>
          </CardContent>

          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <ButtonStyle>
              {formatPrice(
                (item?.product_price || 0) -
                  ((item?.product_price || 0) / 100) * (item?.product_sale || 0)
              )}
            </ButtonStyle>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

const StyleType = styled.span<{ color1: string; color2: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  padding: 5px;
  border-radius: 15px;
  background-image: linear-gradient(
    90deg,
    ${(props) => `${props.color1}, ${props.color2}`}
  );
`;

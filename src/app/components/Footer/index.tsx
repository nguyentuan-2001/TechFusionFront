import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  FormControl,
  TextField,
  InputBase,
  IconButton,
  Paper,
} from "@mui/material";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import DirectionsIcon from "@mui/icons-material/Directions";

export function Footer() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <ShadowBox>
        <Container
          sx={{ mx: "0 10px", display: "flex", alignItems: "center", gap: 5 }}
        >
          <Box>
            <Typography variant="h6" component="h6" sx={{ fontWeight: "bold" }}>
              KÊNH THÔNG TIN
            </Typography>
            <Typography variant="body1" component="p">
              Mời bạn nhập email để nhận những thông tin khuyến mại mới nhất từ
              Laptop88
            </Typography>
          </Box>

          <FormControl error={"type" in (errors || {})}>
            <Controller
              control={control}
              name={`type`}
              rules={{ required: true }}
              render={({ field }) => {
                const { onBlur, onChange, value } = field;
                return (
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Email Address"
                      inputProps={{ "aria-label": "Email Address" }}
                      onChange={onChange}
                      value={value || ""}
                      onBlur={onBlur}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <DirectionsIcon />
                    </IconButton>
                  </Paper>
                );
              }}
            />
          </FormControl>
        </Container>
      </ShadowBox>
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are XYZ company, dedicated to providing the best service to
                our customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: info@example.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const ShadowBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #e1e1e1;
  padding: 27px 0;
  -webkit-box-shadow: inset 0 6px 22px -7px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 6px 22px -7px rgba(0, 0, 0, 0.4);
`;

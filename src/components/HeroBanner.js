import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", sx: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        mb="23px"
        mt="30px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        className="custom-btn"
        variant="contained"
        sx={{ padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        className="user-select"
        color="#FF2625"
        fontWeight={600}
        fontSize="200px"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;

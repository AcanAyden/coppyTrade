"use client";
import { HeroSection } from "@/components/Landing/HeroSection";
import { SecondSection } from "@/components/Landing/SecondSection";
import { ThirdSection } from "@/components/Landing/ThirdSection";
import { Container, createStyles } from "@mantine/core";
import { Header } from "@/components/Landing/Header";
import { Footer } from "@/components/Landing/Footer";
import { FourSection } from "@/components/Landing/FourSection";
import { FiftSection } from "@/components/Landing/FiftSection";
import { LastSetction } from "@/components/Landing/LastSetction";

const useStyles = createStyles(() => ({
  landingContainer: {
    background: "white",
    overflow: "hidden",
    "&:after": {
      content: `""`,
      background: `linear-gradient(180deg,#c4e8df,hsla(0,0%,100%,0))`,
      display: "block",
      height: "1030px",
      left: 0,
      opacity: "0.3",
      position: "absolute",
      top: 0,
      width: "100%",
      zIndex: 1,
    },
  },
  inner: {
    position: "relative",
    zIndex: 2,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <Container fluid p={0} pos={"relative"}>
      <div className={classes.landingContainer}>
        <div className={classes.inner}>
          <Header />
          <HeroSection />
          <SecondSection />
          <ThirdSection />
          <FourSection />
          <FiftSection />
                          <LastSetction />
                          <Footer/>
        </div>
      </div>
    </Container>
  );
}

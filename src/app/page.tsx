"use client";
import { Header } from "@/components/Landing/Header";
import { HeroSection } from "@/components/Landing/HeroSection";
import { SecondSection } from "@/components/Landing/SecondSection";
import { ThirdSection } from "@/components/Landing/ThirdSection";
import { Button, Container } from "@mantine/core";

export default function Home() {
  return (
    <>
              <Container fluid p={0}>
                  <Header />
                  <HeroSection />
                  <SecondSection />
                  <ThirdSection />
              </Container>
    </>
  );
}

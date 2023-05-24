"use client";
import { Carousel } from "@mantine/carousel";
import {
  Box,
  Flex,
  Title,
  createStyles,
  Grid,
  Card,
  Container,
  Button,
  Tabs,
} from "@mantine/core";
import Image from "next/image";
import React from "react";

const useStyle = createStyles(() => ({}));

const Page = () => {
  const { classes } = useStyle();
  return (
    <Container fluid pos="relative" bg={"#F8F8FA"}>
      <Grid columns={24} w={"100%"} m={0}>
        <Grid.Col lg={18}>
          <Box
            style={{
              background: `linear-gradient(90.21deg, rgb(0, 157, 120) 3.09%, rgb(12, 12, 12) 88.88%)`,
              borderRadius: "25px",
            }}
            pos="relative"
            p={30}>
            <Title color="white" mt={"md"}>
              Hiện bạn chưa có gói đầu tư nào
            </Title>
            <Title color="white" mt={"md"}>
              Hãy tạo để{" "}
              <span style={{ color: "green" }}>đầu tư thành công</span>
            </Title>
            <Button
              size="lg"
              styles={() => ({
                label: {
                  color: "#000",
                },
              })}
              bg={"white"}>
              Tạo gói đầu tư
            </Button>
            <Box pos="absolute" bottom={0} right={0} w={300} h={250}>
              <Image src={"/assets/images/banner-right.png"} alt="" fill />
            </Box>
          </Box>

          <Title color="green.6" mt={100}>
            Gói hiệu quả hàng đầu{" "}
          </Title>

          <Carousel
            mt={50}
            height={300}
            slideSize="33.333333%"
            slideGap="md"
            withControls={false}
            align="start">
            <Carousel.Slide pos={"relative"}>
              <Image src={"/assets/images/rank1.png"} alt="" fill />
            </Carousel.Slide>
            <Carousel.Slide pos={"relative"}>
              <Image src={"/assets/images/rank2.png"} alt="" fill />
            </Carousel.Slide>
            <Carousel.Slide pos={"relative"}>
              <Image src={"/assets/images/rank3.png"} alt="" fill />
            </Carousel.Slide>
            <Carousel.Slide pos={"relative"}>
              <Image src={"/assets/images/rank4.png"} alt="" fill />
            </Carousel.Slide>
            <Carousel.Slide pos={"relative"}>
              <Image src={"/assets/images/rank4.png"} alt="" fill />
            </Carousel.Slide>
          </Carousel>
          <Box mt="xl" w={"100%"} h={500} pos={"relative"}>
            <Image src={"/assets/images/rank.png"} alt="" fill />
          </Box>
        </Grid.Col>
                    <Grid.Col lg={6}>
                          <Box w={"100%"} h={200} pos="relative">
            <Image src={"/assets/images/banner-3.png"} alt="" fill />
                          </Box>
                          <Title color={"green.6"} size={28} mt="lg">
                          Kiểm định kế hoạch đầu tư ngay, biết liền kết quả
          </Title>
          <Title  size={24} mt="lg">
          Để chạy thử kế hoạch đầu tư, bạn cần chọn loại tín hiệu
          </Title>
                          <Tabs variant="pills" defaultValue="gallery" 
                                styles={(theme) => ({
                                      tab: {
                                            border: "1px solid #000",
                                            borderRadius:'25px',
                                            '&[data-active]': {
                                                  background: theme.colors.green[6],
                                            borderColor:  theme.colors.green[6]
                                            }
                                }
                          })}
                          >
      <Tabs.List grow>
        <Tabs.Tab value="gallery">Bot AI</Tabs.Tab>
        <Tabs.Tab value="messages">Telegram signal</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="gallery" pt="xs">
      <Box w={"100%"} h={200} pos="relative">
            <Image src={"/assets/images/bot.png"} alt="" fill />
                          </Box>
      </Tabs.Panel>
      <Tabs.Panel value="messages" pt="xs">
      <Box w={"100%"} h={200} pos="relative">
            <Image src={"/assets/images/tele.png"} alt="" fill />
                          </Box>
      </Tabs.Panel>
    </Tabs>
    <Box w={"100%"} h={500} pos="relative">
            <Image src={"/assets/images/belowtab.png"} alt="" fill />
                          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Page;

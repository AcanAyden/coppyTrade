"use client";
import {
  BackgroundImage,
  Box,
  Title,
  Card,
  Input,
  CopyButton,
  Button,
      Flex,
      Text
} from "@mantine/core";
import React from "react";
import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";

const Page = () => {
  return (
    <>
      <Box mx={"-1rem"}>
        <BackgroundImage
          h={700}
          src="/assets/images/banner-bg.png"
          pos="relative">
          <Box
            pos={"absolute"}
            top={"50%"}
            left={"20%"}
            style={{ transform: `translate(-20%,-50%)` }}>
            <Title>Giới thiệu bạn</Title>
            <Title>
              kiếm lợi nhuận <span style={{ color: "green" }}>Cùng nhau</span>
            </Title>
            <Card
              w={400}
              radius={"md"}
              style={{ background: `rgba(44, 153, 94, 0.3)` }}>
              <Input
                readOnly
                value={"https://quickinvest.ai/register?r=9CC3119"}
                placeholder="Your email"
                mb={10}
              />
              <CopyButton value="https://quickinvest.ai/register?r=9CC3119">
                {({ copy }) => (
                  <Button
                    onClick={copy}
                    radius={"md"}
                    size={"lg"}
                    fullWidth
                    color={"green.6"}
                    leftIcon={
                      <Image
                        src={"/assets/images/coppy.png"}
                        alt=""
                        width={50}
                        height={30}
                      />
                    }>
                    Sao chép Link
                  </Button>
                )}
              </CopyButton>
            </Card>
          </Box>
          <Box w={400} h={300} pos="absolute" right={"10rem"} bottom={"-1rem"}>
            <Image src={"/assets/images/banner-img.png"} alt="" fill />
          </Box>
        </BackgroundImage>
        <Box px={50} mt={100}>
          <Flex justify="space-between">
            <Title>Danh sách thành viên</Title>
            <Flex align={"center"} gap={20}>
              <Input
                icon={<IconSearch />}
                variant="filled"
                placeholder="Search nickname"
                size="lg"
              />
              <Button radius="md" color={"green.6"} size="lg">
                Tìm kiếm
              </Button>
            </Flex>
                          </Flex>
                          <Box h={600} bg={"white"} my={50} style={{ borderRadius: "25px" }}>
                                <Flex direction={"column"} justify={"center"} align={"center"} w={"100%"} h={"100%"}>
                        <Image src={"/assets/icons/noData.svg"} alt="" width={113} height={113} />
                                      <Text color={"#c1c1c1"}>Không có dữ liệu ở đây!</Text>
                                </Flex>
                                
                        </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;

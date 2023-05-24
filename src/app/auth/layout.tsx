"use client";
import { Input, Flex, Box, Title, Text, rem, MediaQuery, Stack } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

const country = [
      {
        flag: "🇻🇳",
        name: "Viet Nam",
      },
      {
        flag: "🇬🇧",
        name: "English",
      },
    ];

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
      <Flex>
              <Box style={{ flex: 1 }} >
              <Flex justify="space-between" align={"center"}  px={200} py={30}>
                          <Image src={"/assets/images/logo_light.svg"} alt="" width={180} height={40} />
                          <Input component="select">
              {country.map((item) => {
                return (
                  <option value={item.name} key={item.name}>
                    {item.name} {item.flag}
                  </option>
                );
              })}
            </Input>
                    </Flex>
                    <Box px={200} py={30}> 
                    {children}
                    </Box>
              </Box>
                    <MediaQuery smallerThan="md" styles={{display: "none"}}>
                        <Box style={{flex: 1}}>
                        <Carousel
                              maw={"100%"}
                              mx="auto"
                              withIndicators
                              height={"100vh"}
                              pos={"relative"}
                              bg={"green.6"}
                              withControls={false}
                              loop
                              styles={{
                              indicator: {
                              width: rem(12),
                              height: rem(12),
                              transition: "width 250ms ease",
                              },
                              }}>
                              <Carousel.Slide>
                              <Box w={"100%"} h={"60%"} pos={"relative"}>
                              <Image src={"/assets/images/banner-1.png"} alt="" fill />
                              </Box>
                              <Box w={"100%"} h={"40%"} p={"xl"}>
                              <Title color="white" align="center" size={40}>Kỷ nguyên mới cho đầu tư tài sản kỹ thuật số</Title>
                              <Text color="white" size={18} p={"xl"}>
                                    Hướng dẫn cung cấp trãi nghiệp tốt nhất cho tất cả các nhà
                                    giao dịch, Quickinvest sở hữu tính năng độc đáo và chiến lược
                                    kiếm tiền hiệu quả.
                              </Text>
                              </Box>
                              </Carousel.Slide>
                              <Carousel.Slide>
                              <Box w={"100%"} h={"60%"} pos={"relative"}>
                              <Image src={"/assets/images/banner-2.png"} alt="" fill />
                              </Box>
                              <Box w={"100%"} h={"40%"}>
                              <Title color="white" align="center" size={40}>Tất Cả Bạn Cần Để Giao Dịch Thành Công</Title>
                              <Text color="white" size={18}>
                                    Quickinvest cung cấp mọi thứ bạn cần trong một nền tảng duy
                                    nhất với giao diện thân thiện giành cho giao dịch đẳng cấp
                                    nhất thế giới
                              </Text>
                              </Box>
                              </Carousel.Slide>
                              <Carousel.Slide>
                              <Box w={"100%"} h={"60%"} pos={"relative"}>
                              <Image src={"/assets/images/banner-3.png"} alt="" fill />
                              </Box>
                              <Box w={"100%"} h={"40%"}>
                              <Title color="white" align="center" size={40}>
                                    Gia tăng lợi nhuận với công cụ giao dịch thông minh
                              </Title>
                              <Text color="white" size={18}>
                                    Quickinvest cung cấp cac chỉ báo tinh vi bà thân thiện với
                                    người dùng để hỗ trợ các nhà giao dịch đưa ra các quyết định
                                    sáng suốt
                              </Text>
                              </Box>
                              </Carousel.Slide>
                        </Carousel>
                        </Box>
                          
                    </MediaQuery>
      </Flex>
  );
};
export default Layout;

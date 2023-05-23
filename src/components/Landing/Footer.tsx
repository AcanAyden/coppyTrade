import { Box, Flex, Grid, Input, Text, Title } from "@mantine/core";
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

export const Footer: React.FC = () => {
  return (
    <Box bg={"transparent"} mt={-100} pos={"relative"} style={{ zIndex: 2 }}>
      <Box
        style={{ borderRadius: "50px 50px 0 0" }}
        bg={"#111827"}
        p={150}
        pos={"relative"}>
        <Box
          w={366}
          h={366}
          pos={"absolute"}
          top={0}
          left={"50%"}
          style={{ transform: `translate(-50%,-50%)` }}>
          <Image src={"/assets/images/egg.png"} alt="" fill />
        </Box>
        <Flex
          justify={"space-between"}
          align={"center"}
          pb={25}
          style={{ borderBottom: `1px solid hsla(0,0%,98%,.3)` }}>
          <Title color="white" size={48} w={"70%"}>
            <span style={{ color: "green" }}>Tham gia</span> cộng đồng đầu tư
            của chúng tôi để
            <span style={{ color: "green" }}> giao dịch ngay!</span>
          </Title>
          <Image
            src={"/assets/icons/arrow.svg"}
            alt=""
            height={85}
            width={85}
          />
        </Flex>

        <Grid columns={24} mt={20}>
          <Grid.Col lg={6} md={24}>
            <Image
              src={"/assets/images/logo_dark.svg"}
              alt=""
              width={181}
              height={40}
            />
            <Text size={"lg"} color={`hsla(0,0%,98%,.3)`}>
              &copy;2023 Mọi quyền sở hữu thuộc về Quickinvest
            </Text>
          </Grid.Col>
          <Grid.Col lg={6} md={24}>
            <Title color="green" size={24} >
              Liên hệ
            </Title>
            <Text color={`hsla(0,0%,98%,.3)`} size={"lg"}>contact@quickinvest.ai</Text>
          </Grid.Col>
          <Grid.Col lg={6} md={24}>
            <Title color="green" size={24}>
              Kênh truyền thông
            </Title>
            <Text color={`hsla(0,0%,98%,.3)`} size={"lg"}>Youtube</Text>
          </Grid.Col>
          <Grid.Col lg={6} md={24}>
            <Input component="select">
              {country.map((item) => {
                return (
                  <option value={item.name} key={item.name}>
                    {item.name} {item.flag}
                  </option>
                );
              })}
            </Input>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};

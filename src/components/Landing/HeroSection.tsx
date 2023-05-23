"use client";
import { Grid, Title, Flex, Text, Button, Stack, createStyles } from "@mantine/core";
import Image from "next/image";

const useStyle = createStyles((theme) => ({
      testTitle: {
            fontSize: "48px",
            [theme.fn.smallerThan("md")]: {
            fontSize: "24px",
            }
      }
}))

export const HeroSection: React.FC = () => {
      const {classes} = useStyle()
  return (
    <Grid columns={24} h={"100vh"} pr={{lg:20, base:0}} py={{base:50,lg:100}}  m={0}>
      <Grid.Col lg={8} orderLg={1} order={2} px={100} pos={"relative"}>
        <Stack align="flex-start" h={"100%"} justify="center">
          <Title order={2} color="dark" className={classes.testTitle}>
            Hãy tự tin với Qickinvest{" "}
            <span style={{ color: "green" }}>
              rồi theo dõi lợi nhuận của bạn tăng lên.
            </span>
          </Title>
          <Text size="lg" mt={"md"} color="dark">
            Quickinvest cung cấp các công cụ tài chính chuyên nghiệp để hỗ trợ
            bạn đưa ra các quyết định đầu tư hiệu quả khi giao dịch.
          </Text>
          <Button color="green.6" radius={"md"} mt={"md"}>
            Bắt đầu
          </Button>
        </Stack>
      </Grid.Col>
      <Grid.Col lg={16} orderLg={2} order={1} pos={"relative"} h={{md:643, sm:643}}>
        <Image src="/assets/images/heroBanner.png" fill alt="" />
      </Grid.Col>
    </Grid>
  );
};

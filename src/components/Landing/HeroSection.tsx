"use client";
import { Grid, Title, Flex, Text, Button, Stack } from "@mantine/core";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <Grid columns={24} h={"100vh"} pr={20} py={100}  m={0}>
      <Grid.Col lg={8} orderLg={1} px={100} pos={"relative"}>
        <Stack align="flex-start" h={"100%"} justify="center">
          <Title order={2} color="dark" size={48}>
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
      <Grid.Col lg={16} orderLg={2} pos={"relative"}>
        <Image src="/assets/images/heroBanner.png" fill alt="" />
      </Grid.Col>
    </Grid>
  );
};

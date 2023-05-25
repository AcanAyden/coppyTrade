"use client";
import { RankTable } from "@/components/Dashboard/Ranking/RankTable";
import { Ranking } from "@/components/Dashboard/Ranking/Ranking";
import {
  Box,
  Flex,
  Title,
  createStyles,
  Grid,
  Text,
  Container,
  Button,
  Tabs,
  Input,
  MultiSelect,
  Group
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'vue', label: 'Vue' },
      { value: 'riot', label: 'Riot' },
      { value: 'next', label: 'Next.js' },
      { value: 'blitz', label: 'Blitz.js' },
    ];

const useStyle = createStyles(() => ({}));

const Page = () => {
  const { classes } = useStyle();
  return (
    <Container fluid pos="relative" bg={"#F8F8FA"}>
      <Grid columns={24} w={"100%"} m={0}>
        <Grid.Col lg={18} style={{ overflow: "hidden" }}>
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
            <Box pos="absolute" bottom={"-5rem"} right={0} w={300} h={250}>
              <Image src={"/assets/images/banner-right.png"} alt="" fill />
            </Box>
          </Box>
          <Title color="green.6" mt={100}>
            Gói hiệu quả hàng đầu ✨{" "}
          </Title>
          <Ranking />
          <RankTable />
        </Grid.Col>
        <Grid.Col lg={6}>
            <Group bg="white"  p={20} style={{borderRadius: "25px"}}>
          <Box w={"100%"} h={200} pos="relative">
            <Image src={"/assets/images/banner-3.png"} alt="" fill />
          </Box>
          <Title color={"green.6"} size={28} mt="lg">
            Kiểm định kế hoạch đầu tư ngay, biết liền kết quả
          </Title>
          <Title size={24} mt="lg">
            Để chạy thử kế hoạch đầu tư, bạn cần chọn loại tín hiệu
          </Title>
          <Tabs
            variant="pills"
            defaultValue="gallery"
            styles={(theme) => ({
              tab: {
                border: "1px solid #000",
                borderRadius: "25px",
                "&[data-active]": {
                  background: theme.colors.green[6],
                  borderColor: theme.colors.green[6],
                },
              },
            })}>
            <Tabs.List grow>
              <Tabs.Tab value="gallery">Bot AI</Tabs.Tab>
              <Tabs.Tab value="messages">Telegram signal</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="gallery" pt="xs">
              <Title size={24} mt="lg">
                bước tiếp theo, chọn loại BOT
              </Title>
              <Input
                component="select"
                variant="unstyled"
                size={"xl"}
                styles={(theme)=> ({
                  input: {
                        color:theme.colors.green[6],
                        fontWeight: 700
                  }
                })}
                rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                <option value="1">BOT Thuận Thiên</option>
              </Input>
              <Text size={"xl"}>Bot Thuận Thiên sử dụng phương pháp: Reverse </Text>
            </Tabs.Panel>
            <Tabs.Panel value="messages" pt="xs">
              <MultiSelect
               variant="unstyled"
                  data={data}
                  styles={(theme)=>({
                        value: {
                              background: "transparent",
                              border: `1px solid green`,
                              borderRadius: "25px",
                              color: theme.colors.green[6]
                        },
                        defaultValueRemove: {
                              color: theme.colors.green[6]
                        }
                  })}
                  label={<Title size={24} mt="xl">
                  Bước Tiếp theo, chọn kênh telegram
                    </Title>}
                  placeholder="Select..."
            />
             
            </Tabs.Panel>
          </Tabs>
                                <Group>
          <Title size={24} mt="lg">
             Sau đó, chọn loại QLV để tăng hiệu quả đầu tư
                    </Title>
                    <Input
                component="select"
                variant="unstyled"
                styles={(theme)=> ({
                  input: {
                        color:theme.colors.green[6],
                        fontWeight: 700
                  }
                })}
                size={"xl"}
                w={"100%"}
                rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                <option value="1">BOT Thuận Thiên</option>
                  </Input>
                  <Text size={"xl"} >QLV Đều lệnh 1 sử dụng phương pháp: All orders</Text>
                  <Button
              size="xl" fullWidth radius="md" color="dark.8">
              Chạy kiếm tra gói (0/20)
            </Button>
            </Group>
            <Link href="#" style={{width:"100%"}}><Text color="dark.8" align="center">Lịch sử kiểm tra gói (0)</Text></Link>
            </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Page;

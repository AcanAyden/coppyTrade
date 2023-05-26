"use client";
import {
  ActionIcon,
  Card,
  Flex,
  Title,
  Grid,
  Text,
  Button,
  Tabs,
  createStyles,
  Box,
  CopyButton
} from "@mantine/core";
import { IconRefresh, IconWallet, IconSettings, IconAlertCircle,IconCirclePlus } from "@tabler/icons-react";
import React, { useState } from "react";
import Image from 'next/image'


const useStyles = createStyles(()=>({
      chartSection:{
            height:0,
            paddingTop: 0,
            transition: `height 1s`

      },
      showChart: {
            height: "320px",
            padding: "20px 0",
            transition: `height 1s`
      }
}))

const Page = () => {
      const {classes} = useStyles()
      const [showChart, setShowChart] = useState<boolean>(false)
  return (
    <>
      <Card mt={30} mx={50} radius="lg" px={50}>
        <Card.Section p={20} withBorder>
          <Flex justify="space-between" align="center">
            <Title size={20}>
              <IconWallet size={"1.125rem"} /> Tổng tài sản{" "}
            </Title>
            <ActionIcon>
              <IconRefresh size="1.125rem" />
            </ActionIcon>
          </Flex>
        </Card.Section>
        <Card.Section p={20} withBorder>
          <Grid columns={24}>
            <Grid.Col lg={7}>
              <Text fw={600}>$0.00</Text>
              <Text color="dark.3">Số sư hiện tại</Text>
            </Grid.Col>
            <Grid.Col lg={7}>
              <Text fw={600}>$0.00</Text>
              <Text color="dark.3">Tổng đầu tư</Text>
            </Grid.Col>
            <Grid.Col lg={7}>
              <Text fw={600} color={"green.6"}>
                $0.00
              </Text>
              <Text color="dark.3">
                Lời/Lỗ hàng ngày <span style={{ color: "green" }}>(0.00%)</span>
              </Text>
            </Grid.Col>
            <Grid.Col lg={3} style={{ textAlign: "end" }}>
              <Text fw={600} align="start">
                - / -
              </Text>
              <Button
                color="blue.6"
                variant="outline"
                leftIcon={<IconSettings />}>
                Mục tiêu ngày
              </Button>
            </Grid.Col>
          </Grid>
        </Card.Section>
        <Card.Section  className={`${classes.chartSection} ${showChart&&classes.showChart}`}>
          <Tabs defaultValue="profit" orientation="vertical" styles={(theme)=>({
                                tabsList: {
                                    borderRight: "none",
                                },
                                tab: {
                  border: "none",
                  padding: "5px 1rem",
                                      '&[data-active]': {
                                            ".mantine-Card-root": {
                              background: theme.colors.green[6],
                              color: "white"
                        }
                                      },
                                      '&:hover': {
                                            background: "transparent"
                                      }
            },
            tabLabel: {
                  width:"100%"
            }
          })}>
            <Tabs.List>
                                      <Tabs.Tab value="profit" w={250}>
                                      <Card withBorder style={{ flex: 1 }} radius={"lg"}>
                    <Flex justify="space-between" w="100%">
                      <Text size={10} >
                        Tổng lợi nhuận
                      </Text>
                      <IconAlertCircle size={"1rem"} />
                    </Flex>
                    <Text size={18} fw={700}>$0.00</Text>
                    <Text size={10}>$0.00</Text>
                  </Card>
                  </Tabs.Tab>
              <Tabs.Tab value="winlost" w={250}>
                  <Card withBorder style={{ flex: 1 }} radius={"lg"}>
                    <Flex justify="space-between" w="100%">
                      <Text size={10} >
                        Thắng/Thua
                      </Text>
                      <IconAlertCircle size={"1rem"} />
                    </Flex>
                    <Text size={18} fw={700}>0/0</Text>
                    <Text size={10}>$0.00 tỉ lệ thắng</Text>
                  </Card></Tabs.Tab>
              <Tabs.Tab value="amountoftrade" w={250}>
                  <Card withBorder style={{ flex: 1 }} radius={"lg"}>
                    <Flex justify="space-between" w="100%">
                      <Text size={10} >
                        Tổng khối lượng GD
                      </Text>
                      <IconAlertCircle size={"1rem"} />
                    </Flex>
                    <Text size={18} fw={700}>$0.00</Text>
                  </Card></Tabs.Tab>
            </Tabs.List>

                                <Tabs.Panel value="profit" py={5}>
                                      <Card withBorder style={{ flex: 1 }} radius={"lg"} h={"100%"} >
                  Gallery tab content
                  </Card>
                  </Tabs.Panel>
            <Tabs.Panel value="winlost" py={5}>
            <Card withBorder style={{ flex: 1 }} radius={"lg"} h={"100%"} >
            winlost tab content
                  </Card></Tabs.Panel>
            <Tabs.Panel value="amountoftrade" py={5}>
            <Card withBorder style={{ flex: 1 }} radius={"lg"} h={"100%"} >
            amountoftrade tab content
                  </Card>
                  </Tabs.Panel>
          </Tabs>
        </Card.Section>
        <Card.Section mx={"-4rem"}>
                  <Button fullWidth size={"md"} color={"gray.2"} styles={(theme)=>({
                        label:{
                              color: theme.colors.dark
                        }
                  })}
                  onClick={()=>setShowChart(!showChart)}
                  >Thu gọn tổng quan</Button>
            </Card.Section>
      </Card>
      <Flex direction="column" w="100%" justify="center" align="center" py={50}>
               <Box w={500}>
                  <Flex direction="column" w="100%" justify="center" align="center" >
               <Image style={{borderRadius: "25px"}} src={'/assets/images/banner-2.png'} alt={''} width={360} height={297} />
                  <Title style={{display: "inline", alignItems: "center", textAlign: "center"}} mt={20}>Danh mục đàu tư của bạn đang trống</Title>
                  <Text mt={20}>Bắt đầu khám phá các cơ hội đầu tư và kiếm lợi nhuận ngay hôm nay.</Text>
                    <Button radius="md"fullWidth size="xl" my={20} color="green.6">Tạo gói đầu tư ngay</Button>
                    <CopyButton value="https://mantine.dev" >
      {({ copied, copy }) => (
            <Button fullWidth color={"dark"} onClick={copy} variant="subtle" leftIcon={<IconCirclePlus/>}>
          Sao chép gói đầu tư được chia sẻ
        </Button>
      )}
    </CopyButton>
      </Flex>

                  </Box>
            </Flex>
    </>
  );
};

export default Page;

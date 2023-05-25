"use client";
import React from "react";
import {
  Flex,
  Group,
  createStyles,
  Box,
  Title,
  Card,
  Text,
} from "@mantine/core";
import { IconMessage2Star, IconAlertCircle } from "@tabler/icons-react";
import { Manage } from "@/components/Manage/Manage";

const useStyles = createStyles(() => ({
  inner: {
    height: "468px",
    background: `url(/assets/images/bannermanage.png)`,
    backgroundPosition: "fixed",
    backgroundSize: `100% 468px`,
    backgroundRepeat: "no-repeat",
    paddingTop: "50px",
  },
  firstBox: {
    "&:after": {
      content: `" "`,
      width: " 388px",
      height: " 230px",
      background: `url(/assets/images/building.png) 100% no-repeat`,
      backgroundPosition: "center",
      position: "absolute",
      top: "99%",
      left: "-39%",
    },
  },
  secondBox: {
    "&:after": {
      content: `" "`,
      width: " 388px",
      height: " 230px",
      background: `url(/assets/images/astronault.png) 100% no-repeat`,
      backgroundPosition: "center",
      position: "absolute",
      top: "-98%",
      left: "28%",
    },
  },
}));

const Page = () => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.inner}>
        <Group pos={"relative"} h={"100%"}>
          <Flex
            justify={"space-around"}
            pos={"absolute"}
            top={"35%"}
            left={"50%"}
            style={{ transform: `translate(-50%,-50%)` }}
            w={"100%"}>
            <Box className={classes.firstBox} pos={"relative"}>
              <Title color="white" size={40}>
                Thống kê theo dõi
              </Title>
              <Title color="white" size={40}>
                Cùng nhau phát triển
              </Title>
            </Box>
            <Box>
              <Box
                bg={"white"}
                pos={"relative"}
                style={{ borderRadius: "25px" }}
                w={460}
                p={20}
                className={classes.secondBox}>
                <Title size={18}>
                  <IconMessage2Star size={"1rem"} /> Thống kê theo dõi
                </Title>
                <Group w={"100%"} mt={"md"} spacing="xs">
                  <Card withBorder style={{ flex: 1 }} radius={"md"}>
                    <Flex justify="space-between" w="100%">
                      <Text size={10} color={"dark.3"}>
                        Tổng số người theo dõi
                      </Text>
                      <IconAlertCircle size={"1rem"} />
                    </Flex>
                    <Text size={14}>0</Text>
                  </Card>
                  <Card withBorder style={{ flex: 1 }} radius={"md"}>
                    <Flex justify="space-between" w="100%">
                      <Text size={10} color={"dark.3"}>
                        Tổng số gói đang chạy
                      </Text>
                      <IconAlertCircle size={"1rem"} />
                    </Flex>
                    <Text size={14}>0</Text>
                  </Card>
                </Group>
              </Box>
            </Box>
          </Flex>
        </Group>
              </div>
              <Box px={50}>
              <Manage/>
            </Box>

    </>
  );
};

export default Page;

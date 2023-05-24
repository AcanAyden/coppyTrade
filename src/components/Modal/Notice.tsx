"use client";
import { Box, Flex, Title, createStyles, keyframes } from "@mantine/core";
import React from "react";

const marque = keyframes`
      0%{
            left: 0;
      },
      100%{
            left: -100%;
      }
`;

const useStyle = createStyles(() => ({
  textAnimate: {
    display: "block",
    overflow: "hidden",
    width: "200%",
    position: "absolute",
    animation: `${marque} 10s linear infinite`,
  },
}));

const Notice = () => {
  const { classes } = useStyle();
  return (
    <div>
      <Flex pos={"relative"} h={60} w={"100%"} bg={"yellow.1"} align="center">
        <Box className={classes.textAnimate}>
          <Flex>
            <Title size={20} w={"50%"} align="center">
              <span style={{ color: "orange" }}>Thông báo quan trọng:</span>{" "}
              Chúng tôi sẽ thực hiện bảo trì vào lúc 24 Thg 05 2023, 06:00 CH,
              thời gian dự kiến 1 giờ. Vui lòng theo dỗi cập nhật tại{" "}
              <span style={{ color: "green" }}>kênh telegram chính thức.</span>
            </Title>
            <Title size={20} w={"50%"} align="center">
              <span style={{ color: "orange" }}>Thông báo quan trọng:</span>{" "}
              Chúng tôi sẽ thực hiện bảo trì vào lúc 24 Thg 05 2023, 06:00 CH,
              thời gian dự kiến 1 giờ. Vui lòng theo dỗi cập nhật tại{" "}
              <span style={{ color: "green" }}>kênh telegram chính thức.</span>
            </Title>
          </Flex>
        </Box>
      </Flex>



    </div>
  );
};

export default Notice;

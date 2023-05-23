import {
  Box,
  Group,
  Table,
  Title,
  createStyles,
  keyframes,
  Flex,
  Text,
  Button,
  Stack,
} from "@mantine/core";
import Image from "next/image";

const marque = keyframes`
      0%{
            left: 0;
      },
      100%{
            left: -100%;
      }
`;

const useStyle = createStyles(() => ({
  parallax: {
    position: "relative",
    background: `url(/assets/images/paralaxbg.png)`,
    height: "100%",
    minHeight: "800px",
    backgroundAttachment: "fixed",
    backgroundPosition: "100% 0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50% 100%",
  },
  textAnimate: {
    display: "block",
    overflow: "hidden",
    width: "200%",
    position: "absolute",
    animation: `${marque} 10s linear infinite`,
  },
}));

export const LastSetction: React.FC = () => {
  const { classes } = useStyle();
  const elements = [
    {
      title: "Thuật toán đầu tư nâng cao",
      icon1: "check",
      icon2: "check",
      icon3: "check",
      icon4: "circle",
    },
    {
      title: "Hiệu quả lợi nhuận cao",
      icon1: "check",
      icon2: "circle",
      icon3: "check",
      icon4: "check",
    },
  ];
  const rows = elements.map((element) => (
    <tr key={element.title} style={{ borderBottomStyle: "dotted" }}>
      <td>
        <Title size={24} color="white">
          {element.title}
        </Title>
      </td>
      <td style={{ textAlign: "center" }}>
        <Image
          src={`/assets/icons/${element.icon1}.svg`}
          alt=""
          width={50}
          height={47}
        />
      </td>
      <td style={{ textAlign: "center" }}>
        <Image
          src={`/assets/icons/${element.icon2}.svg`}
          alt=""
          width={50}
          height={47}
        />
      </td>
      <td style={{ textAlign: "center" }}>
        <Image
          src={`/assets/icons/${element.icon3}.svg`}
          alt=""
          width={50}
          height={47}
        />
      </td>
      <td style={{ textAlign: "center" }}>
        <Image
          src={`/assets/icons/${element.icon4}.svg`}
          alt=""
          width={50}
          height={47}
        />
      </td>
    </tr>
  ));
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Box bg={"#111827"} pt={80}>
        <Group mb={50}>
          <Box className={classes.textAnimate}>
            <Flex>
              <Title size={48} w={"50%"} align="center" color="white">
                Khi so sánh với nền tảng khác, dịch vụ của chúng tôi là tốt nhất
              </Title>
              <Title size={48} w={"50%"} align="center" color="white">
                Khi so sánh với nền tảng khác, dịch vụ của chúng tôi là tốt nhất
              </Title>
            </Flex>
          </Box>
        </Group>
        <Group py={80} px={100}>
          <Table verticalSpacing="xl" fontSize="xl">
            <thead style={{ borderBottomStyle: "dotted" }}>
              <tr>
                <th></th>
                <th style={{ textAlign: "center" }}>
                  <Image
                    src={`/assets/images/logo_dark.svg`}
                    alt=""
                    width={181}
                    height={40}
                  />
                </th>
                <th>
                  <Text size={24} color="white" align="center">
                    Nhà môi giới toàn phần
                  </Text>
                </th>
                <th>
                  <Text size={24} color="white" align="center">
                    Dịch vụ quản lý đầu tư khác
                  </Text>
                </th>
                <th>
                  <Text size={24} color="white" align="center">
                    Cố vấn tài chính
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows}
              <tr style={{ borderBottomStyle: "dotted" }}>
                <td>
                  <Text size={24} color="white">
                    Phí quản lí
                  </Text>
                </td>
                <td>
                  <Text size={24} color="white" align="center">
                    0%
                  </Text>
                </td>
                <td>
                  <Text size={24} color="white" align="center">
                    &gt;1%
                  </Text>
                </td>
                <td>
                  <Text size={24} color="white" align="center">
                    0.24-0.50%
                  </Text>
                </td>
                <td>
                  <Text size={24} color="white" align="center">
                    &gt;1%
                  </Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: "center" }}>
                  <Button size={"lg"} radius={"md"} color="green.6">
                    Bắt đầu đầu tư
                  </Button>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Group>
        <div className={classes.parallax}>
          <Flex
            h={800}
            bg={"white"}
            justify="center"
            w={"50%"}
            align={"center"}>
            <Box pl={150} pr={100}>
              <Title size={48}>
                Nếu bạn cần hỗ trợ, chúng tôi luôn sẳn sàng giúp bạn!
                <span style={{ color: "green" }}> Khám phá ngay</span>
              </Title>
              <Text mt={"lg"}>
                Nếu bạn gặp bất kì vấn đề hay câu hỏi nào, hãy xem các video
                hướng dẫn hoặc liên hệ với đội ngũ hỗ trợ của chúng tôi. Đừng
                ngần ngại liên hệ với chúng tôi để được giúp đỡ.
              </Text>
              <Button
                mt={"lg"}
                leftIcon={
                  <Image
                    src={"/assets/icons/youtube.svg"}
                    alt=""
                    width={28}
                    height={28}
                  />
                }
                variant={"outline"}
                radius={"xl"}
                size={"xl"}
                color={"dark"}>
                Youtube
              </Button>
            </Box>
          </Flex>
        </div>
      </Box>
    </div>
  );
};

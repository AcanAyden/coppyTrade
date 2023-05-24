import {
  Text,
  Box,
  Grid,
  Title,
  createStyles,
  Button,
  Stack,
} from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  textDeco: {
    "&:before": {
      content: `""`,
      background: `url(/assets/images/line.png) no-repeat`,
      backgroundSize: "cover",
      display: "block",
      position: "absolute",
      width: "278px",
      height: "28px",
      transform: `translateX(-50%)`,
      left: "28%",
      top: "41%",
      [theme.fn.smallerThan("md")]: {
        width: "175px",
            height: "18px",
            left: "61%",
            top: "14%",
      },
    },
  },
  testTitle: {
    fontSize: "48px",
    [theme.fn.smallerThan("md")]: {
      fontSize: "24px",
    },
  },
}));

export const FourSection: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Grid columns={24} mx={0} mb={{ base: 50, lg: 300 }}>
      <Grid.Col lg={12} pos={"relative"} pl={0}>
        <Box
          w={{ base: 100, lg: 279 }}
          h={{ base: 100, lg: 279 }}
          pos={"absolute"}
          top={{ base: "-6%", lg: "-16%" }}
          right={{ base: "-2%", lg: "-16%" }}
          style={{ zIndex: 2 }}>
          <Image src={"/assets/images/animal_1.svg"} alt="" fill />
        </Box>
        <Box w={"100%"} pos={"relative"} h={472}>
          <Image src={"/assets/images/imgLeft.png"} alt="" fill />
        </Box>
        <Box
          w={{ base: 100, lg: 240 }}
          h={{ base: 100, lg: 250 }}
          pos={"absolute"}
          bottom={"-12%"}
          right={{ base: "90%", lg: "-6%" }}>
          <Image src={"/assets/images/checkmate.png"} alt="" fill />
        </Box>
      </Grid.Col>
      <Grid.Col lg={12}>
        <Stack justify="center" h={"100%"}>
          <Box pos={"relative"} pl={100} pr={250}>
            <Title color="dark" mb={50} className={classes.testTitle}>
              Đẩy nhanh lợi tức đầu tư của bạn với{" "}
              <span className={classes.textDeco}>QuickinVest</span> ✨
            </Title>
            <Text size={"lg"} color="dark" mb={50}>
              Bằng cách tận dụng các thuật toán đầu tư nâng cao, Quickinvest tạo
              điều kiện cho các quyết định đầu tư nhanh hơn, sáng suất hơn, cho
              phép bạn tối đa hoá lợi nhuận trong khoảng thời gian ngắn.
            </Text>
            <Button color="green.6" radius={"md"} size="lg">
              Bắt đầu đầu tư
            </Button>
          </Box>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

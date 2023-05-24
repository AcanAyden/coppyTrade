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
      testTitle: {
            fontSize: "48px",
            [theme.fn.smallerThan("md")]: {
              fontSize: "24px",
            },
          },
}));

export const FiftSection: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Grid columns={24} mx={0} mb={300}>
      <Grid.Col lg={12}  order={2} orderLg={1} orderMd={2}>
        <Stack justify="center" h={"100%"}>
          <Box pos={"relative"} px={{base: 20, lg: 200}}>
            <Box w={279} h={279} pos={"absolute"} top={"-50%"} right={"-10%"}>
              <Image src={"/assets/images/animal_2.svg"} alt="" fill />
            </Box>
            <Title color="dark" mb={50} className={classes.testTitle}>
              Tấm vé đến tự do tài chính của bạn.
            </Title>
            <Text size={"lg"} color="dark" mb={50}>
              Chúng tôi ở đâu để giúp bạn đạt được nguyện vong và đảm bảo tương
              lai tài chính của bạn bằng các công cụ đầu tư và chiến lượt giao
              dịch độc quyền.
            </Text>
            <Button color="green.6" radius={"md"} size="lg">
              Bắt đầu đầu tư
            </Button>
          </Box>
        </Stack>
      </Grid.Col>
      <Grid.Col lg={12} pos={"relative"} pr={0} order={1} orderLg={2} orderMd={1}>
        <Box w={"100%"} pos={"relative"} h={648}>
          <Image src={"/assets/images/imgRight.png"} alt="" fill />
          <Box w={240} h={250} pos={"absolute"} bottom={"-20%"} left={"-0%"}>
            <Image src={"/assets/images/sandClock.png"} alt="" fill />
          </Box>
        </Box>
      </Grid.Col>
    </Grid>
  );
};

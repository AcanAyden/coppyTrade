import {
  Button,
  Box,
  Group,
  Stack,
  Title,
  Text,
  Grid,
  Card,
  SimpleGrid,
} from "@mantine/core";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";

export const SecondSection: React.FC = () => {
  return (
    <>
      <Box pos={"relative"} mt={30}>
        <Stack align="center" justify="center" pt={220}>
          <Group w={"50%"} position="center">
            <Group pos={"relative"}>
              <Box pos={"absolute"} top={"-18rem"} left={"-23rem"}>
                <ScrollAnimation animateIn="animate__fadeInRight" duration={1}>
                  <Image
                    src={"/assets/images/cloud.svg"}
                    alt=""
                    width={414}
                    height={414}
                  />
                </ScrollAnimation>
              </Box>

              <Title align="center" color="dark" size={48}>
                Giải pháp toàn diện cho nhu cầu giao dịch của bạn.
              </Title>
              <Box pos={"absolute"} bottom={"-13rem"} right={"-24rem"}>
                <ScrollAnimation animateIn="animate__fadeInLeft">
                  <Image
                    src={"/assets/images/cloud.svg"}
                    alt=""
                    width={414}
                    height={414}
                  />
                </ScrollAnimation>
              </Box>
            </Group>
            <Text align="center" color="dark" size={"lg"}>
              Nền tảng đầu tư của chúng tôi cung cấp giải pháp liền mạch và hoàn
              chỉnh để giúp bạn đạt được các mục tiêu tài chính, với một loạt
              công cụ đầu tư mạnh mẽ, thông tin chuyên sâu về giao dịch của
              chuyên gia và giao diện thân thiện với người dùng.
            </Text>
            <Button color="green.6" size="md" radius={"md"}>
              Bắt đầu
            </Button>
          </Group>
        </Stack>
      </Box>
      <Box p={100}>
        <Grid columns={24} p={0}>
          <Grid.Col lg={8} sm={24}>
            <Card radius="lg" withBorder pos={"relative"} py={65} px={20}>
              <Card.Section py={"lg"} mb={40}>
                <Stack justify={"flex-end"} align={"center"} h={"100%"}>
                  <Image
                    src="/assets/images/card1.png"
                    width={186}
                    height={212}
                    alt="card"
                  />
                </Stack>
              </Card.Section>
              <Title color="dark" size={24} align="center">
                Tính minh bạch
              </Title>
              <Text size="lg" align="center">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col lg={8} sm={24}>
            <Card radius="lg" withBorder pos={"relative"} py={65} px={20}>
              <Card.Section py={"lg"} mb={40}>
                <Stack justify={"flex-end"} align={"center"} h={"100%"}>
                  <Image
                    src="/assets/images/card2.png"
                    width={186}
                    height={212}
                    alt="card"
                  />
                </Stack>
              </Card.Section>
              <Title color="dark" size={24} align="center">
                Tính minh bạch
              </Title>
              <Text size="lg" align="center">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col lg={8} sm={24}>
            <Card radius="lg" withBorder pos={"relative"} py={65} px={20}>
              <Card.Section py={"lg"} mb={40}>
                <Stack justify={"flex-end"} align={"center"} h={"100%"}>
                  <Image
                    src="/assets/images/card3.png"
                    width={186}
                    height={212}
                    alt="card"
                  />
                </Stack>
              </Card.Section>
              <Title color="dark" size={24} align="center">
                Tính minh bạch
              </Title>
              <Text size="lg" align="center">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

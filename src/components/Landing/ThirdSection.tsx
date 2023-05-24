import {
  Box,
  Title,
  Group,
  Stack,
  createStyles,
  Card,
  Flex,
  Avatar,
  Text,
  ColorSwatch,
  keyframes,
} from "@mantine/core";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const float = keyframes`
0%,100% {
      transform: translate(0)
}, 
50%{
      transform: translateY(-20px)
}`

const useStyles = createStyles((theme) => ({
  inner: {
    position: "relative",
    background: `url(/assets/images/whalebg.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
      },
      whale: {
            animation: `${float} 4s ease-in-out infinite`
      },
      testTitle: {
            fontSize: "60px",
            [theme.fn.smallerThan("md")]: {
              fontSize: "24px",
            },
          },
}));

export const ThirdSection: React.FC = () => {
  const { classes } = useStyles();
  return (
        <Box h={{base: "unset", lg : 760}} className={classes.inner} pt={90} mb={{base: 30, lg: 330}} >
                            <Box pos={"absolute"} w={{base: 100, lg: 387}} h={{base: 150, lg: 469}} top={"10%"} left={"10%"} className={classes.whale}>
        <Image src={"/assets/images/whale.svg"} fill alt="" />
              </Box>
      <Stack align="center" mb={90}>
        <Title className={classes.testTitle} color={"white"}>
          Sẳn sàng đầu tư?
        </Title>
        <Title className={classes.testTitle} color={"white"}>
          Chúng tôi sẽ lo phần còn lại
        </Title>
      </Stack>
      <Box w={{base: 500, lg:898}} h={{base:300, lg:505}} pos="relative" mr={"auto"} ml={{base: -250, lg: "auto"}}>
        <Image src={"/assets/images/laptop.png"} fill alt="" />
        <Stack align="center" pos={"absolute"} top={{base: -30,lg :30}} right={{base: "-130%", lg: "-22%"}}>
          <ScrollAnimation animateIn="animate__fadeInRight" duration={1}>
            <Card
              shadow="sm"
              p={{base:"sm", lg:"lg"}}
              radius="md"
              withBorder
              bg={`hsla(0,0%,94%,.6)`}>
              <Group>
                <Avatar
                  src="/assets/images/heroBanner.png"
                  alt=""
                  radius="xl"
                  size={"lg"}
                />
                <Box w={{base: 300, lg:376}} h={{base: 60, lg:"auto"}}>
                  <Flex justify="space-between" align={"center"}>
                    <Title order={4}>Buy a new house</Title>
                    <Text>09:30 AM</Text>
                  </Flex>
                  <Flex justify="space-between" align={"center"}>
                    <Text size={14} color={"dark"} fw={700}>
                      You successfully earnd{" "}
                      <span style={{ color: "green" }}>$19.75</span>
                    </Text>
                  </Flex>
                </Box>
              </Group>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            duration={1}
            delay={500}>
            <Card
              shadow="sm"
              p={{base:"sm", lg:"lg"}}
              radius="md"
              withBorder
              bg={`hsla(0,0%,94%,.6)`}>
              <Group>
                <Avatar
                  src="/assets/images/heroBanner.png"
                  alt=""
                  radius="xl"
                  size={"lg"}
                />
                <Box w={{base: 300, lg:376}} h={{base: 60, lg:"auto"}}>
                  <Flex justify="space-between" align={"center"}>
                    <Title order={4}>Buy a new car</Title>
                    <Text>09:30 AM</Text>
                  </Flex>
                  <Flex justify="space-between" align={"center"}>
                    <Text size={14} color={"dark"} fw={700}>
                      Place $10 order with{" "}
                      <span style={{ color: "red" }}>Shprt 10x</span>
                    </Text>
                    <ColorSwatch color={"green"}>
                      <Text size={14} color={"white"} fw={700}>
                        3
                      </Text>
                    </ColorSwatch>
                  </Flex>
                </Box>
              </Group>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            duration={1}
            delay={1000}>
            <Card
              shadow="sm"
              p={{base:"sm", lg:"lg"}}
              radius="md"
              withBorder
              bg={`hsla(0,0%,94%,.6)`}>
              <Group>
                <Avatar
                  src="/assets/images/heroBanner.png"
                  alt=""
                  radius="xl"
                  size={"lg"}
                />
                <Box w={{base: 300, lg:376}} h={{base: 60, lg:"auto"}}>
                  <Flex justify="space-between" align={"center"}>
                    <Title order={4}>Buy a new house</Title>
                    <Text>09:30 AM</Text>
                  </Flex>
                  <Flex justify="space-between" align={"center"}>
                    <Text size={14} color={"dark"} fw={700}>
                      You successfully earnd{" "}
                      <span style={{ color: "green" }}>$19.75</span>
                    </Text>
                    <ColorSwatch color={"green"}>
                      <Text size={14} color={"white"} fw={700}>
                        3
                      </Text>
                    </ColorSwatch>
                  </Flex>
                </Box>
              </Group>
            </Card>
          </ScrollAnimation>
        </Stack>
              </Box>

              
    </Box>
  );
};

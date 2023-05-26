import {
  Flex,
  Text,
  Card,
  Box,
  createStyles,
  SimpleGrid,
  Title,
  ActionIcon,
} from "@mantine/core";
import { IconReplace, IconWallet } from "@tabler/icons-react";
import Image from "next/image";

const useStyles = createStyles(() => ({
  cardLogo: {
    background: `rgba(255, 255, 255, 0.1)`,
    borderRadius: "15px",
    padding: "4px 50px",
  },
}));

export const Wallet: React.FC = () => {
  const { classes } = useStyles();
  return (
    <>
      <Flex w="100%" align={"center"} p={20} direction="column">
        <Text>
          <IconReplace size={10} /> Chuyển sang Chế độ DEMO
        </Text>
        <Card
          radius={"lg"}
          p={30}
          style={{
            background: `linear-gradient(112.77deg, rgb(0, 43, 22) 14.65%, rgb(84, 206, 147) 87.93%)`,
          }}
          w={"100%"}>
          <Card.Section>
            <Box pos="relative" w={71} h={16} className={classes.cardLogo}>
              <Image src="/assets/icons/starisa.svg" alt="" fill />
            </Box>
          </Card.Section>
          <Card.Section mt={20}>
            <Text color={"white"} size={18}>
              testmai@gmail.com
            </Text>
            <Text size={10} color={"dark.2"}>
              testmai@gmail.com
            </Text>
          </Card.Section>
          <Card.Section withBorder mt={20} pt={20}>
            <SimpleGrid cols={2}>
              <Box>
                <Title size={16} color={"white"}>
                  $0.00
                </Title>
                <Text size={10} color={"dark.2"}>
                  Ví USDT
                </Text>
              </Box>
              <Box>
                <Title size={16} color={"white"}>
                  $0.00
                </Title>
                <Text size={10} color={"dark.2"}>
                  Ví TK Live
                </Text>
              </Box>
            </SimpleGrid>
          </Card.Section>
        </Card>
        {/* action with money */}
      </Flex>
      <Box w="100%"  p={20}>
      <SimpleGrid cols={3}>
        <Box >
          <ActionIcon variant="outline" m="auto">
            <Image
              src={"/assets/icons/minus.svg"}
              alt=""
              width={18}
              height={18}
            />
          </ActionIcon>
          <Text size={12} color={"dark.2"} align={"center"} mt={10}>
            Rút tiền
          </Text>
        </Box>
        <Box>
          <ActionIcon variant="outline"  m="auto">
            <Image
              src={"/assets/icons/add.svg"}
              alt=""
              width={18}
              height={18}
            />
          </ActionIcon>
          <Text size={12} color={"dark.2"} align={"center"} mt={10}>
            Nạp tiền
          </Text>
        </Box>
        <Box>
          <ActionIcon variant="outline"  m="auto">
            <Image
              src={"/assets/icons/swap.svg"}
              alt=""
              width={18}
              height={18}
            />
          </ActionIcon>
          <Text size={12} color={"dark.2"} align={"center"} mt={10}>
            Chuyển
          </Text>
        </Box>
      </SimpleGrid>
      </Box>
      <Text size={16} color={"dark.2"} mt={10}>
            Giao dịch gần đây
              </Text>
              <Flex direction={"column"} align={"center"} w="100%"  justify="center">
              <IconWallet  size={"5rem"} color="#E1E1E1" />
              <Text size={16} color={"dark.2"} mt={10}>
                        Không có giao dịch gần đây!
              </Text>
              </Flex>
    </>
  );
};

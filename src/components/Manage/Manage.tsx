import { Box, Button, Flex, Group, Input, Tabs,Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Image from 'next/image'

export const Manage: React.FC = () => {
  return (
    <Tabs
      defaultValue="system"
      mt={100}
      styles={(theme) => ({
        tab: {
          border: "none",
          color: theme.colors.dark[2],
          fontWeight: 700,
        },
              })}>
              <Box bg={"white"} my={50} style={{ borderRadius: "15px" }} p={20}>
              <Tabs.List style={{ justifyContent: "space-between", border: "none" }}>
        <Group>
          <Tabs.Tab value="system">Hệ thống theo dõi</Tabs.Tab>
          <Tabs.Tab value="blockContact">Danh sách chặn</Tabs.Tab>
        </Group>
        <Group>
          <Input
            size={"md"}
            variant="filled"
            radius={"md"}
            icon={<IconSearch />}
            placeholder="Your email"
          />
          <Button color={"green.6"} size={"md"} radius={"md"} mr="md">
            Tìm kiếm
          </Button>
        </Group>
      </Tabs.List>

      <Tabs.Panel value="system" pt="xs"  h={300}>
      <Flex direction={"column"} justify={"center"} align={"center"} w={"100%"} h={"100%"}>
                        <Image src={"/assets/icons/noData.svg"} alt="" width={113} height={113} />
                                      <Text color={"#c1c1c1"}>Không có dữ liệu ở đây!</Text>
                                </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="blockContact" pt="xs"  h={300}>
      <Flex direction={"column"} justify={"center"} align={"center"} w={"100%"} h={"100%"}>
                        <Image src={"/assets/icons/noData.svg"} alt="" width={113} height={113} />
                                      <Text color={"#c1c1c1"}>Không có dữ liệu ở đây!</Text>
                                </Flex>
      </Tabs.Panel>
                        </Box>

    </Tabs>
  );
};

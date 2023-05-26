import {
  Drawer,
  Flex,
  Title,
  Text,
  TextInput,
  Box,
  Button,
  Checkbox,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";

export const TradeWallet: React.FC = () => {
  return (
    <Drawer.Root opened={true} onClose={close} position="right">
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header m={0} style={{ borderBottom: "1px solid #E1E1E1" }}>
          <Flex w={"100%"} justify="space-between">
            <Title size={20}>Ví giao dịch</Title>
            <Drawer.CloseButton
              size={30}
              p={5}
              radius="100%"
              right={10}
              left="auto"
              pos="relative"
            />
          </Flex>
        </Drawer.Header>
        <Drawer.Body h="100%">
          <Title size={20}>Nạp USDT (BEP-20)</Title>
          <Flex p={20} direction={"column"} align={"center"}>
            <Box pos="relative" w={186} h={186} mt={20}>
              <Image src="/assets/images/whalebg.png" alt="" fill />
            </Box>
            <Box
            mt={20}     
            style={{borderRadius: "5px"}}
              w="100%"
              bg="gray.2"
              py={10}
            >
                  <Text size={14} align="center">0xc2340cBaD81F3A1f14BEFb0FaFEBE2375de9af41</Text>
                  </Box>
            <Checkbox
              color="green.6"
              radius="xl"
              mt={20}
              label={
                <Text size={10}>
                  Sử dụng địa chỉ này để chuyển USDT (BEP-20) từ ví khác sang ví
                  này.
                </Text>
              }
            />
          </Flex>
        </Drawer.Body>
        <Box pos={"sticky"} bottom={0} bg={"white"} pt={10}>
          <Text align="center">Số tiền nạp tối thiểu là 5 USDT</Text>
          <Flex p={20} columnGap={10}>
            <Button
              leftIcon={<IconChevronLeft />}
              radius="md"
              color="dark.3"
              variant="outline"
              size="md"
              w="40%">
              Quay lại
            </Button>
            <Button
              size="md"
              w="60%"
              variant="filled"
              radius="md"
              color="green.6">
              Sao chép địa chỉ ví
            </Button>
          </Flex>
        </Box>
      </Drawer.Content>
    </Drawer.Root>
  );
};

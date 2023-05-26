import { Drawer, Flex, Title, Text, SegmentedControl,Input, TextInput, Card,Box,createStyles, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image"

const useStyles = createStyles(() => ({
      cardLogo: {
        background: `rgb(17, 24, 39)`,
        borderRadius: "15px",
        padding: "4px 50px",
      },
    }));

export const DrawerWithdraw: React.FC = () => {
      const { classes } = useStyles();
      const [opened, { open, close }] = useDisclosure(false);
      const form = useForm({
            initialValues: {
              address: "",
              code: "",
                },
          });
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
          <Title>Rút USDT (BEP-20)</Title>
          <Text size={20} fw={700} mt={20}>Mạng chuyển</Text>
          <SegmentedControl
            transitionDuration={0}
                                fullWidth
                                styles={(theme) => ({
                                      root: {
                                            background: "white",
                                            columnGap: "10px"
                                      },
                                      indicator: {
                                            boxShadow: "none"
                                      },
                                      label:{
                                            border: "1px solid #E1E1E1",
                                            borderRadius: "10px",
                                            "&[data-active]": {
                                                color: "white"
                                            }
                                      },
                                      control: {
                                          borderRadius: "10px",
                                          background: theme.colors.gray[3],
                                      },
                                      controlActive: {
                                            background: theme.colors.green[6],
                                            borderRadius: "10px",
                                            border: "none",
                                         
                                      }
                                })}
            data={[
              {
                label: (
                  <>
                    <Text>Nội bộ</Text>
                    <Text>Phí: 0 USDT</Text>
                  </>
                ),
                value: "internal",
              },
              {
                label: (
                  <>
                    <Text>Bep-20 (BSC)</Text>
                    <Text>Phí: 0 USDT</Text>
                  </>
                ),
                value: "bep",
              },
            ]}
          />
          <Flex w={"100%"} justify="space-between" mt={20}>
            <Text size={20} fw={700}>Số lượng USDT</Text>
            <Text size={16}>Số dư: 0.00 <span style={{color: "green"}}>TỐI ĐA</span></Text>
            </Flex>
            <Input
            size={"lg"}
      variant="filled"
      placeholder="Nhập số tiền rút"
    />
      <Card bg={"gray.2"} mt={20} radius="md" pos={"relative"} py={40} style={{overflow: "unset"}}>
      <Box pos="absolute" w={71} h={16} className={classes.cardLogo} top={"-3%"}>
              <Image src="/assets/icons/starisa.svg" alt="" fill />
            </Box>
      <TextInput
                          placeholder="Nhập biệt danh"
                          radius={"md"}
                          variant="filled"
                          size={"xl"}
                          label="Biệt danh người nhận"
                          rightSection={<Text color={"green.6"}>DÁN</Text>}
          {...form.getInputProps("address")}
      //     error={form.isDirty("address") ? "" : "Bắt buộc"}
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
         <TextInput
         mt={30}
                          placeholder="Nhập mã 2FA"
                          radius={"md"}
                          variant="filled"
                          size={"xl"}
                          label="Mã 2FA"
                          rightSection={<Text color={"green.6"}>DÁN</Text>}
          {...form.getInputProps("address")}
      //     error={form.isDirty("address") ? "" : "Bắt buộc"}
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />

      </Card>
        </Drawer.Body>
                    <Box pos={"sticky"} bottom={0} bg={"white"} pt={10}>
                  <Text align="center">Số tiền nạp tối thiểu là 5 USDT</Text>
                          <Flex p={20} columnGap={10}>
                                <Button leftIcon={<IconChevronLeft/>} radius="md" color="dark.3" variant="outline" size="md" w="40%">Quay lại</Button>
                                <Button size="md" w="60%" variant="filled" radius="md" color="dark.3">Chuyển USDT</Button>
            </Flex>
        </Box>
      </Drawer.Content>
    </Drawer.Root>
  );
};

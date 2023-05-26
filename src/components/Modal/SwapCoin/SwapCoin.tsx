import {
      Drawer,
      Flex,
      Title,
      Text,
      Box,
      Button,
      ActionIcon,
      Input
    } from "@mantine/core";
    import { IconArrowsLeftRight, IconChevronLeft } from "@tabler/icons-react";
    
    export const SwapCoin: React.FC = () => {
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
              <Flex p={20} align={"center"} justify={"space-between"} mt={50}>
                      <Text size={20} fw={700} align="center" style={{flex:1}}>Từ ví USDT</Text>
                      <Box style={{flex:3}} >
                      <ActionIcon variant="default" mx="auto"><IconArrowsLeftRight size="1rem" /></ActionIcon>
                      </Box>
                      <Text size={20} fw={700} style={{flex:1}} align="center">Đến ví TK Live</Text>
              </Flex>
              <Flex direction="column" align="center">
              <Input
              mt={50}
              styles={()=>({
                  input:{
                        textAlign: "center"
                  }
              })}
      variant="unstyled"
      placeholder="$0"
      size={48}
    />
     <Text align="center"  mt={50}>Số dư: 0.00 <span style={{color: "green"}}>TỐI ĐA</span></Text>
              </Flex>
            </Drawer.Body>
            <Box pos={"sticky"} bottom={0} bg={"white"} pt={10}>
              <Text align="center">Số tiền nạp tối thiểu là 5 USDT</Text>
              <Flex p={20} columnGap={10}>
              <Button leftIcon={<IconChevronLeft/>} radius="md" color="dark.3" variant="outline" size="md" w="40%">Quay lại</Button>
                                <Button size="md" w="60%" variant="filled" radius="md" color="dark.3">Chuyển ngay</Button>
              </Flex>
            </Box>
          </Drawer.Content>
        </Drawer.Root>
      );
    };
    
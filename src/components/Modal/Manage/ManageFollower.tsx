import { Drawer, Flex, Title } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { Wallet } from "../../Wallet/Wallet";


export const ManageFollower: React.FC = () => {

      const [opened, { open, close }] = useDisclosure(false);
return (
      <Drawer.Root opened={true} onClose={close} position="right">
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header m={0} style={{borderBottom: "1px solid #E1E1E1"}}>
            <Flex w={"100%"} justify="space-between">
                              <Title size={20}>Ví giao dịch</Title>
          <Drawer.CloseButton size={30} p={5} radius="100%" right={10} left="auto" pos="relative" />
            </Flex>
        </Drawer.Header>
        <Drawer.Body h="100%">
          <Wallet/>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
)}


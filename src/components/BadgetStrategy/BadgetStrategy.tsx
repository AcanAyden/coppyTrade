import { ActionIcon, Button, Flex, Grid,Menu,Switch,Text, createStyles } from "@mantine/core"
import { IconAlertCircle, IconDots, IconEdit } from "@tabler/icons-react"

export const BadgetStrategy: React.FC = () => {

return (
      <Grid columns={24} >
      {/* Head */}
      <Grid.Col md={7}  bg="gray.1">
        <Text>Tên chiếc lược</Text>
      </Grid.Col>
      <Grid.Col md={7}  bg="gray.1">
        <Text>Phương pháp sử dụng</Text>
      </Grid.Col>
      <Grid.Col md={7}  bg="gray.1">
        <Flex align="center" columnGap={5}>
          <Text>Chế độ an toàn</Text>
          <IconAlertCircle size={"1rem"} />
        </Flex>
      </Grid.Col>
      <Grid.Col md={3} bg="gray.1">
        <Text>Thao tác</Text>
                          </Grid.Col>
                          {/* end head */}
            <Grid.Col md={7}  py={20}>
            <Flex justify="center" direction={"column"} columnGap={5} h="100%">
        <Text size={18}>QLV Dều lệnh 1 <span style={{background: "green", padding: "5px 10px", borderRadius:"15px", color: "white", fontSize: 12 }}>mặc định</span></Text>
                        <Text size={12}>Tạo: 30 thg 09 2022, 08:30:21 CH</Text>
        </Flex>
      </Grid.Col>
            <Grid.Col md={7}  py={20}>
            <Flex align="center" columnGap={5} h="100%">
                  <Text fw={600}>All orders</Text>
        </Flex>
      </Grid.Col>
      <Grid.Col md={7}  py={20}>
        <Flex align="center" columnGap={5} h="100%">
        <Switch color="green.6" />
        </Flex>
      </Grid.Col>
      <Grid.Col md={3}  py={20}>
      <Menu shadow="md" width={150} position="left">
      <Menu.Target>
      <ActionIcon variant="default" radius={"md"}><IconDots size="1rem" /></ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconEdit size={14} />}> <Text size={12}>Xem chiến lược</Text></Menu.Item>
      </Menu.Dropdown>
    </Menu>
      </Grid.Col>
    </Grid>
)}
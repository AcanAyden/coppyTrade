import {
  Flex,
  Group,
  Title,
  UnstyledButton,
  Text,
  Avatar,
} from "@mantine/core";
import { IconWallet } from "@tabler/icons-react";

export const Header: React.FC = () => {
  return (
    <Flex h={60} px="xl" justify={"space-between"}>
      <Title>Chào, User Name!</Title>
      <Group>
        <UnstyledButton px={30}>
          <Group>
            <IconWallet size="2rem"/>
            <div>
              <Text>$0.00</Text>
              <Text size="xs" color="dimmed">
                Ví TK Live
              </Text>
            </div>
          </Group>
        </UnstyledButton>
        <UnstyledButton  style={{borderLeft: "1px solid #ccc"}} px={30}>
          <Group>
            <Avatar size={60} color="green.6" radius={"xl"}>
              BH
            </Avatar>
            <div>
              <Text>Bob Handsome</Text>
              <Text size="xs" color="dimmed">
                bob@handsome.inc
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      </Group>
    </Flex>
  );
};

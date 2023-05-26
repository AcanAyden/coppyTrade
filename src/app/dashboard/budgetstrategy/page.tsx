"use client";
import React from "react";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import {
  Button,
  Flex,
  Title,
  Box,
  Card,
  Group,
      Input,
      Text,
      Pagination
} from "@mantine/core";
import { BadgetStrategy } from "@/components/BadgetStrategy/BadgetStrategy";


const Page = () => {

  return (
    <Box p={50}>
      <Flex justify="space-between">
        <Title>Chiến lược vốn (1)</Title>
        <Group>
          <Button variant="outline" size="lg" radius={"md"} color="dark" bg={"white"}>
            Sao chép gói
          </Button>
          <Button color="green.6" size="lg" radius={"md"}>
            Chiếc lược mới
          </Button>
        </Group>
      </Flex>
      <Card p={30} radius="md" mt={20}>
        <Card.Section style={{ textAlign: "end" }}>
          <Flex justify="flex-end" align="center">
            <Input
              icon={<IconSearch />}
              variant="filled"
              placeholder="Tìm chiếc lược"
              radius="md"
              size="lg"
            />
          </Flex>
        </Card.Section>
        <Card.Section mt={30} withBorder py={20}>
            <BadgetStrategy/>
        </Card.Section>
        <Card.Section mt={30}>
                          <Flex justify="space-between">
                                <Group>
                                      <Text>Hiện kết quả</Text>      <Input component="select" radius={"md"} rightSection={<IconChevronDown size={14} stroke={1.5} />}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
                                </Group>
                                <Pagination total={1} siblings={1} defaultValue={10}  color="green.6" styles={()=>({
                                    control: {
                                          "&:first-of-type":{
                                                border: "none"
                                          },
                                          "&:last-of-type":{
                                                border: "none"
                                          }
                                    }
                                })} />
            </Flex>
        </Card.Section>
      </Card>
    </Box>
  );
};

export default Page;

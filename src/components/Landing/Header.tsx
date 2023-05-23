'use client'
import {Header as HeaderUI, Group, Button,Flex} from "@mantine/core"
import  Image  from 'next/image';

export const Header: React.FC = () => {


      return (
            <HeaderUI height={100}  bg={"transparent"} withBorder={false} px={100} py={20}>
                  <Flex justify={"space-between"} align={"center"} h="100%">
                  <Image src={"/assets/images/logo_light.svg"} alt={""} width={ 182} height={30} />
                  <Group>
                        <Button variant="outline" size="lg" radius={"md"}>Đăng ký</Button>
                        <Button color="green.7" size="lg" radius={"md"}>Đăng nhập</Button>
                  </Group>
                  </Flex>
      </HeaderUI>
)}
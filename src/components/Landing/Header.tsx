'use client'
import {Header as HeaderUI, Group, Button,Flex, createStyles} from "@mantine/core"
import Image from 'next/image';
const useStyle = createStyles((theme) => ({
      hideDesktop: {
            [theme.fn.smallerThan("md")]: {
                  display: "none"
            }
      },
      hideMobile: {
            [theme.fn.largerThan("md")]: {
                  display: "none"
            }
      }
}))

export const Header: React.FC = () => {
      const {classes} = useStyle()
      return (
            <HeaderUI height={100}  bg={"transparent"} withBorder={false} px={{lg:100, base:20}} py={20}>
                  <Flex justify={"space-between"} align={"center"} h="100%">
                  <Image src={"/assets/images/logo_light.svg"} alt={""} width={ 182} height={30} className={classes.hideDesktop} />
                  <Image src={"/assets/images/short_logo_light.svg"} alt={""} width={ 29} height={30} className={classes.hideMobile} />
                  <Group>
                        <Button variant="outline" size="lg" radius={"md"}>Đăng ký</Button>
                        <Button color="green.7" size="lg" radius={"md"}>Đăng nhập</Button>
                  </Group>
                  </Flex>
      </HeaderUI>
)}
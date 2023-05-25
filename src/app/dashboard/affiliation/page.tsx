"use client"
import { Center, Flex,Title,Text,Button,Box } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const Page = () => {
      return (

            <Flex direction="column" w="100%" justify="center" align="center" pos="absolute" top={"50%"} left="50%" style={{ transform: `translate(-50%, -50%)` }}>
                  <Image style={{borderRadius: "25px"}} src={'/assets/images/banner-3.png'} alt={''} width={360} height={297} />
                  <Flex direction="column" w={"50%"}>
                  <Title style={{display: "inline", alignItems: "center", textAlign: "center"}} mt={20}>Mua <span style={{color: "green"}}>Thành viên VIP</span> trên
                  <Center inline style={{borderRadius: "25px"}} bg="dark.5" px={15} mx={5} w={152}>
                              <Image src={'/assets/icons/starisa.svg'} alt={''} width={130} height={24}/>
                        </Center>
                        để nhận hoa hồng giao dịch & VIP
                        </Title>
                  </Flex>
                  <Text mt={20}>Bắt đầu khám phá các cơ hội đầu tư và kiếm lợi nhuận ngay hôm nay.</Text>
                  <Button radius="md" size="xl" mt={20} color="green.6">Mua ngay ($100)</Button>
            </Flex>
  )
}

export default Page

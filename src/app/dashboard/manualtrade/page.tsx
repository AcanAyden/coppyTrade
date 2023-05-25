"use client"
import React from 'react'
import {createStyles,Text,Box,Flex,Title,Button,Grid,Group, Stack} from '@mantine/core'
import Image from "next/image"

const useStyles = createStyles(()=>({
      inner: {
            width:" 100%",
            background: `url(/assets/images/bgtrade.png)`,
            backgroundPosition: "fixed",
            backgroundSize: `100% 573px`,
            backgroundRepeat: "no-repeat",
            paddingTop: "50px"
      },
      lineArrow: {
            '&:after': {
                  content: `" "`,
                  width: "58px",
                  height: "141px",
                  background: `url(/assets/icons/arrow.png)`,
                  position: "absolute",
                  top: "-141px",
                  left : "-58px",

            }
      }
}))

const Page = () => {
      const {classes} = useStyles()
  return (
        <div className={classes.inner}>
               <Flex justify={"center"} align={"center"} direction={"column"}>
      <Flex justify={"center"} align={"center"} direction={"column"} py={50} w={"50%"}>
            <Box style={{background: `rgb(85, 199, 144)`, borderRadius: "15px"}} px={20}><Text color={"white"}>Giao dịch thủ công</Text></Box>
            <Title color={"white"} mt={"xl"}>Tự do quyết định</Title>
            <Title color={"white"}>tín hiện giao dịch</Title>
            <Text color={"white"} mt={"xl"}>Tự quyết định tín hiệu giao dịch của riêng bạn với giao dịch thủ công</Text>
            <Button color={"dark.8"} radius={"md"} size="lg" mt={"xl"}>Kích hoạt giao dịch thủ công</Button>
              </Flex>
              <Box w={516} h={303} pos={"relative"}>
              <Image src="/assets/images/laptop.png" alt="" fill />
                    </Box>
                    <Box mt={150} pos="relative" className={classes.lineArrow}>
                        <Title size={48}>Cách thức để giao dịch thủ công</Title>
                    </Box>
                    <Group w={"100%"} px={30} my={50}> 
      <Grid columns={24} w={"100%"}>
      <Grid.Col lg={8}>
      <Stack align="center">
                                            <Box w={81} h={60} pos={"relative"}> 
                                                  <Image src={"/assets/images/db.png"} alt='' fill/>
                                            </Box>
                                            <Title size={48} align="center">Bước 1</Title>
                                            <Text color={"green.6"} size={24} align="center">Thiết lập giá trị giao dịch</Text>
                                            <Text size={24} align="center">Nhập số tiền đầu tư bạn muốn và Hệ số nhân</Text>
             </Stack>
</Grid.Col >
<Grid.Col lg={8}>
                                      <Stack align="center">
                                            <Box w={223} h={60} pos={"relative"}> 
                                                  <Image src={"/assets/images/shortlong.png"} alt='' fill/>
                                            </Box>
                                            <Title size={48} align="center">Bước 2</Title>
                                            <Text color={"green.6"} size={24} align="center">Chọn tín hiệu giao dịch của bạn</Text>
                                            <Text size={24} align="center">Chọn loại tín hiệu "Long" hoặc "Short"</Text>
             </Stack>
</Grid.Col >
<Grid.Col lg={8}>
<Stack align="center">
                                            <Box w={68} h={60} pos={"relative"}> 
                                                  <Image src={"/assets/images/time.png"} alt='' fill/>
                                            </Box>
                                            <Title size={48} align="center">Bước 3</Title>
                                            <Text color={"green.6"} size={24} align="center">Chờ kết quả</Text>
                                            <Text size={24} align="center">Chờ tới phiên kết quả sau khi kết thúc 30 giây đặt lệnh.</Text>
             </Stack>
</Grid.Col >

      </Grid>
      </Group> 
                    </Flex>
    </div>
  )
}

export default Page

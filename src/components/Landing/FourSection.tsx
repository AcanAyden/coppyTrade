import { Text,Box, Grid, Title, createStyles, Button, Stack } from "@mantine/core"
import Image from "next/image"

const useStyles = createStyles(() => ({
      textDeco: {
            '&:before': {
                  content: `""`,
                  background: `url(/assets/images/line.png) no-repeat`,
                  backgroundSize: "cover",
                  display: "block",
                  position: "absolute",
                  width: "278px",
                  height: "28px",
                  transform: `translateX(-50%)`,
                  left: "28%",
                  top: "41%"
            }
      }

}))


export const FourSection: React.FC = () => {
const {classes} =useStyles()

return (
      <Grid columns={24} mx={0} mb={300}>
            <Grid.Col lg={12} pos={"relative"} pl={0} >
                  <Box w={"100%"} pos={"relative"} h={472} >
                        <Image src={'/assets/images/imgLeft.png'} alt="" fill />
                  </Box>
                        <Box w={240} h={250} pos={"absolute"}bottom={"-12%"} right={"-6%"}>
                        <Image src={'/assets/images/checkmate.png'} alt="" fill/>
                        </Box>
            </Grid.Col>
            <Grid.Col lg={12}>
                  <Stack justify="center" h={"100%"}>
                  <Box pos={"relative"} pl={100} pr={250}>
                        <Box w={279} h={279} pos={"absolute"}top={"-16%"} left={"-16%"}>
                        <Image src={'/assets/images/animal_1.svg'} alt="" fill/>
                        </Box>
                        <Title size={48} color="dark" mb={50}>Đẩy nhanh lợi tức đầu tư của bạn với <span className={classes.textDeco}>QuickinVest</span>  ✨</Title>
                        <Text size={"lg"} color="dark" mb={50}>Bằng cách tận dụng các thuật toán đầu tư nâng cao, Quickinvest tạo điều kiện cho các quyết định đầu tư nhanh hơn, sáng suất hơn, cho phép bạn tối đa hoá lợi nhuận trong khoảng thời gian ngắn.</Text>
                        <Button color="green.6" radius={"md"} size="lg">Bắt đầu đầu tư</Button>
                  </Box>
            </Stack>
            </Grid.Col>
</Grid>
)}
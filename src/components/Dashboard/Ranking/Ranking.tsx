import { Carousel } from "@mantine/carousel";
import { Button, Card, Title,Text,createStyles,Flex } from "@mantine/core";

const useStyles = createStyles(() => ({
      cardAward: {
            position: "relative",
            "&:after": {
                  content: `attr(range)`,
                  position: "absolute",
                  width: "60px",
                  height:"60px",
                  background: `rgb(160, 174, 192)`,
                  borderRadius: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  top: "-13%",
                  left: '50%',
                  transform: `translateX(-50%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "white"
            },
            "&:before": {
                  content: `" "`,
                  width: "100%",
                  height:"100%",
                  position: "absolute",
                  background:` linear-gradient(rgba(160, 174, 192, 0.79) 0%, rgba(238, 239, 242, 0) 83.25%)`,
                  borderRadius: "15px",
                  opacity: 0.2,
                  top: 0,
                  left:0
            },
            
            
      },
      slide:{
            "&:first-of-type": {
                  ".mantine-Card-root": {
                        "&:after": {
                              background: `url(/assets/images/rank-1.png)`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "top",
                              width: "100%",
                              height:"100%",
                        },
                        "&:before": {
                              background: `linear-gradient(rgba(255, 190, 63, 0.8) 0%, rgba(255, 202, 98, 0) 69.51%)`,
                        }
                  }
            },
            "&:nth-of-type(2)": {
                  ".mantine-Card-root": {
                        "&:after": {
                              background: `url(/assets/images/rank-2.png)`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "top",
                              width: "100%",
                              height:"100%",
                        },
                        "&:before": {
                              background: `linear-gradient(rgba(91, 96, 132, 0.8) 0%, rgba(238, 239, 242, 0) 83.25%);`,
                  opacity: 0.2,

                        }
                  }
            },
            "&:nth-of-type(3)": {
                  ".mantine-Card-root": {
                        "&:after": {
                              background: `url(/assets/images/rank-3.png)`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "top",
                              width: "100%",
                              height:"100%",
                        },
                        "&:before": {
                              background: `linear-gradient(rgba(91, 96, 132, 0.8) 0%, rgba(238, 239, 242, 0) 83.25%);`,
                  opacity: 0.2,

                        }
                  }
            }
      }
}));

const mockData = [
  {
    name: "acan Truong",
    point: 275.32,
    total: 7.287,
    isPrivate: true,
  },
  {
    name: "acan Truong",
    point: 275.32,
    total: 7.287,
    isPrivate: true,
  },
  {
    name: "acan Truong",
    point: 275.32,
    total: 7.287,
    isPrivate: true,
  },
  {
    name: "acan Truong",
    point: 275.32,
    total: 7.287,
    isPrivate: true,
  },
];

export const Ranking: React.FC = () => {
  const { classes } = useStyles();

const cardItem = mockData.map((item,index)=>{
      return (<Carousel.Slide pos={"relative"}  className={classes.slide} key={index}>
      <Card p={20} pt={50} radius={"lg"} className={classes.cardAward} style={{overflow: "unset"}} withBorder>
      <Flex direction={"column"} justify="center" align={"center"}>
        <Text mt={"md"} fw={700}>{item.name}</Text>
        <Text mt={"md"}>PnL24h <span style={{color: "green"}}>({item.point})</span></Text>
        <Text mt={"md"} fw={700} size={24}>${item.total}</Text>
      <Button fullWidth mt={"md"} size="lg" radius={"md"}>Gói riêng tư</Button>
      </Flex>
</Card>
</Carousel.Slide>)
})

  return (
    <Carousel
      mt={50}
      height={300}
      slideSize="30.333333%"
      slideGap="md"
      withControls={false}
              align="start"
              styles={() => ({
                    viewport: {
                          overflow: "unset"
                    },
        })}>
           {cardItem}
    </Carousel>
  );
};

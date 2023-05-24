import {
  Grid,
  createStyles,
  Text,
  Box,
  Stack,
  Avatar,
  Flex,
  Group,
  Card,
  Table,
} from "@mantine/core";
import Image from "next/image";

const mockData = [
  {
    name: "acan Truong",
    point: 275.32,
    total: 7.287,
    rank: 1,
  },
  {
    name: "acan Truong",
    point: 275.32,
    total: 7.287,
    rank: 2,
  },
  {
    name: "acan Truong",
    point: 275.32,
    total: 7.287,
    rank: 3,
  },
  {
    name: "acan Truong",
    point: 275.32,
    total: 7.287,
    rank: 4,
  },
];

const useStyles = createStyles(() => ({
  boxImage: {
    top: "-35px",
    left: "50%",
    transform: `translateX(-50%)`,
  },
  groupRank: {
      "&:after": {
            content: `" "`,
            top: 0,
            left: 0,
            position: "absolute",
            height: "100%",
            width: "100%",
          },
    "&:before": {
      content: `" "`,
      top: 0,
      left: 0,
      position: "absolute",
      height: "100%",
      width: "100%",
      background: `linear-gradient(272.63deg, rgb(194, 194, 194) -33.55%, rgb(79, 86, 112) 96.85%)`,
      opacity: 0.1,
      borderRadius: "25px",
    },
  },
  Grid: {
    "&:first-child": {
      ".mantine-Card-root": {
        "&:after": {
          background: `url(/assets/images/crown.png),url(/assets/images/rank-1.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top, bottom",
          width: "100%",
          height:"55%",
          top: "-112px",
        },
        "&:before": {
          background: `linear-gradient(95.4deg, rgba(216, 146, 41, 0.89) 6.95%, rgba(165, 138, 0, 0.176) 100%)`,
          opacity: 0.5,
        },
      },
    },
    "&:nth-child(2)": {
      ".mantine-Card-root": {
        "&:after": {
          background: `url(/assets/images/rank-2.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          width: "100%",
          height: "100%",
        },
        "&:before": {
          background: `linear-gradient(272.63deg, rgb(194, 194, 194) -33.55%, rgb(79, 86, 112) 96.85%)`,
          opacity: 0.1,
        },
      },
    },
    "&:nth-child(3)": {
      ".mantine-Card-root": {
        "&:after": {
          background: `url(/assets/images/rank-3.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          width: "100%",
          height: "100%",
        },
        "&:before": {
          background: `linear-gradient(92.33deg, rgba(7, 200, 140, 0.89) 2.82%, rgba(53, 214, 202, 0.518) 99.42%)`,
          opacity: 0.3,
        },
      },
    },
  },
}));
export const RankTable: React.FC = () => {
  const { classes } = useStyles();

  const rank = mockData.map((item, index) => {
    return (
      <>
        {index < 3 && (
          <Grid.Col
            lg={8}
            className={classes.Grid}
            key={item.name}
            order={item.rank == 1 ? 2 : item.rank == 2 ? 1 : 3}>
            <Flex align="flex-end" h="100%" >
              <Card
                mx={"auto"}
                w={"60%"}
                h={item.rank == 1 ? 400 : item.rank == 2 ? 300 : 200}
                className={classes.groupRank}
                pos={"relative"}
                bg={"transparent"}
                style={{ overflow: "unset" }}>
                <Box
                  className={classes.boxImage}
                  w={"100%"}
                  h={100}
                  pos={"absolute"}>
                  <Avatar
                    src="/assets/images/whalebg.png"
                    alt="it's me"
                    size={70}
                    radius={"xl"}
                    mx={"auto"}
                  />
                </Box>
                <Stack align="center" justify={"center"} w={"100%"} h={"100%"} mt={30}  spacing={5}>
                  <Text mt={"md"} fw={700}>
                    {item.name}
                  </Text>
                  <Text mt={"md"} fw={700} size={24}>
                    {item.point}
                  </Text>
                  <Text mt={"md"}>PnL24h</Text>
                </Stack>
              </Card>
            </Flex>
          </Grid.Col>
        )}
      </>
    );
  });

      
const rows = mockData.map((element) => (
      <tr key={element.name}>
        <td>{element.name}</td>
        <td colSpan={5}>{element.point}</td>
        <td>{element.total}</td>
      </tr>
    ));
  return (
        <>
              <Grid columns={24} mt={100}>{rank}</Grid>
              <Table  verticalSpacing="lg" fontSize="xl">
      <tbody>{rows}</tbody>
    </Table>
        </>
  );
};

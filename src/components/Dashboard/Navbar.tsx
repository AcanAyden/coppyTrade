import {
  Navbar as NavbarUI,
  UnstyledButton,
  createStyles,
  rem,
  Stack,
  Box,
  ActionIcon,
  Button,
  Card,
  Text,
} from "@mantine/core";
import {
  IconHome,
  IconBriefcase,
  IconTargetArrow,
  IconHeartRateMonitor,
  IconUsersGroup,
  IconArrowsShuffle,
  IconBrandUbuntu,
  IconAward,
  IconFolder,
  IconMessageCircle2,
  IconChevronRight,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    //   width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: "flex",
    gap: rem(20),
    alignItems: "center",
    justifyContent: "flex-start",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      color: theme.colors.green[6],
    },
  },

  active: {
    "&, &:hover": {
      color: theme.colors.green[6],
    },
  },
}));

const mockdata = [
  { icon: IconHome, label: "Bảng điều khiển" },
  { icon: IconBriefcase, label: "Danh mục đầu tư" },
  { icon: IconTargetArrow, label: "Chiếc lượt vốn" },
  { icon: IconHeartRateMonitor, label: "Chiến lượt tín hiệu" },
  { icon: IconUsersGroup, label: "Thống kê theo dõi" },
  { icon: IconArrowsShuffle, label: "Giao dịch thủ công" },
  { icon: IconBrandUbuntu, label: "Giới thiệu" },
  { icon: IconAward, label: "Thành viên VIP" },
];

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  show: boolean;
  onClick?(): void;
}

function NavbarLink({
  icon: Icon,
  label,
  active,
  show,
  onClick,
}: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <UnstyledButton
      onClick={onClick}
      className={cx(classes.link, { [classes.active]: active })}>
      <Icon size="3rem" stroke={1.5} />
      {show && label}
    </UnstyledButton>
  );
}

export const Navbar: React.FC = () => {
  const [active, setActive] = useState(2);
  const [showNav, setShowNav] = useState<boolean>(false);
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      show={showNav}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <NavbarUI height={"100%"} width={{ base: showNav ? 300 : 60 }} p="md">
      <Box pos={"relative"}>
        {showNav ? (
          <Image
            src={"/assets/images/logo_light.svg"}
            alt=""
            width={180}
            height={40}
          />
        ) : (
          <Image
            src={"/assets/images/short_logo_light.svg"}
            alt=""
            width={28}
            height={28}
          />
        )}
        <ActionIcon
          radius="xl"
          variant="default"
          pos="absolute"
          right={showNav ? "-11%" : "-111%"}
          top={"10%"}
          onClick={() => setShowNav(!showNav)}>
          <IconChevronRight size="1.125rem" />
        </ActionIcon>
      </Box>
      <NavbarUI.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </NavbarUI.Section>
      <NavbarUI.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconFolder} show={showNav} label="Tài liệu" />
          <NavbarLink
            icon={IconMessageCircle2}
            show={showNav}
            label="Liên hệ trợ giúp"
          />
          {showNav && (
            <Card bg={"dark"} radius={"lg"}>
              <Text color={"white"}>Tài khoản bạn liên kết</Text>
              <Image
                src="/assets/icons/starisa.svg"
                alt=""
                width={100}
                height={27}
              />
            </Card>
          )}
        </Stack>
      </NavbarUI.Section>
    </NavbarUI>
  );
};

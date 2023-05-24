"use client";
import {
  Box,
  Button,
  Flex,
  PasswordInput,
  Checkbox,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useCallback } from "react";

export const Register: React.FC = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      nickName: "",
      inviteCode: "",
      termsOfUse: false,
    },
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value: string) =>
        value.length < 2 ? "password invalid" : null,
    },
  });

  const handleRegister = useCallback(() => {}, []);

  return (
    <Box maw={500} mx="auto">
      <Title size={40}>Đăng nhập tài khoản của bạn</Title>
      <Stack maw={"100%"} mt="lg">
        <TextInput
          placeholder="Email"
          radius={"md"}
          mt="md"
          variant="filled"
          size={"xl"}
          {...form.getInputProps("email")}
          //     error={form.isDirty("email") ? "" : "Bắt buộc"}
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
        <PasswordInput
          radius={"md"}
          mt="md"
          variant="filled"
          placeholder="Mật khẩu"
          {...form.getInputProps("password")}
          //     error={form.isDirty("password") ? "" : "Bắt buộc"}
          size={"xl"}
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
        <TextInput
          placeholder="Biệt danh"
          radius={"md"}
          mt="md"
          variant="filled"
          size={"xl"}
          {...form.getInputProps("nickName")}
          //     error={form.isDirty("email") ? "" : "Bắt buộc"}
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
        <TextInput
          placeholder="ID giới thiệu"
          radius={"md"}
          mt="md"
          variant="filled"
          size={"xl"}
          {...form.getInputProps("inviteCode")}
          //     error={form.isDirty("email") ? "" : "Bắt buộc"}
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
        <Checkbox
          color="green.6"
          radius="xl"
          styles={() => ({
            body: {
              alignItems: "center",
            },
          })}
          label={
            <Text size={16}>
              Bằng cách tiếp tục, bạn đồng ý với{" "}
              <span style={{ color: "green" }}>Các điều khoản và điều lệ</span>
            </Text>
          }
        />
        <Button
          fullWidth
          onClick={handleRegister}
          size={"xl"}
          radius="md"
          color="green.6">
          Đăng ký với email
        </Button>
        <Text size={"xl"}>
          Bạn đã có sẳn tài khoản?
          <Link
            href={"auth/login"}
            style={{ color: "green", textDecoration: "none" }}>
            Đăng nhập
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

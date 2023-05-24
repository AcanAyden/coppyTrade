"use client";
import {
  Box,
  Button,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useCallback } from "react";

export const Login: React.FC = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
        },
        validate: {
              email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value: string ) => (value.length < 2 ? 'password invalid' : null),
          },
  });

  const handleLogin = useCallback(() => {

  }, []);

  return (
    <Box maw={500} mx="auto" >
      <Title size={40}>Đăng nhập tài khoản của bạn</Title>
      <Stack maw={"100%"} mt="lg">
        <TextInput
                          placeholder="Email"
                          radius={"md"}
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
        <Stack align="flex-end">
          <Button variant="subtle" color="green.6" size="md">
            Quên mật khẩu?
          </Button>
        </Stack>
        <Button fullWidth onClick={handleLogin} size={"xl"} radius="md" color="green.6">
          Đăng nhập bằng email
                    </Button>
                    <Text size={"xl"}>Chưa có tài khoản? <Link href={"auth/register"} style={{color:"green", textDecoration: "none"}}>Bắt đầu</Link></Text>
                    <Text size={"xl"}>Không nhận được email xác nhận? <Link href={"auth/register"} style={{color:"green", textDecoration: "none"}}>Yêu cầu mới</Link></Text>
      </Stack>
    </Box>
  );
};

"use client";
import React from "react";
import {
  Button,
  Flex,
  Text,
  TextInput,
  Menu,
  rem,
  Avatar,
  Divider,
} from "@mantine/core";
import {
  IconBookmark,
  IconSearch,
  IconShoppingBag,
  IconArrowsLeftRight,
  IconBell,
  IconLogout,
  IconLogin,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import SubNav from "./subNav";
import Link from "next/link";
interface NavbarProps {}

const Navbar: React.FC = () => {
  return (
    <Flex
      w={"100%"}
      bg={"#f1faee"}
      style={{
        zIndex: "50!important",
      }}
      h={"fit-content"}
      direction={"column"}
      py={10}
      px={{
        base: "2rem",
        sm: "4rem",
        md: "4rem",
        lg: "4rem",
        xl: "4rem",
      }}
      pos={"fixed"}
      top={0}>
      <Flex
        w={"100%"}
        h={"8vh"}
        py={2}
        align={"center"}
        justify={"space-between"}>
        <Flex align={"center"}>
          <Link href={"/"}>
            <Text size='30px' ff={"var(--fontInter)"} fw={900} c={"#003566"}>
              Sh.
            </Text>
          </Link>
        </Flex>
        <TextInput
          w={{
            xs: "15rem",
            sm: "20rem",
            md: "25rem",
            lg: "25rem",
            xl: "25rem",
          }}
          className='searchInput'
          placeholder='Search'
          fz={"18px"}
          fw={600}
          radius={"md"}
          styles={{
            input: {
              background: "#dee2e6",
              color: "#444140",
              border: "2px #dee2e6 solid",
              outline: "none",
              fontFamily: "var(--fontRoboto)",
            },
          }}
          leftSection={<IconSearch size={20} fontWeight={900} color='gray' />}
        />
        <Flex gap={4} justify={"space-between"} align={"center"}>
          <Link href={"/cart"}>
            <Button
              pos={"relative"}
              bg={"transparent"}
              c={"#000000"}
              display={"flex"}
              w={"48px"}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <IconShoppingBag size={25} color='#000000' />
              <Flex
                style={{
                  borderRadius: "100%",
                }}
                pos={"absolute"}
                top={0}
                right={1}
                justify={"center"}
                bg={"#ef2d56"}
                w={22}
                fz={"14px"}
                c='#f1faee'
                p={4}>
                10
              </Flex>
            </Button>
          </Link>
          <Button
            w={"40px"}
            display={{
              base: "none",
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            bg={"transparent"}>
            <IconBookmark size={25} color='#000000' />
          </Button>

          <Menu
            shadow='md'
            width={200}
            transitionProps={{ transition: "rotate-right", duration: 150 }}>
            <Menu.Target>
              <Avatar src='https://bit.ly/dan-abramov' size={"md"} />
            </Menu.Target>

            <Menu.Dropdown style={{ borderRadius: "14px" }}>
              <Menu.Label>Menu</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconUser style={{ width: rem(14), height: rem(14) }} />
                }>
                Profile
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconBell style={{ width: rem(14), height: rem(14) }} />
                }>
                Notifcation
              </Menu.Item>
              <Menu.Item
                display={{
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                }}
                leftSection={
                  <IconBookmark style={{ width: rem(14), height: rem(14) }} />
                }>
                Bookmarks
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconTruckDelivery
                    style={{ width: rem(14), height: rem(14) }}
                  />
                }>
                Track Orders
              </Menu.Item>
              <Menu.Divider />

              <Menu.Item
                leftSection={
                  <IconArrowsLeftRight
                    style={{ width: rem(14), height: rem(14) }}
                  />
                }>
                Register
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconLogin style={{ width: rem(14), height: rem(14) }} />
                }>
                Login
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconLogout style={{ width: rem(14), height: rem(14) }} />
                }>
                LogOut
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Flex>
      <Divider />
      <SubNav />
    </Flex>
  );
};

export default Navbar;

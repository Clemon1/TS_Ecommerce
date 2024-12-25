"use client";
import React from "react";
import NextImage from "next/image";
import {
  Avatar,
  Button,
  Drawer,
  Flex,
  Group,
  Image,
  Menu,
  Text,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLayout, IconUser } from "@tabler/icons-react";
import e1 from "@/assets/e1.jpg";
import e2 from "@/assets/e2.jpg";
import e3 from "@/assets/e3.jpg";
import e4 from "@/assets/e4.jpg";
import e5 from "@/assets/e5.jpg";

const SubNav: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  let name: any = [
    {
      id: 1,
      img: e1,
      name: "Anime",
      sub: ["One Piece", "Naruto", "Claymore", "Kingdom"],
    },
    {
      id: 2,
      img: e2,
      name: "Movies",
      sub: ["Avater", "Marvel"],
    },
    {
      id: 3,
      img: e5,
      name: "Fashion",
      sub: [
        "Avater",
        "Avater",
        "Avater",
        "Avater",
        "Avater",
        "Avater",
        "Avater",
        "Marvel",
        "Marvel",
        "Marvel",
      ],
    },
    {
      id: 4,
      img: e3,
      name: "Electronics",
      sub: [
        "Avater",
        "Avater",
        "Avater",
        "Avater",
        "Avater",
        "Avater",
        "Avater",
        "Marvel",
      ],
    },
  ];

  return (
    <Flex w={"100%"} bg={"#f1faee"} py={3} h={"7vh"} align={"center"}>
      <Drawer.Root
        radius={"md"}
        size={"xs"}
        opened={opened}
        onClose={close}
        style={{
          zIndex: "10000",
        }}>
        <Drawer.Overlay />
        <Drawer.Content bg={"#f1faee"} className='rootDraw'>
          <Drawer.Header bg={"#000814"} px={10}>
            <Drawer.Title c={"#ffffff"} fw={600}>
              Categories
            </Drawer.Title>
            <Drawer.CloseButton bg='#ffffff' radius={"xl"} c={"#000000"} />
          </Drawer.Header>
          <Drawer.Body py={4}>
            <Flex direction={"column"} w={"100%"} gap={5} h={"40vh"}>
              {name.map((test: any) => (
                <Menu
                  key={test.id}
                  shadow='md'
                  width={200}
                  position='right'
                  transitionProps={{ transition: "fade", duration: 150 }}>
                  <Menu.Target>
                    <Flex w={"100%"} h={"8vh"} px={4} gap={8} align={"center"}>
                      <Image
                        src={test.img}
                        component={NextImage}
                        w={"25%"}
                        h={"100%"}
                        alt='ia'
                        fit='contain'
                        radius={"md"}
                      />
                      <Text c={"#000000"}> {test.name}</Text>
                    </Flex>
                  </Menu.Target>

                  <Menu.Dropdown style={{ borderRadius: "14px" }}>
                    <Menu.Label>
                      {test.name} Sub Category {test.id}
                    </Menu.Label>
                    {test.sub.map((tes: any) => (
                      <Menu.Item
                        key={tes}
                        leftSection={
                          <IconUser
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }>
                        {tes}
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>
              ))}
            </Flex>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button
        onClick={open}
        leftSection={<IconLayout />}
        bg={"transparent"}
        styles={{
          root: {},
        }}
        c='#000000'>
        All Items
      </Button>
    </Flex>
  );
};

export default SubNav;

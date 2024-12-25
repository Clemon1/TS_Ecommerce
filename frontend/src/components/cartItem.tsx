"use client";
import { Badge, Box, Button, Flex, Image, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import NextImage, { StaticImageData } from "next/image";
import React from "react";

type cartItemProps = {
  title: string;
  price: number;
  quantity: number;
  image: StaticImageData;
  increaseQuantity: VoidFunction;
  decreaseQuantity: VoidFunction;
  removeItem: VoidFunction;
};
const CartItem: React.FC<cartItemProps> = ({
  title,
  price,
  image,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <Flex
      w={"100%"}
      h={"20vh"}
      py={4}
      gap={25}
      align={"center"}
      justify={"center"}
      bg={"#ffffff"}
      style={{
        borderRadius: 14,
      }}>
      <Image
        w={"30%"}
        h={"100%"}
        objectFit='cover'
        radius={14}
        component={NextImage}
        src={image}
        alt={"kkd"}
      />

      <Flex w={"30%"} h={"100%"} align={"center"} gap={5}>
        <Text fz={16} fw={500} lineClamp={2}>
          {title}
        </Text>
      </Flex>
      <Flex w={"25%"} h={"100%"} gap={4} align={"center"}>
        <Button
          onClick={increaseQuantity}
          fw={500}
          fz={18}
          w={40}
          h={40}
          p={0}
          radius={"50%"}
          c={"#000000"}
          bg={"#dee2e6"}>
          +
        </Button>
        <Badge
          w={70}
          h={35}
          radius={18}
          py={4}
          fz={18}
          fw={500}
          c={"#000000"}
          bg={"#dee2e6"}>
          {quantity}
        </Badge>
        <Button
          onClick={decreaseQuantity}
          fw={500}
          fz={18}
          w={40}
          h={40}
          p={0}
          c={"#000000"}
          radius={"50%"}
          bg={"#dee2e6"}>
          -
        </Button>
      </Flex>
      <Flex h={"100%"} align={"center"} gap={5}>
        <Text fz={18} fw={500}>
          ${price}
        </Text>
      </Flex>
      <Button
        w={"fit-content"}
        bg={"transparent"}
        c='red'
        leftSection={<IconTrash size={18} color='red' />}
        onClick={removeItem}></Button>
    </Flex>
  );
};

export default CartItem;

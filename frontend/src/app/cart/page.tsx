"use client";
import React from "react";

import CartItem from "@/components/cartItem";
import { Box, Flex, Image, Text } from "@mantine/core";
import shoeiMg from "@/assets/TATUM2.png";

const Cart: React.FC = () => {
  return (
    <Box
      bg={"#f1faee"}
      px={{
        base: "1rem",
        xs: "1.1rem",
        sm: "1.5rem",
        md: "4rem",
        lg: "4rem",
        xl: "4rem",
      }}
      w={"100%"}
      h={"fit-content"}
      mt={{ base: "80px", sm: "82px", md: "80px", lg: "85px", xl: "85px" }}
      py={35}>
      <Flex w={"100%"} gap={15}>
        <Box w={"70%"} h={"100vh"}>
          <Flex w={"100%"} justify={"space-between"}>
            <Text fz={20} fw={600}>
              Shopping Cart
            </Text>
            <Text fz={20} fw={600}>
              3 Items
            </Text>
          </Flex>
          <Flex w={"100%"}>
            <CartItem 
              title={"TATUM 1 `AWAY` BASKETBALL SHOES"}
              image={shoeiMg}
              price={20500}
              quantity={10}
              increaseQuantity={() => {}}
              decreaseQuantity={() => {}}
              removeItem={() => {}}
            />
          </Flex>
        </Box>

        <Flex
          w={"30%"}
          h={"75vh"}
          bg={"#dee2e6"}
          style={{
            borderRadius: 14,
          }}></Flex>
      </Flex>
    </Box>
  );
};

export default Cart;

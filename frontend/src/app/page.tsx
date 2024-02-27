"use client";
import { Box, Flex, SimpleGrid, Text } from "@mantine/core";
import styles from "./page.module.css";
import SlideCaurosel from "@/components/caurosel";
import ProductCard from "@/components/productCard";

export default function Home() {
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
      mt={{ base: 94, sm: 111, lg: "111px" }}
      py={4}>
      <Flex
        w={"100%"}
        h={{ base: 250, xs: 250, sm: 300, md: 420, lg: 430, xl: 430 }}
        justify={"center"}>
        <SlideCaurosel />
      </Flex>
      <Box w={"100%"} py={8}>
        <Flex py={4}>
          <Text fz={22} fw={700} c={"#000000"}>
            Active Deals
          </Text>
        </Flex>
        <SimpleGrid
          cols={{ base: 2, sm: 3, lg: 4 }}
          py={2}
          spacing={{ base: 10, sm: "lg" }}
          verticalSpacing={{ base: "md", sm: "xl" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

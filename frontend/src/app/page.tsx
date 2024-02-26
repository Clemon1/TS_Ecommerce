"use client";
import { Box, Flex, Text } from "@mantine/core";
import styles from "./page.module.css";
import SlideCaurosel from "@/components/caurosel";

export default function Home() {
  return (
    <Box bg={"#f1faee"} w={"100%"} h={"100vh"} mt={"111px"} py={4}>
      <Flex
        px={{
          base: "1rem",
          xs: "1.1rem",
          sm: "1.5rem",
          md: "4rem",
          lg: "4rem",
          xl: "4rem",
        }}
        w={"100%"}
        h={430}
        justify={"center"}>
        <SlideCaurosel />
      </Flex>
    </Box>
  );
}

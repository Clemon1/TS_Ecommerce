"use client";
import {
  Badge,
  Box,
  Button,
  Flex,
  Radio,
  Select,
  SimpleGrid,
  Text,
} from "@mantine/core";
import styles from "./page.module.css";
import SlideCaurosel from "@/components/caurosel";
import ProductCard from "@/components/productCard";
import classes from "@/app/page.module.css";
import { IconCaretDownFilled } from "@tabler/icons-react";
import im1 from "@/assets/WATCHULTRA.jpeg.jpg";
import im2 from "@/assets/IPADPRO.jpeg.jpg";
import im3 from "@/assets/S24U2.jpg";
import im4 from "@/assets/MACBOOKPRO.jpeg.jpg";
import im5 from "@/assets/XM5.jpg";
import im6 from "@/assets/TATUM2.png";
import { useState } from "react";
export default function Home() {
  const data: any = [
    {
      id: 1,
      title: "Apple Watch Ultra",
      price: 200,
      url: im1,
      rating: 4,
    },

    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra",
      price: 800,
      url: im3,
      rating: 4,
    },
    {
      id: 3,
      title: "Tatum 1 `Away` Basketball shoes",
      price: 109,
      url: im6,
      rating: 5,
    },
    {
      id: 4,
      title: "Apple M2 Macbook Pro",
      price: 800,
      url: im4,
      rating: 4,
    },
    {
      id: 5,
      title: "Sony WH-1000xm5 headphones",
      price: 179,
      url: im5,
      rating: 3,
    },
    {
      id: 6,
      title: "Apple M1 Ipad Pro",
      price: 400,
      url: im2,
      rating: 4,
    },
  ];
  const cat: any = [
    {
      id: 1,
      name: "Gaming",
    },
    {
      id: 2,
      name: "Fashion",
    },
    {
      id: 3,
      name: "Electronics",
    },
  ];

  const [active, setActive] = useState<[]>([]);

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
        <Flex py={4} w={"100%"} align={"center"} gap={5}>
          <Select
            w={120}
            radius={"lg"}
            c={"#000000"}
            rightSectionPointerEvents='none'
            rightSection={<IconCaretDownFilled size={22} color='#000000' />}
            classNames={{
              input: classes.selectInput,
            }}
            placeholder='Sort By'
            data={["All", "React", "Angular", "Vue", "Svelte"]}
          />
          {cat.map((cate: any) => (
            <>
              <Radio
                key={cate.id}
                label='I cannot be unchecked'
                display={"none"}
                id={cate.id}
              />
              <label
                key={cate.id}
                onClick={() => setActive(cate.id)}
                style={{
                  background: active === cate.id ? "#000000" : "#444140",
                  color: "#ffffff",
                  fontWeight: 500,
                  transition: ".2s linear background",
                  borderRadius: "16px",
                  padding: "6px 16px",
                }}
                htmlFor={cate.id}>
                {cate.name}
              </label>
            </>
          ))}
        </Flex>
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
          {data.map((data: any) => (
            <ProductCard
              key={data.id}
              title={data.title.toUpperCase()}
              price={data.price}
              imgUrl={data.url}
              rating={data.rating}
              product={data.id}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

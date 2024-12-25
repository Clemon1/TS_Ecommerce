"use client";
import {
  Badge,
  Box,
  Button,
  Flex,
  Radio,
  Select,
  SimpleGrid,
  Image,
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
import sale1 from "@/assets/sale1.svg";
import sale2 from "@/assets/sale2.jpg";
import NextImage from "next/image";

import React, { useMemo, useState } from "react";
export default function Home() {
  const [sortedItem, setSort] = useState<any>(null);

  const [active, setActive] = useState<[]>([]);
  const data: any = [
    {
      id: 1,
      title: "Apple Watch Ultra",
      category: "Gaming",
      price: 200,
      url: im1,
      rating: 4,
    },

    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra",
      category: "Electronics",

      price: 800,
      url: im3,
      rating: 4,
    },
    {
      id: 3,
      title: "Tatum 1 `Away` Basketball shoes",
      price: 109,
      url: im6,
      category: "Fashion",

      rating: 5,
    },
    {
      id: 4,
      title: "Apple M2 Macbook Pro",
      price: 800,
      url: im4,
      category: "Electronics",

      rating: 4,
    },
    {
      id: 5,
      title: "Sony WH-1000xm5 headphones",
      price: 179,
      url: im5,
      category: "Electronics",
      rating: 3,
    },
    {
      id: 6,
      title: "Apple M1 Ipad Pro",
      price: 400,
      category: "Electronics",

      url: im2,
      rating: 4,
    },
  ];
  const cat: any = [
    {
      id: 2,
      name: "Gaming",
      value: "Gaming",
    },
    {
      id: 3,
      name: "Fashion",
      value: "Fashion",
    },
    {
      id: 4,
      name: "Electronics",
      value: "Electronics",
    },
  ];
  // const filterData = sortedItem
  //   ? data.filter((a: any) => a.category === sortedItem)
  //   : data;

  const filterData = useMemo(() => {
    return sortedItem
      ? data.filter(
          ({ category }: { category: string }) => category === sortedItem,
        )
      : data;
  }, [sortedItem, data]);
  const resetFilter = () => {
    setSort(""); // Reset sortedItem state to initial value
    setActive([]); // Reset active state if needed
  };
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
        gap={10}
        h={{ base: 250, xs: 250, sm: 300, md: 350, lg: 350, xl: 350 }}
        justify={"center"}>
        <Flex
          w={"70%"}
          display={{
            base: "none",
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          }}
          direction={"column"}
          h={350}
          bg={"#ffffff"}
          gap={10}
          align={"center"}>
          <Image
            component={NextImage}
            src={sale1}
            fit='cover'
            bgp={"center"}
            h={"50%"}
            radius={"md"}
            alt='Image Slide'
          />
          <Image
            component={NextImage}
            src={sale2}
            radius={"md"}
            fit='cover'
            bgp={"center"}
            h={"100%"}
            alt='Image Slide'
          />
        </Flex>
        <SlideCaurosel />
        <Flex
          w={"70%"}
          display={{
            base: "none",
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          }}
          direction={"column"}
          h={350}
          bg={"#ffffff"}
          gap={10}
          align={"center"}>
          <Image
            component={NextImage}
            src={sale1}
            fit='cover'
            bgp={"center"}
            h={"50%"}
            radius={"md"}
            alt='Image Slide'
          />
          <Image
            component={NextImage}
            src={sale2}
            radius={"md"}
            fit='cover'
            bgp={"center"}
            h={"100%"}
            alt='Image Slide'
          />
        </Flex>
      </Flex>
      <Box w={"100%"} py={8}>
        <Flex py={4} w={"100%"} align={"center"} gap={5}>
          <Select
            w={120}
            radius={"lg"}
            key={"value"}
            c={"#000000"}
            rightSectionPointerEvents='none'
            rightSection={<IconCaretDownFilled size={22} color='#000000' />}
            classNames={{
              input: classes.selectInput,
            }}
            placeholder='Sort By'
            data={["All", "React", "Angular", "Vue", "Svelte"]}
          />

          <Flex w='100%' gap={5}>
            <label
              onClick={resetFilter}
              style={{
                background: "#444140",
                color: "#ffffff",
                fontWeight: 500,
                transition: ".2s linear background",
                borderRadius: "16px",
                padding: "6px 16px",
              }}>
              All
            </label>
            {cat.map((cate: any) => (
              <>
                <Radio
                  key={cate.id}
                  label={cate.name}
                  name={cate.name}
                  value={cate.value}
                  checked={sortedItem === cate.value}
                  onChange={(e) => setSort(e.target.value)}
                  display={"none"}
                  id={cate.id}
                />
                <label
                  key={cate.id}
                  onClick={() => {
                    setActive(cate.id);
                    setSort(cate.name);
                  }}
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
          {filterData.lenght <= 0 ? (
            <Flex w={"100%"} h={"60vh"} justify={"center"}>
              <Text fz={22} fw={500}>
                No result found!!
              </Text>
            </Flex>
          ) : (
            filterData.map((data: any) => (
              <ProductCard
                key={data.id}
                title={data.title.toUpperCase()}
                price={data.price}
                imgUrl={data.url}
                rating={data.rating}
                product={data.id}
              />
            ))
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

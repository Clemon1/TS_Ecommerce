"use client";
import React, { useState } from "react";
import { Button, Card, Image, Rating, SimpleGrid, Text } from "@mantine/core";
import NextImage from "next/image";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";

type CardProps = {
  title: string;
  imgUrl: string;
  price: number;
  rating: number;
  product: string;
};
const ProductCard: React.FC<CardProps> = ({
  title,
  imgUrl,
  price,
  rating,
  product,
}) => {
  const [activeProd, setProduct] = useState<any>([]);
  const toggleBookmark = (product: string) => {
    if (activeProd.includes(product)) {
      //this removes the product from favorites
      setProduct(activeProd.filter((p: any) => p !== product));
    } else {
      // this adds the product to favorites
      setProduct([...activeProd, product]);
    }
  };
  return (
    <Card
      shadow='sm'
      radius={"md"}
      bg={"transparent"}
      p={10}
      style={{
        fontFamily: "--var(--fontRoboto)",
      }}>
      <Card.Section pos={"relative"}>
        <Button
          bg={"#f4f4f4"}
          w={37}
          onClick={() => toggleBookmark(product)}
          p={4}
          pos={"absolute"}
          c='#0b5351'
          radius={"xl"}
          top={15}
          right={15}>
          {activeProd.includes(product) ? (
            <IconBookmarkFilled />
          ) : (
            <IconBookmark color={"#000000"} />
          )}
        </Button>
        <Image
          component={NextImage}
          src={imgUrl}
          fit='cover'
          bgp={"center"}
          h={{ base: 200, sm: 300, xl: 300 }}
          alt='Image Slide'
        />
      </Card.Section>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 2, xl: 2 }}
        py={2}
        spacing={"md"}
        verticalSpacing={{ base: 2, sm: 2 }}>
        <Text
          lineClamp={2}
          fw={600}
          ta={"left"}
          pr={18}
          style={{
            textWrap: "wrap",
          }}
          fz={16}
          w={{ base: "100%", sm: "130", lg: "130%" }}>
          {title}
        </Text>
        <Text
          fw={700}
          size='lg'
          ta={{
            base: "left",
            xs: "left",
            sm: "right",
            md: "right",
            lg: "right",
            xl: "right",
          }}>
          ${price}
        </Text>
      </SimpleGrid>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 2, xl: 2 }}
        py={10}
        pos={"relative"}
        spacing={"xl"}
        verticalSpacing={{ base: 8, sm: 8 }}>
        <Rating defaultValue={rating} color='#0b5351' />
        <Button
          bg={"#092327"}
          c='#ffffff'
          w={80}
          p={4}
          mx={{ base: 0, sm: 10, md: 20, lg: 25 }}
          radius={"lg"}>
          Order
        </Button>
      </SimpleGrid>
    </Card>
  );
};

export default ProductCard;

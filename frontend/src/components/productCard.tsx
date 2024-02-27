import { Button, Card, Image, Rating, SimpleGrid, Text } from "@mantine/core";
import NextImage from "next/image";
import React from "react";
import e3 from "@/assets/e3.jpg";
import { IconBookmark } from "@tabler/icons-react";

const ProductCard: React.FC = () => {
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
          bg={"#ffffff"}
          w={37}
          p={4}
          pos={"absolute"}
          radius={"xl"}
          top={15}
          right={15}>
          <IconBookmark color='#000000' />
        </Button>
        <Image
          component={NextImage}
          src={e3}
          fit='cover'
          h={{ base: 200, sm: 300, xl: 300 }}
          alt='Image Slide'
        />
      </Card.Section>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 2, xl: 2 }}
        py={2}
        spacing={"md"}
        verticalSpacing={{ base: 2, sm: 2 }}>
        <Text lineClamp={1} fw={600} ta={"left"} fz={17}>
          Playstation 5 1TB With 2 Controllers
        </Text>
        <Text
          fw={900}
          size='lg'
          ta={{
            base: "left",
            sm: "left",
            md: "right",
            lg: "right",
            xl: "right",
          }}>
          $105.99
        </Text>
      </SimpleGrid>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 2, xl: 2 }}
        py={10}
        pos={"relative"}
        spacing={"xl"}
        verticalSpacing={{ base: 8, sm: 8 }}>
        <Rating defaultValue={2} color='#0b5351' />
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

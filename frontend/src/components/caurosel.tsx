"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import NextImage from "next/image";
import { Image } from "@mantine/core";
import e1 from "@/assets/nike2.jpg";
import e2 from "@/assets/shoesnike.jpg";
import e3 from "@/assets/e3.jpg";
import e4 from "@/assets/e4.jpg";
import e5 from "@/assets/testshoe.jpg";
import classes from "@/app/page.module.css";
const SlideCaurosel: React.FC = () => {
  const images: any = [e1, e2, e3, e4, e5];
  return (
    <Carousel
      height='100%'
      controlSize={50}
      withIndicators
      classNames={{
        control: classes.control,
      }}
      style={{
        zIndex: "4!important",
      }}>
      {images.map((url: any) => (
        <Carousel.Slide key={url}>
          <Image
            key={url}
            fit='cover'
            radius={"md"}
            h={"-webkit-fill-available"}
            component={NextImage}
            alt='images'
            src={url}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default SlideCaurosel;

"use client";
import ItemCaurosel from "@/components/ProductCaurosel";
import {
  Box,
  Button,
  Flex,
  Radio,
  Rating,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { IconBookmarkFilled, IconCactusFilled } from "@tabler/icons-react";
import { useState } from "react";

const Product = () => {
  const size: Array<string> = ["33", "34", "36", "40", "45", "46", "48"];
  const [active, setActive] = useState<unknown>(null);
  const toogleActive = (size: string) => {
    setActive(size);
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
      mt={{ base: "80px", sm: "82px", md: "80px", lg: "85px", xl: "85px" }}
      py={35}>
      <Flex
        w={"100%"}
        gap={20}
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}>
        <Box
          w={{ base: "100%", sm: "100%", md: "60%", lg: "60%", xl: "60%" }}
          h={{ base: "65vh", sm: "70vh", md: "80vh", lg: "85vh", xl: "85vh" }}>
          <ItemCaurosel />
        </Box>
        <Flex
          direction={"column"}
          gap={40}
          w={{ base: "100%", sm: "100%", md: "50%", xl: "50%" }}
          h={"100vh"}>
          <Box w={"100%"}>
            <Text fz={26} fw={700}>
              TATUM 1 `AWAY` BASKETBALL SHOES
            </Text>
            {/* Review */}
            <Flex w={"100%"} gap={10}>
              <Rating size={"md"} color='#0b5351' defaultValue={4} readOnly />
              <Text c={"gray"} fw={600}>
                20 reviews
              </Text>
            </Flex>
          </Box>
          {/* Price */}
          <Box w={"100%"}>
            <Text c={"#000000"} fw={700} fz={26}>
              $415.99
            </Text>
          </Box>
          <Flex w={"100%"} direction={"column"} gap={10}>
            <Box>
              <Text c={"#000000"} fw={600} fz={20}>
                Size
              </Text>
              <SimpleGrid cols={5}>
                {size.map((size: string) => (
                  <>
                    <Radio
                      key={size}
                      label='I cannot be unchecked'
                      display={"none"}
                      id={size}
                    />
                    <Button
                      onClick={() => toogleActive(size)}
                      bg={active === size ? "#444140" : "#ffffff"}
                      c={active === size ? "#ffffff" : "#444140"}
                      p={3}
                      style={{
                        border: "2px solid #444140",
                        transition: ".4s ease-in-out background",
                      }}>
                      {size}
                    </Button>
                  </>
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
          <Flex w={"100%"} gap={10}>
            <Button w={"90%"} bg={"#000814"} c='#ffffff'>
              <IconCactusFilled size={20} color='#000814' />
              Add to Cart
            </Button>
            <Button w={"15%"} bg={"#dee2e6"} c={"#000814"}>
              <IconBookmarkFilled size={20} color='#000814' />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Product;

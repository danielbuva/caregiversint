import { Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/Ai";
import { RiFacebookFill } from "react-icons/Ri";
import { SetStateAction, useEffect, useState } from "react";

const Feet = ({ hide, setHide }: { hide: boolean; setHide: React.Dispatch<SetStateAction<boolean>> }) => {
  const [className, setClassName] = useState<string>("");
  const phone_number = "(818) 402-6006";

  const addClassName = () => {
    if (window.scrollY < 100) {
      setClassName("global-footer-clear");
    } else if (window.scrollY > 100 && window.scrollY! <= 1900) {
      setClassName("global-footer-shadow");
    } else {
      setClassName("global-footer");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", addClassName);
    return () => window.removeEventListener("scroll", addClassName);
  }, [addClassName]);
  return (
    <>
      <VStack
        justify="center"
        p="5"
        direction="column"
        transition="background-color 0.25s ease-in-out"
        css={hide ? { position: "static" } : { position: "sticky" }}
        // bg="#147700"
        className={className}
        w="100vw"
        h="110px"
        bottom="0"
        zIndex={1}
      >
        <Text mb={-3} fontSize="x-large" css={{ fontVariantCaps: "all-petite-caps" }}>
          we are here for you
        </Text>
        <Link href="tel: 818-402-7890" fontSize="xx-large" fontWeight={900}>
          {phone_number}
        </Link>
      </VStack>
      <Flex align="center" direction="column" bg="#147700" w="100vw" mb={0}>
        <Flex justify="space-between" direction={["column", "column", "row"]} w={[50, 600]} mb="10" fontSize="xx-large" align="center">
          <Text fontSize="x-large" fontWeight="bold" display={["none", "none", "flex"]}>
            Services
          </Text>
          <Text fontSize="x-large" fontWeight="bold" display={["none", "none", "flex"]}>
            About
          </Text>
          <Text fontSize="x-large" mr="-40px" display={["none", "none", "flex"]}>
            |
          </Text>
          <HStack alignItems="start" width={200} justify="space-between">
            <Link href="https://www.facebook.com/" target="_blank">
              <RiFacebookFill />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <AiFillInstagram />
            </Link>
            <Link href="https://www.twitter.com/" target="_blank">
              <FaTwitter />
            </Link>
          </HStack>
        </Flex>
        <Text pb={6}>
          © 2022 made by <Text as="span" fontWeight="bold">{`Daniel Valdecantos`}</Text>
        </Text>
      </Flex>
    </>
  );
};

export default Feet;

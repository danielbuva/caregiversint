import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import biglogo from "../assets/biglogo.png";
import { Link } from "react-scroll";

const Company = () => {
  return (
    <Link to="/">
      <HStack>
        <VStack justify="center">
          <Text fontSize="xx-large">CAREGIVERS</Text>
          <Text fontSize="19px" mt={0} style={{ marginTop: "0px !important" }} className="international">
            INTERNATIONAL, Inc.
          </Text>
        </VStack>
        <Image src={biglogo} alt="Big-Logo" boxSize={53} />
      </HStack>
    </Link>
  );
};
const Navigation = () => {
  return (
    <Flex display={["none", "none", "flex"]} w="70%" px="4" fontSize="20" fontWeight="bold" justify="flex-end">
      <Flex w="70%" justify="space-between">
        <Link to="Services">SERVICES</Link>
        <Link to="GetStarted">GET STARTED</Link>
        <Link to="About">ABOUT</Link>
        {/* <Link to="ContactUs">CONTACT US</Link> */}
      </Flex>
    </Flex>
  );
};
const SideNav = ({ isOpen, setOpen }: { isOpen: boolean; setOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <>
      <Hamburger rounded toggled={isOpen} toggle={() => setOpen(!isOpen)} direction="left" hideOutline={true} label="Show menu" />
      <Flex
        css={isOpen ? { right: "0" } : { right: "-764px" }}
        // direction="column"
        justify="space-between"
        align="start"
        h={["100vh"]}
        w="100vw"
        position="fixed"
        bg="#147700"
        top={86}
        transition={["all 0.5s", "all 0.27s"]}
        animation="linear"
        mt="-20px"
        px={3}
        fontSize="xx-large"
      >
        <Flex direction="column" height="60%" justify="space-around">
          {/* <Link to="" onClick={() => {}} style={{ paddingBottom: "15px", paddingTop: "30px" }}>
            GET STARTED
          </Link> */}
          <Link to="Services" onClick={() => {}} style={{ paddingBottom: "15px" }}>
            SERVICES
          </Link>
          <Link to="About" onClick={() => {}} style={{ paddingBottom: "15px" }}>
            ABOUT
          </Link>
          <Link to="" onClick={() => {}} style={{ paddingBottom: "15px" }}>
            CONTACT US
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
const Header = ({ isOpen, setOpen }: { isOpen: boolean; setOpen: React.Dispatch<SetStateAction<boolean>> }) => {

  const [className, setClassName] = useState<string>("");

  const addClassName = () => {
    if (window.scrollY <= 100) {
      setClassName("global-header-clear");
    } else if (window.scrollY >= 100 && window.scrollY! <= 1900) {
      setClassName("global-header-shadow");
    } else {
      setClassName("global-header-shadow");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", addClassName);
    return () => window.removeEventListener("scroll", addClassName);
  }, [addClassName]);
  console.log(scrollY);
  console.log(className);
  return (
    <>
      <Flex
        // bg="#147700"
        w="100vw"
        px={[3]}
        justify={["space-between", "space-between", "space-between", "center"]}
        align="center"
        position="sticky"
        top="0"
        zIndex={1}
        className={className}
      >
        <Flex w="100%" justify="space-between" align="center" maxW="1200px">
          <Company />
          <Navigation />
        </Flex>
        <Flex display={["flex", "flex", "none"]}>
          <SideNav isOpen={isOpen} setOpen={setOpen} />
        </Flex>
      </Flex>
    </>
  );
};

export default Header;

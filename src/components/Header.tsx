import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import biglogo from "../assets/biglogo.png";
import * as Scroll from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Company = ({ setOpen, setHide }: { setOpen: React.Dispatch<SetStateAction<boolean>>; setHide: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <HStack
      onClick={() => {
        setHide(false);
        setOpen(false);
        scroll.scrollToTop({ smooth: true, offset: -25 });
      }}
    >
      <VStack justify="center">
        <Text fontSize="xx-large">CAREGIVERS</Text>
        <Text fontSize="19px" mt={0} style={{ marginTop: "0px !important" }} className="international">
          INTERNATIONAL, Inc.
        </Text>
      </VStack>
      <Image src={biglogo} alt="Big-Logo" boxSize={53} />
    </HStack>
  );
};
const Navigation = ({ hide, setHide }: { hide: boolean; setHide: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <Flex display={["none", "none", "flex"]} w="70%" px="4" fontSize="20" fontWeight="bold" justify="flex-end">
      <Flex w="70%" justify="space-between">
        <Text
          onClick={() => {
            setHide(false);
            Scroll.scroller.scrollTo("Services", { smooth: true, offset: -25 });
          }}
          style={{ paddingBottom: "15px", cursor: "pointer" }}
        >
          SERVICES
        </Text>
        <Text
          onClick={() => {
            setHide(false);
            Scroll.scroller.scrollTo("About", { smooth: true, offset: -25 });
          }}
          style={{ paddingBottom: "15px", cursor: "pointer" }}
        >
          ABOUT
        </Text>
        <Text
          onClick={() => {
            setHide(false);
            Scroll.scroller.scrollTo("StartNow", { smooth: true, offset: -25 });
          }}
          style={{ cursor: "pointer" }}
        >
          GET STARTED
        </Text>
        {/* <Link to="ContactUs">CONTACT US</Link> */}
      </Flex>
    </Flex>
  );
};
const SideNav = ({
  isOpen,
  setOpen,
  setHide,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  setHide: React.Dispatch<SetStateAction<boolean>>;
}) => {
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
          {/* <Link to="" onClick={() => {}} style={{  paddingTop: "30px" }}>
            CONTACT US
          </Link> */}
          <Text
            onClick={() => {
              setHide(false);
              Scroll.scroller.scrollTo("Services", { smooth: true, offset: -25 });
              setOpen(false);
            }}
            style={{ cursor: "pointer" }}
            fontWeight="bold"
          >
            SERVICES
          </Text>
          <Text
            onClick={() => {
              setHide(false);
              Scroll.scroller.scrollTo("About", { smooth: true, offset: -25 });
              setOpen(false);
            }}
            style={{ paddingBottom: "15px", cursor: "pointer" }}
            fontWeight="bold"
          >
            ABOUT
          </Text>
          <Text
            onClick={() => {
              setHide(false);
              Scroll.scroller.scrollTo("StartNow", { smooth: true, offset: -25 });
              setOpen(false);
            }}
            style={{ paddingBottom: "15px", cursor: "pointer" }}
            fontWeight="bold"
          >
            GET STARTED
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
const Header = ({
  isOpen,
  setOpen,
  hide,
  setHide,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  hide: boolean;
  setHide: React.Dispatch<SetStateAction<boolean>>;
}) => {
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
  return (
    <>
      <Flex
        // bg="#147700"
        css={(hide && { backgroundColor: "#147700 !important" }) || (isOpen && { backgroundColor: "#147700 !important" })}
        w="100vw"
        px={3}
        justify={["space-between", "space-between", "space-between", "center"]}
        align="center"
        position="sticky"
        top="0"
        zIndex={1}
        className={className}
      >
        <Flex w="100%" justify="space-between" align="center" maxW="1200px">
          <Company setHide={setHide} setOpen={setOpen} />
          <Navigation hide={hide} setHide={setHide} />
        </Flex>
        <Flex display={["flex", "flex", "none"]}>
          <SideNav isOpen={isOpen} setOpen={setOpen} setHide={setHide} />
        </Flex>
      </Flex>
    </>
  );
};

export default Header;

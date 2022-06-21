// import expertlight from "../assets/expertlight.png";
// import friendlight from "../assets/friendlight.png";
// import homelight from "../assets/homelight.png";
// import hospitallight from "../assets/hospitallight.png";
// import respitelight from "../assets/respitelight.png";
// import memorylight from "../assets/memorylight.png";
// import palliativelight from "../assets/palliativelight.png";
// import inclusivelight from "../assets/inclusivelight.png";
import expert from "../assets/expert.png";
import friend from "../assets/friend.png";
import home from "../assets/home.png";
import hospital from "../assets/hospital.png";
import respite from "../assets/respite.png";
import memory from "../assets/memory.png";
import palliative from "../assets/palliative.png";
import inclusive from "../assets/inclusive.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Text, VStack } from "@chakra-ui/react";

import "swiper/css";

const Card1 = () => {
  return (
    <VStack
      bg="#d4e0bc"
      align="center"
      justify="center"
      borderRadius="20px"
      className="card"
      h={["350px", "350px", "325px"]}
      w={["100%", "100%", "100%", "24%", "100%"]}
      maxWidth={["100%", "100%", "280px"]}
      minW="241px"
    >
      <img src={inclusive} alt="inclusive" style={{ width: "150px" }} />
      {/* <img src={inclusivelight} alt="inclusivelight" /> */}
      <Text fontSize="22px" fontWeight="600" color="black">
        All Inclusive
      </Text>
      <Text color="black">Personal Comprehensive Service</Text>
    </VStack>
  );
};
const Card2 = () => {
  return (
    <VStack
      bg="#d4e0bc"
      align="center"
      justify="center"
      borderRadius="20px"
      className="card"
      h={["350px", "350px", "325px"]}
      w={["100%", "100%", "100%", "24%", "100%"]}
      maxWidth={["100%", "100%", "280px"]}
      minW="241px"
    >
      <img src={memory} alt="memory" style={{ width: "150px" }} />
      {/* <img src={memorylight} alt="memorylight" style={{ width: "150px" }} /> */}
      <Text fontSize="22px" fontWeight="600" color="black">
        Memory Care
      </Text>
      <Text color="black">Specialized Staff and Support</Text>
    </VStack>
  );
};
const Card3 = () => {
  return (
    <VStack
      bg="#d4e0bc"
      align="center"
      justify="center"
      borderRadius="20px"
      className="card"
      h={["350px", "350px", "325px"]}
      w={["100%", "100%", "100%", "24%", "100%"]}
      maxWidth={["100%", "100%", "280px"]}
      minW="241px"
    >
      <img src={friend} alt="friend" style={{ width: "150px" }} />
      {/* <img src={friendlight} alt="friendlight" style={{ width: "150px" }} /> */}
      <Text fontSize="22px" fontWeight="600" color="black">
        Companion Care
      </Text>
      <Text color="black">Social Support</Text>
    </VStack>
  );
};
const Card4 = () => {
  return (
    <VStack
      bg="#d4e0bc"
      align="center"
      justify="center"
      borderRadius="20px"
      className="card"
      h={["350px", "350px", "325px"]}
      w={["100%", "100%", "100%", "24%", "100%"]}
      maxWidth={["100%", "100%", "280px"]}
      minW="241px"
    >
      <img src={respite} alt="respite" style={{ width: "150px" }} />
      {/* <img src={respitelight} alt="respitelight" style={{ width: "150px" }} /> */}
      <Text fontSize="22px" fontWeight="600" color="black">
        Respite Care
      </Text>
      <Text color="black">Short Term Support</Text>
    </VStack>
  );
};
const Card5 = () => {
  return (
    <VStack
      bg="#d4e0bc"
      align="center"
      justify="center"
      borderRadius="20px"
      className="card"
      h={["350px", "350px", "325px"]}
      w={["100%", "100%", "100%", "24%", "100%"]}
      maxWidth={["100%", "100%", "280px"]}
      minW="241px"
    >
      <img src={hospital} alt="hospital" style={{ width: "150px" }} />
      {/* <img src={hospitallight} alt="hospitallight" style={{ width: "150px" }} /> */}
      <Text fontSize="22px" fontWeight="600" color="black">
        Post Hospital Care
      </Text>
      <Text color="black">Safe Service and Support</Text>
    </VStack>
  );
};
const Card6 = () => {
  return (
    <VStack
      bg="#d4e0bc"
      align="center"
      justify="center"
      borderRadius="20px"
      className="card"
      h={["350px", "350px", "325px"]}
      w={["100%", "100%", "100%", "24%", "100%"]}
      maxWidth={["100%", "100%", "280px"]}
      minW="241px"
    >
      <img src={home} alt="home" style={{ width: "150px" }} />
      {/* <img src={homelight} alt="homelight" style={{ width: "150px" }} /> */}
      <Text fontSize="22px" fontWeight="600" color="black">
        In Home Care
      </Text>
      <Text color="black">Fulltime, Professional, Caregiving</Text>
    </VStack>
  );
};
const Card7 = () => {
  return (
    <VStack
      bg="#d4e0bc"
      align="center"
      justify="center"
      borderRadius="20px"
      className="card"
      h={["350px", "350px", "325px"]}
      w={["100%", "100%", "100%", "24%", "100%"]}
      maxWidth={["100%", "100%", "280px"]}
      minW="241px"
    >
      <img src={palliative} alt="palliative" style={{ width: "150px" }} />
      {/* <img src={palliativelight} alt="palliativelight" style={{ width: "150px" }} /> */}
      <Text fontSize="22px" fontWeight="600" color="black">
        Palliative Care
      </Text>
      <Text color="black">Calm, Comfort, Compassion</Text>
    </VStack>
  );
};
const Card8 = () => {
  return (
    <VStack
      bg="#d4e0bc"
      align="center"
      justify="center"
      borderRadius="20px"
      className="card"
      h={["350px", "350px", "325px"]}
      w={["100%", "100%", "100%", "24%", "100%"]}
      maxWidth={["100%", "100%", "280px"]}
      minW="241px"
    >
      <img src={expert} alt="expert" style={{ width: "150px" }} />
      {/* <img src={expertlight} alt="expertlight" style={{ width: "150px" }} /> */}
      <Text fontSize="22px" fontWeight="600" color="black">
        Not Sure
      </Text>
      <Text color="black">Free Expert Consulting</Text>
    </VStack>
  );
};

const Carousele = () => {
  return (
    <>
      <Flex w="90%" h="350px" justify="center" align="center" display={["flex", "flex", "none", "none"]} zIndex={0}>
        <Swiper scrollbar={true} freeMode={true} loop={true} effect="cards" grabCursor={true} spaceBetween={10}>
          <SwiperSlide style={{ color: "black" }}>
            <Card1 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card2 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card3 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card4 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card5 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card6 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card7 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card8 />
          </SwiperSlide>
        </Swiper>
      </Flex>
      <Flex w="100%" h="350px" justify="center" align="center" display={["none", "none", "flex", "none"]} zIndex={0}>
        <Swiper loop={true} effect="cards" grabCursor={true} spaceBetween={10} slidesPerView={3}>
          <SwiperSlide style={{ color: "black" }}>
            <Card1 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card2 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card3 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card4 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card5 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card6 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card7 />
          </SwiperSlide>
          <SwiperSlide style={{ color: "black" }}>
            <Card8 />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
};

const Row_one = () => {
  return (
    <Flex display={["none", "none", "none", "flex", "flex"]} h="340px" w={["100%", "100$", "100%", "100%"]} maxW="1200px" justifyContent="space-around">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </Flex>
  );
};
const Row_two = () => {
  return (
    <Flex display={["none", "none", "none", "flex", "flex"]} h="340px" w={["100%", "100$", "100%", "100%"]} maxW="1200px" justifyContent="space-around">
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
    </Flex>
  );
};
const OurServices = () => {
  return (
    <>
      <Flex
        direction={["column"]}
        bg="white"
        w="100vw"
        h={["100%", "100%", "100%", "100vh","100vh"]}
        minH={["565px"]}
        maxH="1100px"
        align="center"
        zIndex={0}
        justify={["space-evenly"]}
      >
        <Text fontSize="36px" fontWeight="690" color="black">
          Our Services
        </Text>
        <Flex direction="column" align="center" w="100vw" pt="20px">
          <Row_one />
          <Row_two />
        </Flex>
        <Carousele />
      </Flex>
    </>
  );
};
export default OurServices;

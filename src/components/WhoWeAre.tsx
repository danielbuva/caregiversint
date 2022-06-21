import { Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import heartshake from "../assets/heartshake.png";
import expert from "../assets/expert.png";
import car from "../assets/car.png";
import training from "../assets/training.png";
import calendar from "../assets/calendar.png";
import screening from "../assets/screening.png";

const Row1 = () => {
  return (
    <>
      <Flex direction={["column", "column", "row"]} justify={["space-between", "space-between", "center"]} w="100%" h={["200x", "210px"]}>
        <Flex w={["100%", "100%", "369px", "100%"]} h="140px" justify="flex-start">
          <Image src={screening} alt="screening" boxSize="69px" mr="61px" />
          <VStack align="start">
            <Text fontSize="28px" color="black" fontWeight={550}>
              Screening
            </Text>
            <Text color="black" borderBottom="solid 1px lightgray">
              Rigorous hiring process
            </Text>
          </VStack>
        </Flex>
        <Flex w={["100%", "100%", "369px", "100%"]} h="140px" justify="flex-start">
          <Image src={heartshake} alt="heartshake" boxSize="69px" mr={["61px"]} />
          <VStack align="start">
            <Text fontSize="28px" color="black" fontWeight={550}>
              24/7
            </Text>
            <Text color="black" borderBottom="solid 1px lightgray">
              Always there for you
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};
const Row2 = () => {
  return (
    <>
      <Flex
        direction={["column", "column", "row"]}
        justify={["space-between", "space-between", "center"]}
        w="100%"
        h={["200x", "210px"]}
        mt={["-14px", "-14px", "20px"]}
      >
        <Flex w={["100%", "100%", "369px", "100%"]} h="140px" justify="flex-start">
          <Image src={expert} alt="expert" boxSize="69px" mr="61px" />
          <VStack align="start">
            <Text fontSize="28px" color="black" fontWeight={550}>
              Experts
            </Text>
            <Text color="black" borderBottom="solid 1px lightgray">
              Skilled and knowledgable caregivers
            </Text>
          </VStack>
        </Flex>
        <Flex w={["100%", "100%", "369px", "100%"]} h="140px" justify="flex-start">
          <Image src={car} alt="car" boxSize="69px" mr="61px" />
          <VStack align="start">
            <Text fontSize="28px" color="black" fontWeight={550}>
              Travel
            </Text>
            <Text color="black" borderBottom="solid 1px lightgray">
              We will come to you without worry
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};
const Row3 = () => {
  return (
    <>
      <Flex direction={["column", "column", "row"]} justify={["space-between", "space-between", "center"]} w="100%" h={["200x", "210px"]} mt={[0, 0, 8]}>
        <Flex w={["100%", "100%", "369px", "100%"]} h="140px" justify="flex-start">
          <Image src={calendar} alt="calendar" boxSize="69px" mr="61px" />
          <VStack align="start">
            <Text fontSize="28px" color="black" fontWeight={550} m={0} p={0}>
              Consistency
            </Text>
            <Text color="black" borderBottom="solid 1px lightgray">
              Routine care for you and your loved ones
            </Text>
          </VStack>
        </Flex>
        <Flex w={["100%", "100%", "369px", "100%"]} h="140px" justify="flex-start">
          <Image src={training} alt="training" boxSize="69px" mr="61px" />
          <VStack align="start" color="black">
            <Text fontSize="28px" color="black" fontWeight={550}>
              Training
            </Text>
            <Text color="black" borderBottom="solid 1px lightgray">
              Continued training, learning, and managment systems
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};
const Conclusion = () => {
  return (
    <>
      <Flex
        direction={["column"]}
        justify={["flex-start", "space-around", "space-around", "flex-start"]}
        h={["810px", "800px", "450px"]}
        align={["center", "center", "center", "flex-start"]}
        w={["100%", "100%", "100%", 660]}
        // border="solid black"
      >
        <Text fontSize="36px" fontWeight="690" color="black" py={[6, 6]} pt={[0, 0, 20, 0]}>
          Our Company
        </Text>
        {/* <Flex direction="column" display={["flex"]}>
          <Row1 />
          <Row2 />
          <Row3 />
        </Flex>*/}
        <Row1 />
        <Row2 />
        <Row3 />
      </Flex>
    </>
  );
};
const Premise = () => {
  return (
    <VStack
      align={["center", "center", "center", "flex-start"]}
      fontSize="20"
      mb={[6]}
      mt={["0", "0", "9"]}
      color="black"
      maxW="400px"
      w="100%"
      h={["auto", "auto", "auto", "75%"]}
    >
      <Text fontSize="36" fontWeight={690} color="black">
        Who We Are
      </Text>
      <Text color="black" pt="20px">
        We believe in the power of community.
      </Text>
      <Text color="black" borderBottom="solid 1px lightgray">
        We thrive on building relationships.
      </Text>
      <Text color="black" pb="30px">
        We help good people succeed.
      </Text>
      <Button
        h="50px"
        w="260px"
        fontSize="18px"
        borderRadius="23px"
        border="solid 1px"
        transition="all 0.25s ease-out"
        bg="#d4e0bc"
        _active={{ color: "white", backgroundColor: "#396c1a" }}
      >
        Get To Know Us More
      </Button>
    </VStack>
  );
};
const WhoWeAre = () => {
  return (
    <>
      <Flex
        direction={["column", "column", "column", "row"]}
        justify={["space-around", "center"]}
        bg="#d4e0bc"
        w="100vw"
        h={["1300px", "1400px", "910px", "750px"]}
        align="center"
        p={3}
        pb={90}
        pt={10}
      >
        <Premise />
        <Conclusion />
      </Flex>
    </>
  );
};
export default WhoWeAre;

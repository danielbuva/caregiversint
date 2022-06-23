// import personleadingperson from "../../assets/personleadingperson.jpg";
// import personshowingperson from "../../assets/personshowingperson.jpg";
// import womensitting from "../../assets/womensitting.jpg";
// import woman from "../../assets/woman.jpg";
import { Text, VStack } from "@chakra-ui/react";

const Intro = () => {
  return (
    <VStack w="100%" h={["100vh"]} bg="#4c7533" color="white" justify={["flex-start", "center"]} align="center" pt={["75px", "0px"]}>
      <Text fontSize={["60px", "62px"]} fontWeight="700" w={["100vw", "100%", "700px"]} align="center" mt={["0", "-200px"]}>
        Family Driven Caregiving Company
      </Text>
      <Text fontSize="26px" w={["99%", "100%", "669px"]} align="center">
        Tailor-made caregiving services for communities worldwide.
      </Text>
    </VStack>
  );
};

export default Intro;

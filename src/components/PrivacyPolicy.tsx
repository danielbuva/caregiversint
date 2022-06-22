import { Flex, Link, Text } from "@chakra-ui/react";
import { SetStateAction } from "react";

//@todo add states to localstorage
//@todo add close/ back/ accept button

const PrivacyPolicy = ({ hide, setHide }: { hide: boolean; setHide: React.Dispatch<SetStateAction<boolean>> }) => {
  const phone_number = "(818) 402-6006";
  return (
    <Flex direction="column" fontSize={20} h={["100%", "100vh"]} w="100vw" justify="space-around" align="flex-start" bg="white" color="black" px={2} top={0}>
      <Flex direction="column" h={["100%", "50%"]} justify="space-evenly">
        <Text fontSize={40} fontWeight={700} color="black" pb={10}>
          Privacy Policy
        </Text>
        <Flex direction="column" lineHeight={2} color="black" pb={16}>
          <Text fontSize={["26px"]} fontWeight={600} color="black">
            Caregivers International Inc.
          </Text>
          <Text color="black" ml={30}>
            1907 Isabel St.
          </Text>
          <Text color="black" ml={30}>
            Los Angeles, CA 90065
          </Text>
          <Link href="tel: 818-402-7890" ml={30}>
            {phone_number}
          </Link>
        </Flex>
        <Flex direction="column" lineHeight={2} pb={10}>
          <Text fontSize={["22px"]} fontWeight={600} color="black">
            What information do we collect?
          </Text>
          <Text color="black" ml={30}>
            {" "}
            - only the information you provide us through our contact form
          </Text>
        </Flex>
        <Flex direction="column" lineHeight={2} pb={10}>
          <Text fontSize={["22px"]} fontWeight={600} color="black">
            What do we do with your information?
          </Text>
          <Flex direction="column" ml={30}>
            <Text color="black"> - provide personalized services</Text>
            <Text color="black">
              - we use your information to communicate, through communication we will come to an understanding of how best to deliver our services{" "}
            </Text>
            <Text color="black"> - to consider any job applicants ~ for recruitment purposes only</Text>
          </Flex>
        </Flex>
        <Flex direction="column" lineHeight={2}>
          <Text fontSize={["22px"]} fontWeight={600} color="black">
            Do we sell your information?
          </Text>
          <Flex direction="column" ml={30}>
            <Text color="black" mb={10}>
              - we do not sell your information
            </Text>
          </Flex>
          <Text color="black"> You can export, change, or remove your information from our database by sending an email to ...</Text>
          <Text color="black"> identity verification is required to export, change, or remove your information</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PrivacyPolicy;

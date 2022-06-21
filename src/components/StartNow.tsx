import { Box, Button, Checkbox, Flex, FormControl, Input, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

const StartNow = () => {
  const [value, setValue] = useState<String>();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);
  return (
    <>
      <Flex direction={["column", "column", "column", "row"]} bg="#147700" w="100vw" justify="center" align="center" p={3} h={["475px","600px",]} maxH={["600px"]}>
        <VStack align={["center", "start"]} fontSize="20" mr={30} mb={[6]}  >
          <Text fontSize="36">Start Now</Text>
          <Text display={["none", "none", "none", "flex"]}>Is there a challenge your needs help solving?</Text>
          <Text display={["none", "none", "none", "flex"]}>We'd love to discuss it.</Text>
        </VStack>
        <Box w={["100%", "100%", "100%", 620]}  >
          <FormControl isRequired >
            <Flex justify="space-between" direction={["column", "column", "row"]}>
              <Input
                type="name"
                autoComplete="given-name"
                placeholder="First Name*"
                _placeholder={{ color: "white" }}
                variant="flushed"
                focusBorderColor="none"
                pr="10"
                w={["100%", "100%", "49%"]}
              />
              <Input
                type="name"
                autoComplete="family-name"
                placeholder="Last Name*"
                _placeholder={{ color: "white" }}
                variant="flushed"
                focusBorderColor="none"
                w={["100%", "100%", "49%"]}
              />
            </Flex>
            <Flex justify="space-between" direction={["column", "column", "row"]}>
              <Input
                type="email"
                autoComplete="email"
                placeholder="Email*"
                _placeholder={{ color: "white" }}
                variant="flushed"
                focusBorderColor="none"
                w={["100%", "100%", "49%"]}
              />
              <Input
                type="tel"
                autoComplete="tel-national"
                placeholder="Phone*"
                _placeholder={{ color: "white" }}
                variant="flushed"
                focusBorderColor="none"
                w={["100%", "100%", "49%"]}
              />
            </Flex>
          </FormControl>
          <textarea
            ref={textareaRef}
            onChange={textAreaChange}
            placeholder="Let us know all your needs"
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "#147700",
              color: "white",
              resize: "none",
              width: "100%",
              borderBottom: "solid white 1px",
              overflow: "hidden",
              minHeight: "42px",
              paddingTop: "10px",
            }}
          />
          <Flex display={["flex", "flex", "none", "none"]} justify="center" align="center" w="100%" mt={3}>
            <Checkbox type="checkbox" id="privacy-policy" pr={4} />
            <Text>
              I accept your &nbsp;
              <Text as="span" fontWeight="bold">
                Privacy Policy
              </Text>
            </Text>
          </Flex>
          <Flex justify={["center", "center", "center", "space-around"]} p="1" mt="6">
            <Button w={["100%", "80%", 269, 269]} borderRadius="20" bg="#649AB6">
              Send
            </Button>
            <Flex display={["none", "none", "flex", "flex"]} justify="space-between" alignItems="center" w="230px" ml="10">
              <Checkbox type="checkbox" id="privacy-policy" />
              <Text>
                I accept your &nbsp;
                <Text as="span" fontWeight="bold">
                  Privacy Policy
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default StartNow;

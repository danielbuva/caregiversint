import { Box, Button, Checkbox, Flex, FormControl, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect, useRef, MutableRefObject, SetStateAction } from "react";
import emailjs from "@emailjs/browser";
import { Element, animateScroll as scroll } from "react-scroll";

const StartNow = ({ hide, setHide }: { hide: boolean; setHide: React.Dispatch<SetStateAction<boolean>> }) => {
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

  const publicKey = "Pvl82pxxPFa_eOKf4";
  const serviceId = "service_j3z7etj";
  const templateId = "template_jgqwo5u";

  const [preference, setPreference] = useState(""); // @todo add dropdown menu to select contact preference
  //@ts-ignore
  const form = useRef<MutableRefObject | undefined>();
  const sendEmail = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Element name="StartNow">
      <form ref={form} onSubmit={sendEmail}>
        <Flex direction={["column", "column", "column", "row"]} bg="#147700" w="100vw" justify="center" align="center" p={3} h={["475px", "600px"]} maxH={["600px"]}>
          <VStack align={["center", "start"]} fontSize="20" mr={30} mb={[6]}>
            <Text fontSize="36">Start Now</Text>
            <Text display={["none", "none", "none", "flex"]}>Is there a challenge your needs help solving?</Text>
            <Text display={["none", "none", "none", "flex"]}>We'd love to discuss it.</Text>
          </VStack>
          <Box w={["100%", "100%", "100%", 620]}>
            <FormControl isRequired>
              <Flex justify="space-between" direction={["column", "column", "row"]}>
                <Input
                  type="fname"
                  autoComplete="given-name"
                  placeholder="First Name*"
                  _placeholder={{ color: "white" }}
                  variant="flushed"
                  focusBorderColor="none"
                  pr="10"
                  w={["100%", "100%", "49%"]}
                  name="givenName"
                />
                <Input
                  type="lname"
                  autoComplete="family-name"
                  placeholder="Last Name*"
                  _placeholder={{ color: "white" }}
                  variant="flushed"
                  focusBorderColor="none"
                  w={["100%", "100%", "49%"]}
                  name="familyName"
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
                  name="email"
                />
                <Input
                  type="tel"
                  autoComplete="tel-national"
                  placeholder="Phone*"
                  _placeholder={{ color: "white" }}
                  variant="flushed"
                  focusBorderColor="none"
                  w={["100%", "100%", "49%"]}
                  name="phoneNumber"
                />
              </Flex>

              <textarea //@todo add character limit and indicator
                ref={textareaRef}
                name="message"
                onChange={() => {
                  textAreaChange;
                }}
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
                  <Text>
                    I accept your &nbsp;
                    <Text
                      as="span"
                      fontWeight="bold"
                      onClick={() => {
                        setHide(true);
                        scroll.scrollToTop({ duration: 0, offset: -25 });
                      }}
                      cursor="pointer"
                    >
                      Privacy Policy
                    </Text>
                  </Text>
                </Text>
              </Flex>
              <Flex justify={["center", "center", "center", "space-around"]} p="1" mt="6">
                <Button type="submit" value="Send" w={["100%", "80%", 269, 269]} borderRadius="20" bg="#649AB6">
                  Send
                </Button>
                <Flex display={["none", "none", "flex", "flex"]} justify="space-between" alignItems="center" w="230px" ml="10">
                  <Checkbox type="checkbox" id="privacy-policy" />
                  <Text>
                    <Text>
                      I accept your &nbsp;
                      <Text
                        as="span"
                        fontWeight="bold"
                        onClick={() => {
                          setHide(true);
                          scroll.scrollToTop({ duration: 0, offset: -25 });
                        }}
                        cursor="pointer"
                      >
                        Privacy Policy
                      </Text>
                    </Text>
                  </Text>
                </Flex>
              </Flex>
            </FormControl>
          </Box>
        </Flex>
      </form>
    </Element>
  );
};

export default StartNow;

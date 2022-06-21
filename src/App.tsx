import OurServices from "./components/OurServices";
import StartNow from "./components/StartNow";
import WhoWeAre from "./components/WhoWeAre";
import Header from "./components/Header";
import Feet from "./components/Footer";
import Intro from "./components/Intro";
import { useState } from "react";
import "./App.css";
import { Flex, Link, Text, VStack } from "@chakra-ui/react";

function App() {
  const phone_number = "(818) 402-6006";
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Intro />
      <OurServices />
      <WhoWeAre />
      <StartNow />

      <Feet />
    </>
  );
}

export default App;

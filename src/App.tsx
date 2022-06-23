import PrivacyPolicy from "./components/PrivacyPolicy";
import OurServices from "./components/OurServices";
import StartNow from "./components/StartNow";
import WhoWeAre from "./components/WhoWeAre";
import Header from "./components/Header";
import { Flex } from "@chakra-ui/react";
import Feet from "./components/Footer";
import Intro from "./components/Intro";
import { useState } from "react";
import "./App.css";

function App() {
  const [hideFooter, setHideFooter] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setOpen={setOpen} hide={hideFooter} setHide={setHideFooter} />
      <Flex direction="column" justify="flex-start" css={isOpen ? { opacity: "0" } : { opacity: "1" }} transition="opacity 0.4s linear">
        {!hideFooter && (
          <>
            <Intro />
            <OurServices />
            <WhoWeAre />
            <StartNow hide={hideFooter} setHide={setHideFooter} />
            <Feet hide={hideFooter} setHide={setHideFooter} />
          </>
        )}
        {hideFooter && <PrivacyPolicy hide={hideFooter} setHide={setHideFooter} />}
      </Flex>
    </>
  );
}

export default App;

import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";
import Home from "./Home";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import {
    Route,
  } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function App() {
  return (
      <Box>
      <NavBar />
      <SocialLinks />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <AboutMe />
        </Route>
        <Route exact path="/projects">
            <Projects/>
        </Route>
        </Box>
  );
}

export default App;

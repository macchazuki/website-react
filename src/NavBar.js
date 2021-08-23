import { Flex, Box, Button, Image } from "@chakra-ui/react";
import myLogo from "./images/profile-circle.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box>
      <Link to="/">
        <Image position="fixed" boxSize="150px" src={myLogo} />
      </Link>

      <Flex position="fixed" right="0">
        <Link to="/about">
          <Button size="lg" bg="transparent" mr="4">
            About Me
          </Button>
        </Link>
        <Link to="/projects">
          <Button size="lg" bg="transparent" mr="4">
            Projects
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default NavBar;

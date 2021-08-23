import { Heading, Box } from "@chakra-ui/react";

function AboutMe() {
  return (
    <Box position="fixed" width="100%" top="40%">
      <Heading margin="auto" width="50%" size="md" textAlign="center">
        Hello! My name is Julian and I come from the island of Singapore! Some
        of my hobbies include bouldering, playing games, and learning Japanese.I
        also enjoy solving problems through coding. My interest in coding began
        in university, where I took a foundational course in programming. Since
        then, I have dabbled in various technologies ranging from fullstack
        applications to IoT devices to Unity game development.
      </Heading>
    </Box>
  );
}

export default AboutMe;

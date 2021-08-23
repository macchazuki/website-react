import { Heading, Button, Box, Image, Text, Link, Center } from "@chakra-ui/react";
import myFoodieClique from "./images/my-foodie-clique-square.png";

function Projects() {
  return (
    <Center position="fixed" width="100%" top="10%">
      <Box width="50%" textAlign="center">
        <Link href="https://myfoodieclique.firebaseapp.com/" isExternal>
          <Image margin="auto" width="500px" src={myFoodieClique} />
        </Link>
        <Heading> My Foodie Clique </Heading>
        <Text textAlign="center">
          MyFoodieClique is a meal-planning app designed to help groups decide
          where, when and what to eat for their next meal meet-up.
        </Text>
        <Link
        href="https://github.com/macchazuki/MyFoodieClique"
          isExternal
        >
          <Button bg="transparent">
          View source
          </Button>
        </Link>
      </Box>
    </Center>
  );
}

export default Projects;

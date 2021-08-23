import {
    Flex,
    Box,
    Button,
    Image,
} from "@chakra-ui/react"
import myLogo from "./images/profile-circle.png"; // with import


function NavBar() {
    return (
        <Box>
            <Image position="fixed" boxSize="150px"
                src={myLogo}/>
            <Flex position="fixed" right="0">
                <Button size="lg" bg="transparent" mr="4">
                    About Me</Button>
                <Button size="lg" bg="transparent" mr="4">
                    Projects</Button>
            </Flex>
        </Box>

    );
}

export default NavBar;

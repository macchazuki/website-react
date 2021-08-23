import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react"

function BaseBox() {
    return (
        <Box position="fixed" width="100%" top="40%" textAlign="center">
            <Heading>
            Hello, welcome to my website!
            </Heading>

        </Box>

    );
}
export default BaseBox
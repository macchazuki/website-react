import {Flex, Image, Link} from "@chakra-ui/react";
import linkedInLogo from "./images/LI-In-Bug-bw.png";
import gitHubLogo from "./images/GitHub-Mark-Light-120px-plus.png";
import emailLogo from "./images/email-logo.png";

function SocialLinks() {
    return (
        <Flex position="fixed" bottom='0' direction="column-reverse">
            <Link width="50px" href="mailto:julianlim96@gmail.com" isExternal>
                <Image margin="8"
                    src={emailLogo}/>
            </Link>
            <Link width="50px" href="https://github.com/macchazuki" isExternal>
                <Image margin="8"
                    src={gitHubLogo}/>
            </Link>
            <Link width="50px" href="https://www.linkedin.com/in/julianlim96/" isExternal>
                <Image margin="8"
                    src={linkedInLogo}/>
            </Link>

        </Flex>
    );
}

export default SocialLinks;

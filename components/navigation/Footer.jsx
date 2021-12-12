import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" p={4} opacity={0.4}>
            <Text fontSize={14} textAlign="center">
                {new Date().getFullYear()} &copy; Jeremy LP. All Rights Reserved.
            </Text>
        </Box>
    );
};

export default Footer;

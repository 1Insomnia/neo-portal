import NavLink from './NavLink';

import { Box, Stack, Text } from '@chakra-ui/react';

const Header = ({ path }) => {
    return (
        <Box p={4}>
            <Stack direction="row" align="center">
                <Text fontWeight="bold" letterSpacing="-0.05em" mr={4}>
                    NeoWs Portal
                </Text>
                <NavLink href="/" path={path}>
                    Home
                </NavLink>
                <NavLink href="/lookup" path={path}>
                    Lookup
                </NavLink>
                <NavLink href="/feed" path={path}>
                    Feed
                </NavLink>
            </Stack>
        </Box>
    );
};

export default Header;

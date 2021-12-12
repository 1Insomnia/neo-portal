import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: props => ({
        'html, body': {
            color: 'light',
            bg: 'dark',
        },
    }),
};

const fonts = {
    heading: "'Source Sans Pro'",
    body: "'Source Sans Pro'",
};

const colors = {
    dark: '#202023',
    light: '#fafafa',
};

const theme = extendTheme({ styles, fonts, colors });

export default theme;

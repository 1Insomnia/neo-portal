import '@fontsource/source-sans-pro';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../lib/theme';

import Layout from '../layouts/Main';

const MyApp = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout path={router.asPath}>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
};

export default MyApp;

import { Box, Container } from '@chakra-ui/react';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';

const Main = ({ children, path }) => {
    return (
        <Container maxW="container.md">
            <Header path={path} />
            <Box as="main">{children}</Box>
            <Footer />
        </Container>
    );
};

export default Main;

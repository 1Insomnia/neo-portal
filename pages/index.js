import Head from 'next/head';
import { fetchBrowse } from '../lib/fetchData';
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

const Home = ({ data, error }) => {
    const { near_earth_objects } = data;
    console.log(near_earth_objects);

    return (
        <>
            <Head>
                <title>NeoWs Portal</title>
                <meta name="description" content="NeoWs Portal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box py={4} as="section">
                {!error && (
                    <Table>
                        <TableCaption placement="top">Near Earth Objects</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>ABS Mag</Th>
                                <Th>Hazard</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {near_earth_objects.map(item => (
                                <Tr key={item.id}>
                                    <Td>{item.name}</Td>
                                    <Td>{item.absolute_magnitude_h}</Td>
                                    <Td>{item.is_potentially_hazardous_asteroid ? 'true' : 'false'}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                )}
            </Box>
        </>
    );
};

export const getServerSideProps = async () => {
    const { data, error } = await fetchBrowse();
    return {
        props: {
            data: data,
            error: error,
        },
    };
};

export default Home;

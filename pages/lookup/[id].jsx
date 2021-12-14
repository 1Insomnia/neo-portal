import { fetchLookup } from '../../lib/fetchData';
import { Box, Heading } from '@chakra-ui/react';
import BaseProps from '../../components/data/BaseProps';

const LookupId = ({ baseProps, error, close_approach_data, orbital_data }) => {
    console.log(orbital_data);
    return (
        <Box as="section">
            <Heading as="h1" mb={4} color="teal" fontSize="4xl">
                Lookup
            </Heading>
            {!error ? <BaseProps {...baseProps} /> : <Box color="red">{error}</Box>}
        </Box>
    );
};

export const getServerSideProps = async ({ query }) => {
    const { id } = query;
    const { data, error } = await fetchLookup(id);
    const {
        name,
        absolute_magnitude_h,
        designation,
        estimated_diameter,
        is_potentially_hazardous_asteroid,
        is_sentry_object,
        close_approach_data,
        orbital_data,
    } = data;

    return {
        props: {
            data: data,
            error: error,
            baseProps: {
                name: name,
                absolute_magnitude_h: absolute_magnitude_h,
                designation: designation,
                estimated_diameter: estimated_diameter,
                is_potentially_hazardous_asteroid: is_potentially_hazardous_asteroid,
                is_sentry_object: is_sentry_object,
            },
            close_approach_data: close_approach_data,
            orbital_data: orbital_data,
        },
    };
};

export default LookupId;

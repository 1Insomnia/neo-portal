import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';

const BaseProps = ({
    name,
    absolute_magnitude_h,
    designation,
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    is_sentry_object,
}) => {
    return (
        <Box>
            <Box>
                <Text>Name: {name}</Text>
            </Box>
            <Box>
                <Text>Designation: {designation}</Text>
            </Box>
            <Box>
                <Text>Abs Mag: {absolute_magnitude_h}</Text>
            </Box>
            <Box>
                <Text>Estimated Diameter</Text>
                <Text>Min: {estimated_diameter.kilometers.estimated_diameter_min} km</Text>
                <Text>Max: {estimated_diameter.kilometers.estimated_diameter_max} km</Text>
            </Box>
            <Box>
                <Text>Hazard : {is_potentially_hazardous_asteroid.toString()}</Text>
            </Box>
            <Box>
                <Text>Sentry: {is_sentry_object.toString()}</Text>
            </Box>
        </Box>
    );
};

BaseProps.propTypes = {
    name: PropTypes.string,
    absolute_magnitude_h: PropTypes.number,
    designation: PropTypes.string,
    estimated_diamater: PropTypes.object,
    is_potentially_hazardous_asteroid: PropTypes.bool,
    is_sentry_object: PropTypes.bool,
};

export default BaseProps;

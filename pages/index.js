import { useMemo } from 'react';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import { fetchBrowse } from '../lib/fetchData';
import DataTable from '../components/data/DataTable';

const Home = ({ data, error }) => {
    console.log(data);

    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Designation',
                accessor: 'designation',
            },
            {
                Header: 'Abs Magnitude',
                accessor: 'absMag',
            },
            {
                Header: 'Hazard',
                accessor: 'hazard',
            },
        ],
        []
    );

    return (
        <>
            <Head>
                <title>NeoWs Portal</title>
                <meta name="description" content="NeoWs Portal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Heading as="h1">Browse</Heading>
            <DataTable columns={columns} data={data} />
        </>
    );
};

export const getServerSideProps = async () => {
    const {
        data: { near_earth_objects },
        error,
    } = await fetchBrowse(0);

    const dataSet = near_earth_objects.map(item => ({
        id: item.id,
        name: item.name_limited,
        designation: item.designation,
        absMag: item.absolute_magnitude_h,
        hazard: item.is_potentially_hazardous_asteroid.toString(),
    }));

    return {
        props: {
            data: dataSet,
            error: error,
        },
    };
};

export default Home;

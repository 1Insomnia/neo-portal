import { useMemo, useEffect, useReducer } from 'react';
import Head from 'next/head';
import { Flex, Heading, Link } from '@chakra-ui/react';
import { fetchBrowse } from '../lib/fetchData';
import DataTable from '../components/data/DataTable';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const reducer = (state, action) => {
    switch (action.type) {
        case 'PREVIOUS_PAGE':
            return state.page === 0 ? { page: 0 } : { page: state.page - 1 };
        case 'NEXT_PAGE':
            return { page: state.page + 1 };
        default:
            throw new Error();
    }
};

const Home = ({ data, error, page }) => {
    const router = useRouter();
    const [state, dispatch] = useReducer(reducer, { page: page });

    useEffect(() => {
        router.push({
            pathname: '/',
            query: {
                page: state.page,
            },
        });
    }, [state.page]);

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

    const handlePreviousPage = e => {
        dispatch({ type: 'PREVIOUS_PAGE' });
    };

    const handleNextPage = e => {
        dispatch({ type: 'NEXT_PAGE' });
    };

    return (
        <>
            <Head>
                <title>NeoWs Portal</title>
                <meta name="description" content="NeoWs Portal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Heading as="h1">Browse</Heading>
            <DataTable columns={columns} data={data} />
            <Flex align="center" justify="space-between" mt={4}>
                <NextLink href="/">
                    <Link onClick={handlePreviousPage}>
                        <ChevronLeftIcon />
                        Prev Page
                    </Link>
                </NextLink>
                <NextLink href="/">
                    <Link onClick={handleNextPage}>Next Page</Link>
                </NextLink>
            </Flex>
        </>
    );
};

export const getServerSideProps = async ({ query }) => {
    const page = query.page ? parseInt(query.page) : 0;

    const {
        data: { near_earth_objects },
        error,
    } = await fetchBrowse(page);

    const dataSet = near_earth_objects.map(item => ({
        id: item.id,
        name: item.name,
        designation: item.designation,
        absMag: item.absolute_magnitude_h,
        hazard: item.is_potentially_hazardous_asteroid.toString(),
    }));

    return {
        props: {
            data: dataSet,
            error: error,
            page: page,
        },
    };
};

export default Home;

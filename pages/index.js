import Head from 'next/head';
import { fetchFeed } from '../lib/fetchData';

const Home = ({ data, error }) => {
    return (
        <>
            <Head>
                <title>NeoWs Portal</title>
                <meta name="description" content="NeoWs Portal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
};

export const getServerSideProps = async () => {
    const { data, error } = await fetchFeed('start_date=2015-09-07&end_date=2015-09-08');
    return {
        props: {
            data: data,
            error: error,
        },
    };
};

export default Home;

import Layout from '../../components/Layout'
import Head from 'next/head'

export default function ZukunftshaltungPage() {
    return(
        <Layout>
            <Head>
                <title>Zukunft | Human Potential Is Big</title>
            </Head>

            <div className='w-1/3 h-auto mx-auto rounded-3xl overflow-hidden'>
                <img src="../images/zugang_zu_zukunft.jpeg" alt="image_missing" className="object-contain w-full h-full" />
            </div>
        </Layout>
    );
}
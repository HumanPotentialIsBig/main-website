import Layout from '../../components/Layout'
import Head from 'next/head'

export default function PossibleFutureVisionPage() {
    return(
        <Layout>
            <Head>
                <title>Vision | Human Potential Is Big</title>
            </Head>

            <div className='w-1/3 h-auto mx-auto rounded-3xl overflow-hidden'>
                <img src="../images/zukunftsvorstellung.jpeg" alt="image_missing" className="object-contain w-full h-full" />
            </div>
        </Layout>
    );
}
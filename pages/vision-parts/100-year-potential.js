import Layout from '../../components/Layout'
import Head from 'next/head'

export default function CienYearPotentialPage() {
    return(
        <Layout>
            <Head>
                <title>100 Year Potential | Human Potential Is Big</title>
            </Head>

            <div className='w-1/3 h-auto mx-auto rounded-3xl overflow-hidden border-2'>
                <img src="../images/das_potenzial_von_100_jahren.jpeg" alt="image_missing" className="object-contain w-full h-full" />
            </div>
        </Layout>
    );
}
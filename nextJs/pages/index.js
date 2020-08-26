import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
    <Layout>

        <div>
            <h1>
                Hello, Next.js
            </h1>
            <h2>
                <Link href="/about">
                    <a style={{background: 'black',color: 'white'}} >소개</a>
                </Link>
            </h2>
        </div>
    </Layout>
)

export default Index;
import Link from "next/Link";
import Layout from "../components/Layout";
import Head from "next/head";

const Index = () => (
    <Layout>
        <Head>
            <title>
                Index Page
            </title>
        </Head>
        <h1>
            Hello, NextJs
        </h1>
        <h2>
            <Link href="/about">
                <a style={{background: 'black', color: 'white'}}>Intro</a>
            </Link>
        </h2>
    </Layout>
);

export default Index;
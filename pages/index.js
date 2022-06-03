import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>welcome to my corner of the interwebs, my name is terps and I will be your guide today.</p>
        </section>
    </Layout>
  );
}
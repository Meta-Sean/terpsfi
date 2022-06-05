import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from '../components/RainbowHighlight';



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>I was told everyone needs a website, so here we are, welcome to my corner of the interwebs, my name is terps and I will be your guide today.</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
          <RoughNotationGroup show={true}>
            <RainbowHighlight color={colors[0]}>
            <p>god damn morty, they said show off them skills</p>
            </RainbowHighlight>
            <RainbowHighlight color={colors[1]}>
            <p>I.. I... don't know rick this css is a little jarring</p>
            </RainbowHighlight>
            <RainbowHighlight color={colors[2]}>
            <p>jarring...? what do you know about jarring little prick</p>
            </RainbowHighlight>
            <RainbowHighlight color={colors[3]}>
            <p>gosh... ooo jeez sorry rick</p>
            </RainbowHighlight>
          </RoughNotationGroup>
        </section>
    </Layout>
  );
}
import React from 'react'
import Head from 'next/head'
// import Nav from '../components/nav'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../components/styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMD}>
        <p>Hello my name is Drew</p>
        <p>What else do you really need to know?</p>
      </section>
      <section className={`${utilStyles.headingMD} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLG}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem}>
              {title}
              <br />
              {date}
              <br />
              {id}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

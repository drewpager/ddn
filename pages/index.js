import React from 'react'
import Head from 'next/head'
// import Nav from '../components/nav'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../components/styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMD}>
        <p>Hello my name is Drew</p>
        <p>What else do you really need to know?</p>
      </section>
    </Layout>
  )
}

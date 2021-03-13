import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>The Daily Dose's First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  )
}

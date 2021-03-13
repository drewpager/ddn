import React from 'react';
import styles from './layout.module.css';
import utilStyles from './styles/utils.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const name = "Drew Page"
export const siteTitle = "The Daily Dose"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The Daily Dose short history documentaries" />
        <meta name="og:title" content={siteTitle} />        
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/drew-page.jpeg"
              className={utilStyles.borderCircle}
              width={144}
              height={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2XL}>{name}</h1>
          </> 
        ): (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/drew-page.jpeg"
                  className={utilStyles.borderCircle}
                  width={144}
                  height={144}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLG}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </> 
        )}
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>&larr; Back Home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
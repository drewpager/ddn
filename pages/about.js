import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Link href="/">&larr; Back Home</Link>
      <h1>About The Daily Dose</h1>
      <Image
        src="/images/drew-page.jpeg"
        width={144}
        height={144}
        alt="Drew Page"
      />
    </div>
  );
}
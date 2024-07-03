import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Head>
                <title>About me</title>
                <link rel='icon' href='/about-me.ico' />
            </Head>
            <header className={styles.header}>
                <Link href={`/`}>Home</Link>
                <Link href={`/animals`}>Animals</Link>
            </header>
            <main className={styles.aboutMe}>
                <h1>About Me Page</h1>
                <section>
                    <h2>My early life </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>
            </main>
        </>
    );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Animals.module.css';

import animals from '../../data/animals.json';
import Animal from '../../../components/Animal/Animal';

export default function Lion() {
    let animal = animals[0];
    console.log('animal: ', animal);
    return (
        <>
            <Head>
                <title>{animal.name}</title>
                <link rel='icon' type='image/x-icon' href='../lion.ico' />
            </Head>
            <header className={styles.header}>
                <Link href={`/`}>Home</Link>
                <Link href={`/about`}>About</Link>
                <Link href={`/animals`}>Animals</Link>
            </header>
            <Animal animal={animal} />
        </>
    );
}

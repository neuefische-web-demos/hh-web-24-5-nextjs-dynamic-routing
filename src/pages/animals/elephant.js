import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Animals.module.css';

import animals from '../../data/animals.json';
import Animal from '../../../components/Animal/Animal';
import Link from 'next/link';

export default function Elephant() {
    let animal = animals[1];
    console.log('animal: ', animal);
    return (
        <>
            <Head>
                <title>{animal.name}</title>
                <link rel='icon' href={`/${animal.name.toLowerCase()}.ico`} />
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

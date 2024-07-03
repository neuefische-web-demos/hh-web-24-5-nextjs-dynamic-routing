import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Animals.module.css';

import animals from '../../data/animals.json';

export default function Animals() {
    return (
        <>
            <Head>
                <title>Animals</title>
                <link rel='icon' href='../zoo.ico' />
            </Head>
            <header className={styles.header}>
                <Link href={`/`}>Home</Link>
                <Link href={`/about`}>About</Link>
            </header>
            <main className={styles.main}>
                <h1>List of animals</h1>
                <section className={styles.cardsSection}>
                    {animals.map((animal, i) => (
                        <Link
                            href={`/animals/${animal.name.toLowerCase()}`}
                            key={i}
                        >
                            <div className={styles.animalCard}>
                                <Image
                                    src={animal.image}
                                    alt={animal.name}
                                    width={540}
                                    height={326}
                                />

                                <h1>{animal.name}</h1>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </>
    );
}

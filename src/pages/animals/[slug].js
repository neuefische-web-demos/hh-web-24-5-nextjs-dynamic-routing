import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Animals.module.css';

import animals from '../../data/animals.json';
import Animal from '../../../components/Animal/Animal';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Elephant() {
	const router = useRouter();
	console.log('router: ', router.query);

	// We destructure the object query.
	// The key is called slug, because our file is called slug. If the file name change, the key name change
	const { slug } = router.query;
	console.log('slug: ', slug);

	// Once we have the slug, we want to search the correct information to be display.
	let animal = animals.find((ele) => ele.name.toLowerCase() === slug);
	// let animal = animals[2];

	console.log('animal: ', animal);
	return (
		<>
			<Head>
				{/* This nextjs component, let us change the information on the browser. The tab name, image */}
				<title>{animal.name}</title>
				<link rel="icon" href={`/${animal.name.toLowerCase()}.ico`} />
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

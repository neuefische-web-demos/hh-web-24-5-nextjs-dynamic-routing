import React from 'react';
import Image from 'next/image';

import styles from '@/styles/Animals.module.css';

export default function Animal({ animal }) {
    return (
        <main className={styles.main}>
            <h2>{animal.name}</h2>
            <section className={styles.mainAnimal}>
                <table className={styles.animalInfo}>
                    <tbody>
                        <tr>
                            <td>Scientific Name</td>
                            <td>{animal.scientificName}</td>
                        </tr>
                        <tr>
                            <td>Diet</td>
                            <td>{animal.diet}</td>
                        </tr>
                        <tr>
                            <td>Habitat</td>
                            <td>{animal.habitat}</td>
                        </tr>
                    </tbody>
                </table>

                <Image
                    src={animal.image}
                    alt={animal.name}
                    width={640}
                    height={426}
                />
            </section>
        </main>
    );
}

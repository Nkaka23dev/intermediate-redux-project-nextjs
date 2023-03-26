import React from 'react'
import Article from './Article'
import Publishers from './Publishers'

export default function Articles() {
    return (
        <section className="max-w-6xl mx-auto pb-10">
            <Article title="All Articles" arr={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
            <Publishers />
        </section>
    )
}

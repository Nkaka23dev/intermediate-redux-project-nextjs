import React from 'react'
import Article from './Article'
import Publishers from './Publishers'

export default function Articles({ myPosts }: any) {
    return (
        <section className="max-w-6xl mx-auto pb-10">
            <Article title="All Articles" myPosts={myPosts} />
            <Publishers />
        </section>
    )
}

import React from 'react'
import Article from './Article'
import Publishers from './Publishers'

export default function Articles() {
  return (
    <section className="max-w-6xl mx-auto mt-40 pb-10">
        <Article/>
        <Publishers/>
    </section>
  )
}

import Head from 'next/head'
import Articles from '@/components/Articles'
import { getStaticProps } from './data'

export default function Home({ myPosts }: any) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Articles myPosts={myPosts}  />
      </main>
    </>
  )
}
export { getStaticProps };

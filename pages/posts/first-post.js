import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post from tutorial</title>
        
      </Head>
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpg"
        height={72}
        width={72}
        alt="testing profile Image Component with a profil pic"
        />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
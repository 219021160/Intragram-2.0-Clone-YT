import Head from 'next/head'
import Feed from '../components/feed'
import Header from '../components/header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      {/* Header */}
      <Header />




      {/* Feed */}
      <Feed />


      {/* Modal */}

      

   
    </div>
  )
}

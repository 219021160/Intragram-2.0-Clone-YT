import Head from 'next/head'
import Feed from '../components/feed'
import Header from '../components/header'




export default function Home() {
  return (
    <div className=" h-screen bg-gray-50 overflow-y-scroll scrollbar-hide ">
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

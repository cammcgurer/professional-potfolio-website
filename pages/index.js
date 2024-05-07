import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello, I'm Cameron" />
          <div>
            <Image
              src="../assets/cam_headshots.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        <Header title="About Me" />
          <p>"As a recent graduate from The University of Rhode Island with honors, \
              I am a young, energetic and determined individual who is invested in both business and technology. \
              I want to be able to meld my tehnical experience and people skills together to make meaningful contributions to the people around me and the company I work for. 
          </p>
      </main>

      <Footer />
    </div>
  )
}

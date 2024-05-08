import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
            <h1> Hello, I'm Cameron </h1>
            <p> I am a young, energetic and determined individual who is invested in business, 
                technology, and the intersection between the two. I want to be able to meld my tehnical experience and people skills together 
                to make meaningful contributions to the people around me and the company I work for.
            </p>
        </div>
        <div>
          <Image
            src="/cam_headshot.png"
            width={325}
            height={325}
            alt="Cameron"
            style={{ borderRadius: '50%' }}
          />
        </div>
        <Header title="Projects" />
          <p>"Projects go here" 
          </p>
        <Header title="Resume" />
          <p>"pdf of resume" 
          </p>
        <Header title="Contact Me" />
          <p>"Contact info (github, linkedin, email)" 
          </p>
      </main>

      <Footer />
    </div>
  )
}

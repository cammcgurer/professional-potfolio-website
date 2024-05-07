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
        <Header title="Hello, I'm Cameron" />
          <p> "short description because page not updating"</p> 
          <div>
            <Image
              src="/assets/cam_headshots.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        <Header title="About Me" />
          <p>"I am a young, energetic and determined individual who is invested in business, technology, and the intersection between the two. \
              I want to be able to meld my tehnical experience and people skills together to make meaningful contributions \
              to the people around me and the company I work for."
          </p>
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

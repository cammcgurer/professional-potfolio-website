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
        <div className="navbar">
          <div className="navbar-brand">
              <strong>Cameron McGurer</strong>
          </div>
          <div className="navbar-links">
            <a href="https://github.com/cammcgurer" target="_blank" aria-label="GitHub">
              <img src="github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/cameronmcgurer/" target="_blank" aria-label="LinkedIn">
             <img src="linkedin.png" alt="LinkedIn" />
            </a>
            <a href="mailto:cammcgurer@gmail.com" aria-label="Email">
              <img src="email.png" alt="Email" />
            </a>
          </div>
        </div>
    
        <div className="intro-section">
          <div className="image-container">
            <Image
              src="/cam_headshot.png"
              width={325}
              height={325}
              alt="Cameron"
            />
          </div>
          <div className="intro-text">
            <h1>Hello, I'm Cameron</h1>
            <p>I am a young determined individual on the East Coast interested in computer science, business, and the overlap between the two.
            </p>
          </div>
          <div className="intro-down-arrow">
            <img src="arrow.png" alt="Down Arrow" />
          </div>
        </div>

        <div className="project-section">
          <div className="project-title">
            <h1>Projects</h1>
          </div>
        </div>

        <div className="resume-section">
          <Header title="Resume" />
        </div>
      </main>

      <Footer />
    </div>
  )
}


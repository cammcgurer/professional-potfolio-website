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

        <Header title="Projects" />
        <div className="project-section">
          <ul className="projects-list">
            <li>
              <h3>Project Title 1</h3>
              <p>Description of Project 1.</p>
            </li>
            <li>
              <h3>Project Title 2</h3>
              <p>Description of Project 2.</p>
            </li>
            <li>
              <h3>Project Title 3</h3>
              <p>Description of Project 3.</p>
            </li>
          </ul>
        </div>

        <Header title="Resume" />
        <div className="resume-section">
          <iframe
            src="/Cam_McGurer_Resume.pdf"
            allow="fullscreen">
          </iframe>
        </div>
                
      </main>

      <Footer />
    </div>
  )
}



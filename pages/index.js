import Head from 'next/head'
import Header from '@components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cameron McGurer Portfolio</title>
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
            <img src="/headshot.png" width={325} height={325} alt="Cameron" />
          </div>
          <div className="intro-text">
            <h1>Hello, I'm Cameron</h1>
            <p>I am a young determined computer scientist on the East Coast interested in technology, business, and the overlap between the two.
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
              <h3>Business Applications of Generative AI</h3>
              <p>A practicum involving the research and study of ways that generative artificial intelligence can be used inthe business world</p>
            </li>
            <li>
              <h3>Universal Machine</h3>
              <p>A software implementation of a virtual machine coded in Rust. This program takes, as input, a data file consisting of instruction
                 words and performs 14 different operations based on the information in the instruction. It uses eight registers, a two-dimensional array
                 of memory, and a program counter</p>
            </li>
            <li>
              <h3>Travelers on a Map</h3>
              <p>Uses multithreading to launch a certain number of threads, or travelers, on a two-dimensional grid. 
                 This grid contains moving and stationary walls that the travelers cannot pass through, an exit that the travelers are trying to reach, and
                 a lock for every square to prevent deadlocks.</p>
            </li>
          </ul>
        </div>

        <Header title="Resume" />
        <div className="resume-section">
          <iframe
            src="/resume.pdf"
            allow="fullscreen">
          </iframe>
        </div>
                
      </main>

    </div>
  )
}


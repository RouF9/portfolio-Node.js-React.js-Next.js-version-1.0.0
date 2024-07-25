"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "How can I help you learn more about Abderraouf and his Resume?",
    },
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: "user", content: messageInput }];
    setMessages(newMessages);
    setMessageInput("");
    const apiMessage = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: newMessages }),
    }).then((res) => res.json());
    setMessages([
      ...newMessages,
      { role: "assistant", content: apiMessage.message },
    ]);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">R</div>
          <div className="logo-text">Raouf's Portfolio</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="emailto:rou@roustack.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small>
                Abderraouf Boulahnache
              </h1>
              <p>
                FullStack JavaScript Developer based in Algeria. I specialise in
                MERN stack development and i have expertise in various
                JavaScript Frameworks.{" "}
                <span>
                  With a passion for coding and programming development , im
                  constantly updating my skills to stay up-to-date with latest
                  technologies, I enjoy working on challenging projects and
                  finding innovative solutions to complex problems. Let's
                  connect and create amazing applications together!
                </span>
              </p>
              <div className="call-to-action">
                <a
                  href="./public/CV-Boulahnache Abderraouf_3_5.pdf"
                  className="button black"
                >
                  View Resume
                </a>
                <a href="mailto:rou@roustack.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/RouF9" target="_blank">
                  <img src="./assets/github.png" alt="GitHub" width="48" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abderraouf-boulahnache-b40910266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <img src="./assets/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img
              src="./assets/abderraouf-boulahnache-avatar.png"
              alt="Abderraouf Boulahnache"
              width="100%"
            />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./assets/HTML5.png" alt="HTML" width="128" />
              <img src="./assets/CSS3.png" alt="CSS3" width="128" />
              <img src="./assets/JavaScript.png" alt="JavaScript" width="128" />
              <img src="./assets/Bootstrap.png" alt="bootstrap" width="128" />
              <img src="./assets/Node.js.png" alt="node-js" width="128" />
              <img src="./assets/React.png" alt="react-js" width="128" />
              <img src="./assets/TypeScript.png" alt="typescript" width="128" />
              <img src="./assets/Vue.js.png" alt="vuejs" width="128" />
              <img src="./assets/Next.js.png" alt="Next.js" width="128" />
              <img src="./assets/Angular.png" alt="angular.js" width="128" />
              <img src="./assets/MongoDB.png" alt="mongodb" width="128" />
              <img src="./assets/Git.png" alt="Git" width="128" />
              <img src="./assets/Tailwind CSS.png" alt="Tailwind" width="128" />
              <img src="./assets/HTML5.png" alt="HTML" width="128" />
              <img src="./assets/CSS3.png" alt="CSS3" width="128" />
              <img src="./assets/JavaScript.png" alt="JavaScript" width="128" />
              <img src="./assets/Bootstrap.png" alt="bootstrap" width="128" />
              <img src="./assets/Node.js.png" alt="node-js" width="128" />
              <img src="./assets/React.png" alt="react-js" width="128" />
              <img src="./assets/TypeScript.png" alt="typescript" width="128" />
              <img src="./assets/Vue.js.png" alt="vuejs" width="128" />
              <img src="./assets/Next.js.png" alt="Next.js" width="128" />
              <img src="./assets/Angular.png" alt="angular.js" width="128" />
              <img src="./assets/MongoDB.png" alt="mongodb" width="128" />
              <img src="./assets/Git.png" alt="Git" width="128" />
              <img src="./assets/Tailwind CSS.png" alt="Tailwind" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>Tailwind</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>GIT/GITHB</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi I'm Abderraouf FullStack JavaScript Developer based in
                Algeria. I specialise in MERN stack development and i have
                expertise in various JavaScript Frameworks. With a passion for
                coding and programming development , im constantly updating my
                skills to stay up-to-date with latest technologies, I enjoy
                working on challenging projects and finding innovative solutions
                to complex problems.
              </p>
              <p>
                I'm currently working on a project that uses Azure AI to create
                a chatbot that can help answer questions about web development.
                I'm also working on a project that uses React , Next.js and
                Angualr create a stunning websites that looks good.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img
                    src="./assets/freelancer.png"
                    alt="Workplace 1 - Freelancer"
                    width="100%"
                  />
                  <figcaption>Workplace - 1 Freelancer</figcaption>
                </div>
              </figure>
              <h3>Freelancing online - onsite</h3>
              <div>2022-2024</div>
              <p>
                Website creation and designing using HTML, CSS, JS and React.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./assets/modarakia.png"
                    alt="Workplace 2 - Modarakia-ooredoo"
                    width="100%"
                  />
                  <figcaption>Workplace - Modarakia</figcaption>
                </div>
              </figure>
              <h3>Junior Front-End developer</h3>
              <div>2024-Present</div>
              <p>
                Degital Clothing Conception - building websites and programming
                them from the ground up.{" "}
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="https://modarakiapatterns.com/" className="bento-item">
              <img
                src=".\assets\modarakia-website.png"
                alt="Modarakia"
                width="100%"
              />
            </a>
            <a href="https://olisclothing.com" className="bento-item">
              <img src=".\assets\olis-website.png" alt="Olis" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-3.jpg" alt="Coming soon" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-5.jpg" alt="Coming soon" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-6.jpg" alt="Coming soon" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-7.jpg" alt="Coming soon" width="100%" />
            </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small>Talk to me</small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>
                I've put together a chatbot here which knows all my skills, work
                experience and has a copy of my CV/Resume. You can use it to ask
                questions about me to get a better idea of who I am and what
                I've done.
              </p>
              <p>
                You can also download my resume here if you want to take a look
                at it. I'm currently looking for new opportunities so if you
                have a project you think I'd be a good fit for, please get in
                touch!
              </p>
              <a
                href="./public/CV-Boulahnache Abderraouf_3_5.pdf"
                className="button black"
              >
                Download Resume
              </a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>
                        {message.role === "user" ? "You" : "AI"}
                      </span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input
                  type="text"
                  placeholder="Hey Raouf, what skills are you best at?"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

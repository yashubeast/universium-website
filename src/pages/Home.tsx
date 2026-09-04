import './Home.css'

function Home() {
  return (
    <main className="home-page">

      <section className="home-section home-hero">
      <div className="home-section-inner">
        <h1>
          Building<br />
          <span>digital worlds</span>
        </h1>

        <div className="home-hero-bottom">
          <p>
            Universium is building digital worlds with a shared economy,<br />
            connecting game servers, online communities, for the<br />
            next generation of internet-native participation.
          </p>
        </div>
      </div>
      </section>

      <section className="home-section home-equity section-2">
      <div className="home-section-inner">
        <img src="/equity-animated.svg" alt="" className="equity-graphic" aria-hidden="true" />
        <h2>
          Powered by<br />
          <span>Equity</span>
        </h2>

        <div className="section-content">
          <p>
            Equity is a cross-platform economy layer for digital worlds.<br />
            It turns participation into something that can be<br />
            earned, spent, traded, and owned.
          </p>
        </div>

        <div className="equity-keywords">
          <p>
            Talk. Play. Build. Compete.
          </p>
          <br />
          <a href="/equity">Explore Equity →</a>
        </div>
      </div>
      </section>

      <section className="home-section home-worlds">
      <div className="home-section-inner">
        <div className="home-worlds-images" aria-hidden="true">
          <div className="world-frame"><img src="/minecraft-frame.png" alt="" /></div>
          <div className="world-frame"><img src="/discord-frame.png" alt="" /></div>
          <div className="world-frame"><img src="/upcoming-frame.png" alt="" /></div>
        </div>
        <h2>
          One economy<br />
          <span>many worlds</span>
        </h2>

        <div className="section-content">
          <p>
          Your participation shouldn't have to stay trapped inside one platform.
          </p>
          <br />
          <p>
            Earn in one place. Spend in another. Equity connects participation
            across supported communities, games, and digital worlds.
          </p>
        </div>
      </div>
      </section>

      <section className="home-section home-idea section-2">
      <div className="home-section-inner">
        <div className="home-idea-bg" aria-hidden="true">
          <span>Earn.</span>
          <span>Spend.</span>
          <span>Own.</span>
        </div>
        <h2>
          Earn by<br />
          <span>participating</span>
        </h2>

        <div className="section-content">
          <p>
            Equity is earned through meaning participation —
            from communication and community activity to gameplay,
            creation, events, and other contributions.
          </p>
        </div>
      </div>
      </section>

      <section className="home-section home-final">
      <div className="home-section-inner">
        <h2>
          Build worlds<br />
          <span>that remember</span>
        </h2>

        <div className="section-content">
          <p>
            Digital worlds reset. Servers close. Communities move.<br />
            Years of participation can disappear with them.
            <br /><br />
            Equity is built around a different idea:<br />
            digital participation can become something durable.
          </p>

          <div className="global-button-row" style={{ marginTop: 32 }}>
            <a href="/about" className="global-button global-button-primary"
            >More about Universium</a>
            <a href="https://discord.gg/universium" target="_blank"
              rel="noopener noreferrer" className="global-button"
            >Join Discord →</a>
          </div>
        </div>

        <div className="manifesto">
          <div className="manifesto-line">
            <p>Digital times should <span>matter</span>.</p>
          </div>
          <div className="manifesto-line">
            <p>Digital efforts should be <span>legible</span>.</p>
          </div>
          <div className="manifesto-line">
            <p>Digital ownership should be <span>real</span>.</p>
          </div>
        </div>
      </div>
      </section>

      {/* NOTE: add footer */}

    </main>
  )
}

export default Home

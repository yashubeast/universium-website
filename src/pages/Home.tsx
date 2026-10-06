import './Home.css'

function Home() {
  return (
    <main className="home-page">

      <section className="home-section home-hero">
      <div className="home-section-inner">
        <h1>
          Building<br />
          <span>Universium</span>
        </h1>

        <div className="home-hero-bottom">
          <p>
          We build digital worlds that the players inhabit and enrich with lore.<br />
          We’ve developed our own economic system to further expand the possibilities available to the user base,<br />
          and we host online communities centered around our activities.
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
          Our custom-built economic system enables basic functions such as trade, auctions<br />
          and shops, while also going beyond the conventional to empower its user base.<br />
          Money should give you wings, not weigh you down.<br />
          Join and discover for yourself what it can do!
          </p>
        </div>

        <div className="equity-keywords">
          <p>
            Talk. Play. Build. Compete.
          </p>
          <br />

          <a href="/equity" className="global-button">Explore Equity</a>
        </div>
      </div>
      </section>

      <section className="home-section home-worlds">
      <div className="home-section-inner">
        <div className="home-worlds-images" aria-hidden="true">
          <div className="world-frame"><img src="/minecraft-frame.png" alt="" /></div>
          <div className="world-frame"><img src="/discord-frame.png" alt="" /></div>
          <div className="world-frame"><img src="/reddit-frame.png" alt="" /></div>
          <div className="world-frame"><img src="/tiktok-frame.png" alt="" /></div>
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
          Equity is earned simply through meaningful participation,<br />
          from communication and community activity to gameplay,<br />
          creation, events, and other contributions.
          </p>
        </div>
      </div>
      </section>

      <section className="home-section home-final">
      <div className="home-section-inner">
        <h2>
          Together we build<br />
          <span>worlds that remember</span>
        </h2>

        <div className="section-content">
          <p>
            Digital worlds reset. Servers close. Communities move.<br />
            Years of your participation can disappear with them.
            <br /><br />
            Equity is built around a different idea:<br />
            digital participation can become something lasting, perhaps even permanent.
          </p>

          <div className="global-button-row" style={{ marginTop: 32 }}>
            <a href="/about" className="global-button global-button-primary"
            >More about Universium</a>
            <a href="https://discord.gg/universium" target="_blank"
              rel="noopener noreferrer" className="global-button"
            >Join Discord</a>
          </div>
        </div>

        <div className="manifesto">
          <div className="manifesto-line">
            <p>Digital times investment should <span>matter</span>.</p>
          </div>
          <div className="manifesto-line">
            <p>Digital efforts should be <span>preserved</span>.</p>
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

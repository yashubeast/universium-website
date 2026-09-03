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
          <a href="/equity">Explore Equity →</a>
        </div>
      </div>
      </section>

      <section className="home-section home-idea section-3">
      <div className="home-section-inner">
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
          <br />
          <p>
            Today, that can mean interacting in Discord and using
            what you earn in community auctions.
            Tomorrow, it can extend into games, events,
            and other digital environments.
          </p>
        </div>

        <div className="equity-keywords">
          <p>
            Earn. Spend. Own.
          </p>
        </div>
      </div>
      </section>

      <section className="home-section section-2">
      <div className="home-section-inner">
        <h2>
          One economy<br />
          <span>many worlds</span>
        </h2>

        {/* TODO: show graphic or text, annotating games connecting to equity, like node chart of games connected to equity icon */}
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
      
      <section className="home-section home-final section-3">
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
            <br /><br />
            {/* TODO: move these to the right end */}
            Digital times should matter.<br />
            Digital efforts should be legible.<br />
            Digital ownership should be real.
          </p>
          <br /><br />
          {/* TODO: turn these into proper buttons */}
          <a href="/about">More about Universium →</a>
          <br /><br />
          <a href="https://discord.gg/universium" target="_blank" rel="noopener noreferrer">Join Discord →</a>
        </div>
      </div>
      </section>

      {/* NOTE: add footer */}

    </main>
  )
}

export default Home

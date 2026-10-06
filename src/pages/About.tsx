import './Docs.css'

function About() {
  return (
    <main className="docs-page">
      <div className="docs-inner">
        <header className="docs-header">
          <h1>
            About <span>Universium</span>
          </h1>
          <p>
            Digital worlds, game servers, and player-owned economies, built for
            the next generation of internet-native participation.
          </p>
        </header>

        <article className="docs-content">

          <h2>What is Universium?</h2>
          <p>
            Universium is a digital worlds company building game servers,
            online communities, and economy infrastructure for the next
            generation of internet-native participation.
          </p>

          <h2>Why it exists</h2>
          <p>
            We believe digital time should not vanish. Players and users spend
            thousands of hours gaming, chatting, creating, researching,
            moderating, and building communities, yet most platforms leave them
            with little ownership or lasting value.
          </p>
          <p>
            Universium exists to build online environments where participation
            can become memory, assets, reputation, market position, and
            economic opportunity.
          </p>

          <h2>What we're building</h2>
          <ul>
            <li>Game server development</li>
            <li>Social media communities</li>
            <li>Player marketplaces</li>
            <li>Digital asset systems</li>
            <li>Creator tools</li>
            <li>The Equity economy layer</li>
          </ul>

          <h2>
            The <span className="color-accent-equity">Equity</span> economy layer
          </h2>
          <p>
            Equity powers the economic foundation of Universium. It enables
            supported environments to measure participation, enforce scarcity,
            support markets, and recognize digital ownership across platforms.
          </p>
          <p>
            It coordinates scarcity across social
            media, game servers, streaming environments, and the web through a single source of truth. It
            enables players to earn, trade, and hold assets that persist beyond any single session, server, or
            moment of hype.
          </p>
          <p>
            Equity is infrastructure, not a promise. It doesn't guarantee
            profit, appreciation, liquidity, or outcomes, and owning an asset
            doesn't guarantee it keeps its value or utility.
          </p>

          <h2>Worlds that remember</h2>
          <blockquote className="docs-callout">
            <p>
              Universium is not only building games. It is building
              infrastructure for worlds that remember.
            </p>
          </blockquote>

          <div className="global-button-row">
            <a href="/equity" className="global-button color-accent-equity">Explore Equity</a>
          </div>

        </article>
      </div>
    </main>
  )
}

export default About

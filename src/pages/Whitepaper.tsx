import './Docs.css'

function Whitepaper() {
  return (
    <main className="docs-page">
      <div className="docs-inner">
        <header className="docs-header">
          <h1>
            <span>Equity Whitepaper</span>
          </h1>
          <p>
            The system architecture, economic layers, market mechanisms, ownership model, integrity controls, and risk boundaries of Equity.
          </p>
        </header>

        <article className="docs-content">

          <h2>1.1 Scope, Audience, and Assumptions</h2>
          <p>
            This whitepaper is written for developers, analysts, serious
            users, partners, and early ecosystem participants seeking to
            understand how Equity operates as a cross-platform economy and
            ownership layer.
          </p>
          <p>
            It describes the system architecture, currency layers, market
            mechanisms, ownership model, Dynamic Proof of Participation,
            integrity controls, and risk boundaries at a high level.
          </p>
          <p>
            Equity is a live system that will evolve. This document explains
            intended mechanics and operating principles, but does not promise
            future value, outcomes, appreciation, liquidity, or continuous
            availability.
          </p>
          <p>
            Equity may enable users to earn, own, transfer, trade, rent, lend,
            or commercialize digital assets and services under defined system
            rules. Any financial, tax, legal, or regulatory consequences of
            participation remain the responsibility of the participant.
          </p>
          <p>
            This whitepaper is not a complete technical specification,
            tokenomics paper, smart contract audit, legal opinion, or regulated
            crypto-asset disclosure document. Detailed technical, tokenomic,
            asset, marketplace, and compliance specifications may be maintained
            separately.
          </p>

          <h2>1.2 System Overview</h2>
          <p>
            Equity operates across multiple digital environments, including
            social media, game servers, streaming environments, and the web.
          </p>
          <p>
            These environments are connected through a central backend that
            acts as the system’s coordinating layer. Bots, clients, dashboards,
            APIs, game integrations, and wallet interfaces serve as access
            points into the system. State, balances, permissions, reward logic,
            market rules, ownership recognition, and integrity controls are
            coordinated centrally or through supported smart contracts where
            applicable.
          </p>
          <p>The system is designed so that:</p>
          <ul>
            <li>activity can be observed across supported environments;</li>
            <li>participation can be filtered through anti-farm and anti-abuse constraints;</li>
            <li>scarcity can be enforced across surfaces, access, assets, and events;</li>
            <li>markets can allocate scarce resources through pricing and competition;</li>
            <li>ownership assets can be recognized and enforced in supported environments;</li>
            <li>users can build durable economic position beyond a single platform.</li>
          </ul>
          <p>
            Equity does not treat raw activity as value by itself. Activity
            becomes meaningful only when filtered through scarcity, utility,
            coordination, demand, and market pressure.
          </p>

          <h2>1.3 Currency & Credit Types</h2>
          <p>
            Equity uses three primary economic layers, each with a distinct
            role and boundary.
          </p>

          <h3>Equity Credit (EC) — Earned / Off-Chain Fuel</h3>
          <p>
            Equity Credit enters through participation, gameplay, viewership,
            contribution, research, moderation, creation, coordination, and
            other system-defined activity.
          </p>
          <p>
            EC is used for high-velocity interactions, including fees, access
            costs, auctions, crafting rights, market actions, event
            participation, and in-system consumption.
          </p>
          <p>
            EC may be subject to caps, throttles, decay, sinks, reversals,
            enforcement actions, or other constraints designed to preserve
            signal quality and prevent farming.
          </p>
          <p>
            EC is not automatically wealth. It becomes meaningful only when
            used within scarcity, competition, utility, or market demand.
          </p>

          <h3>Donation Tokens (DT) — Fiat Entry / Platform Credits</h3>
          <p>
            Donation Tokens enter through fiat purchase or other Company-approved
            payment flows. They are used for defined platform functions,
            including premium access, event tickets, limited surfaces,
            sponsorship mechanisms, visibility, acceleration, and ecosystem
            services.
          </p>
          <p>
            DT provide a fiat revenue rail for the platform and support system
            development, infrastructure, operations, and ecosystem activity.
          </p>
          <p>
            DT do not represent ownership in the Company, profit rights, revenue
            claims, guaranteed outcomes, or a general right of fiat redemption.
          </p>

          <h3>Crypto Currency (CC) — On-Chain Ownership Layer</h3>
          <p>
            The crypto layer enables ownership, transferability, composability,
            and portability across supported environments.
          </p>
          <p>
            CC may be used for permanent digital assets, real estate deeds,
            power NFTs, relics, portable identity, governance primitives where
            enabled, and other on-chain or wallet-recognized assets.
          </p>
          <p>
            CC may be earned within the system, acquired through approved
            mechanisms, transferred to external wallets, or acquired externally
            where legally and technically available.
          </p>
          <p>
            Crypto assets may be volatile, illiquid, restricted, unsupported,
            or unavailable in certain jurisdictions. Equity does not guarantee
            value, liquidity, exchange listing, resale price, fiat conversion,
            appreciation, or continuous utility.
          </p>
          <p>
            No currency layer is interchangeable by default. Any conversion,
            bridge, or interaction between EC, DT, CC, or other asset types must
            be explicit, rate-limited where appropriate, logged, and gated by
            security, economic, platform, and compliance requirements.
          </p>

          <h2>1.4 Participation, Ownership, and Economic Value</h2>
          <p>
            Equity is designed to convert digital participation into measurable
            signal and, where system rules allow, into ownable digital assets
            or economic position.
          </p>
          <p>
            Participation may include gameplay, communication, moderation,
            research, building, creation, streaming, organizing, trading,
            community support, event participation, or other forms of digital
            contribution.
          </p>
          <p>
            The system does not claim that all participation has monetary value.
            It does not pay users simply for being active. It does not guarantee
            that time becomes money.
          </p>
          <p>Instead, Equity creates infrastructure where participation may become valuable when it meets:</p>
          <ul>
            <li>scarcity;</li>
            <li>utility;</li>
            <li>coordination;</li>
            <li>risk;</li>
            <li>competition;</li>
            <li>demand;</li>
            <li>market validation.</li>
          </ul>
          <p>
            Through this process, users may earn credits, access rights, digital
            assets, NFTs, deeds, relics, market position, reputation records,
            or other recognized forms of economic participation.
          </p>

          <h2>1.5 Equity Credit: Emission & Anti-Farm Controls</h2>
          <p>
            Equity Credit is issued under conditions designed to preserve signal
            quality and limit artificial farming.
          </p>
          <p>Emission may be influenced by:</p>
          <ul>
            <li>participation across supported platforms;</li>
            <li>correlation with other users or events;</li>
            <li>completion of verified actions;</li>
            <li>contribution to markets, events, or community activity;</li>
            <li>time-bound participation;</li>
            <li>DPP-based signal weighting.</li>
          </ul>
          <p>Anti-farm controls may include:</p>
          <ul>
            <li>diminishing returns for repetitive behavior;</li>
            <li>caps per time window;</li>
            <li>discounts for isolated or low-correlation activity;</li>
            <li>anti-bot thresholds;</li>
            <li>manual or automated review;</li>
            <li>event-based qualification rules;</li>
            <li>penalties for manipulation.</li>
          </ul>
          <p>EC is designed to circulate through sinks, including:</p>
          <ul>
            <li>market fees;</li>
            <li>bidding;</li>
            <li>access costs;</li>
            <li>crafting rights;</li>
            <li>event entry;</li>
            <li>congestion fees;</li>
            <li>utility activation;</li>
            <li>consumption.</li>
          </ul>
          <p>
            The purpose of EC is to create movement, pressure, and participation
            inside the economy without allowing raw activity to inflate into
            false value.
          </p>

          <h2>1.6 Donation Tokens: Fiat Entry & Platform Sustainability</h2>
          <p>
            Donation Tokens are the primary fiat entry mechanism for defined
            platform uses.
          </p>
          <p>
            They support platform sustainability by funding infrastructure,
            development, security, operations, events, creator tools, partner
            integrations, and premium surfaces.
          </p>
          <p>DT are designed for:</p>
          <ul>
            <li>time-bound access;</li>
            <li>event tickets;</li>
            <li>premium surfaces;</li>
            <li>visibility placements;</li>
            <li>sponsorship tooling;</li>
            <li>acceleration mechanisms;</li>
            <li>convenience features;</li>
            <li>ecosystem services.</li>
          </ul>
          <p>
            DT do not grant legal ownership in the Company, profit share,
            governance rights, revenue claims, guaranteed outcomes, or
            guaranteed market advantage.
          </p>
          <p>DT do not create a general right of fiat redemption.</p>
          <p>
            Equity may support crypto assets that can be owned, transferred, or
            traded outside the platform. Such crypto assets are governed by
            separate asset rules, marketplace rules, smart contract terms,
            jurisdictional restrictions, and applicable law. The existence of
            transferable crypto assets does not make DT generally redeemable for
            fiat or create a guaranteed cash-out right.
          </p>
          <p>
            Any interaction between DT, EC, crypto assets, or external value
            pathways must be explicit, logged, gated, and subject to compliance
            and security controls.
          </p>

          <h2>1.7 Crypto Currency: Ownership Layer and Portability</h2>
          <p>
            The crypto layer exists to make digital time matter beyond a single
            platform.
          </p>
          <p>It enables:</p>
          <ul>
            <li>permanent ownership of supported assets;</li>
            <li>wallet-based possession;</li>
            <li>open market trade where supported;</li>
            <li>composability with wallets and external ecosystems;</li>
            <li>portability of identity and inventory;</li>
            <li>recognition of digital property across supported environments.</li>
          </ul>
          <p>The system distinguishes between:</p>
          <ul>
            <li>utility assets — NFTs, deeds, access keys, powers, or items used in-world;</li>
            <li>real estate assets — districts, plots, surfaces, portals, or territory rights;</li>
            <li>collectibles and relics — scarce historical artifacts linked to seasons, events, or milestones;</li>
            <li>identity assets — records, badges, credentials, or wallet-linked history;</li>
            <li>governance primitives — limited tools or rights used for governance where enabled.</li>
          </ul>
          <p>
            Crypto assets may be transferable, tradable, rent-enabled,
            lend-enabled, or composable depending on asset type and system
            rules.
          </p>
          <p>
            Ownership does not guarantee utility. Utility may depend on platform
            support, server rules, fees, access conditions, balance constraints,
            contestability, season rules, or legal availability.
          </p>
          <p>
            Crypto assets may be subject to market volatility, technical risk,
            regulatory constraints, smart contract risk, wallet compromise, tax
            obligations, and jurisdictional restrictions. Participants assume
            associated risk.
          </p>

          <h2>1.8 Digital Assets and Asset Utility</h2>
          <p>
            Equity supports digital assets that may exist off-chain, on-chain,
            or in hybrid form.
          </p>
          <p>Digital assets may include:</p>
          <ul>
            <li>land deeds;</li>
            <li>districts;</li>
            <li>plots;</li>
            <li>shopfronts;</li>
            <li>premium surfaces;</li>
            <li>event rights;</li>
            <li>access keys;</li>
            <li>power NFTs;</li>
            <li>relics;</li>
            <li>cosmetic assets;</li>
            <li>identity records;</li>
            <li>governance tools;</li>
            <li>user-created or partner-issued assets.</li>
          </ul>
          <p>Assets may provide utility such as:</p>
          <ul>
            <li>access to areas or events;</li>
            <li>visibility;</li>
            <li>participation rights;</li>
            <li>in-world abilities;</li>
            <li>crafting permissions;</li>
            <li>marketplace functions;</li>
            <li>community status;</li>
            <li>historical recognition;</li>
            <li>integration-specific benefits.</li>
          </ul>
          <p>
            Asset ownership may persist while utility changes. Utility can be
            modified, paused, balanced, restricted, deprecated, or removed
            where required by system integrity, platform dependency, legal
            obligation, or technical limitation.
          </p>
          <p>
            Equity does not guarantee that any asset will retain value, remain
            liquid, remain usable, or remain supported indefinitely.
          </p>

          <h2>1.9 Markets, Pricing, and Competition</h2>
          <p>Equity uses markets to allocate scarcity.</p>
          <p>Market mechanisms may include:</p>
          <ul>
            <li>auctions for high-demand surfaces and assets;</li>
            <li>fixed-price listings for lower-volatility assets;</li>
            <li>marketplace listings for peer-to-peer trade;</li>
            <li>rental or lending markets where enabled;</li>
            <li>congestion pricing where demand spikes;</li>
            <li>primary asset issuance;</li>
            <li>secondary market trading;</li>
            <li>service contracts;</li>
            <li>fees or sinks designed to prevent runaway inflation.</li>
          </ul>
          <p>
            Prices are not moral judgments. They are measurements of pressure,
            demand, scarcity, risk, and coordination.
          </p>
          <p>
            Markets may create opportunity, but they may also create loss.
            Participants may make poor trades, overpay, fail to sell, lose
            access, or hold assets that become less useful or less valuable.
          </p>
          <p>
            Equity does not guarantee market outcomes, resale value, buyer
            demand, asset appreciation, or liquidity.
          </p>

          <h2>1.10 User Entrepreneurship</h2>
          <p>
            Equity allows users to create economic activity inside and around
            the system.
          </p>
          <p>Users may, where permitted by system rules and applicable law:</p>
          <ul>
            <li>build services;</li>
            <li>operate shops;</li>
            <li>trade assets;</li>
            <li>rent or lend assets;</li>
            <li>create contracts;</li>
            <li>provide labor;</li>
            <li>sponsor events;</li>
            <li>manage territories;</li>
            <li>organize tournaments;</li>
            <li>sell creative work;</li>
            <li>offer access, utility, or coordination services;</li>
            <li>commercialize digital participation.</li>
          </ul>
          <p>
            User entrepreneurship is user-directed market activity. The Company
            does not guarantee repayment, business success, revenue, demand,
            profit, enforceability beyond system rules, or protection from
            loss.
          </p>
          <p>
            User-created businesses remain subject to anti-abuse rules, market
            integrity rules, platform policies, legal restrictions, and
            enforcement.
          </p>

          <h2>1.11 DPP: Signal & Correlation Engine</h2>
          <p>
            Dynamic Proof of Participation (DPP) is the signal engine that
            measures coordination across supported platforms.
          </p>
          <p>DPP helps:</p>
          <ul>
            <li>weight rewards based on correlated participation;</li>
            <li>discount isolated or repetitive activity;</li>
            <li>tune scarcity pressure;</li>
            <li>adjust congestion fees;</li>
            <li>identify manipulation patterns;</li>
            <li>inform market and event parameters;</li>
            <li>support supply, sinks, or access constraints under stress.</li>
          </ul>
          <p>
            DPP is measurement, not judgment. It does not determine human worth,
            moral value, social rank, or personal legitimacy. It measures where
            participation, coordination, scarcity, and market activity appear
            to form meaningful signal.
          </p>
          <p>
            Some DPP inputs, thresholds, and detection logic may remain private
            to prevent gaming.
          </p>

          <h2>1.12 Time, Seasons, and Persistence</h2>
          <p>
            Equity supports both high-velocity cycles and persistent ownership.
          </p>
          <p>High-velocity cycles may include:</p>
          <ul>
            <li>EC circulation;</li>
            <li>event access;</li>
            <li>temporary surfaces;</li>
            <li>contests;</li>
            <li>short-term permissions;</li>
            <li>seasonal market pressure.</li>
          </ul>
          <p>Persistent ownership may include:</p>
          <ul>
            <li>on-chain assets;</li>
            <li>real estate deeds;</li>
            <li>relics;</li>
            <li>identity records;</li>
            <li>historical assets;</li>
            <li>portable inventory.</li>
          </ul>
          <p>Seasonal structures may exist to:</p>
          <ul>
            <li>introduce new content;</li>
            <li>create new scarcity classes;</li>
            <li>reset specific competitive surfaces;</li>
            <li>preserve history through relics or era assets;</li>
            <li>prevent early dominance from becoming permanent control;</li>
            <li>create new market opportunities.</li>
          </ul>
          <p>
            Persistence applies to ownership where supported. It does not
            guarantee continuous advantage, unchanged utility, uninterrupted
            access, or permanent dominance.
          </p>

          <h2>1.13 Governance Boundaries</h2>
          <p>Governance may be enabled in limited forms.</p>
          <p>Governance may allow participants or asset holders to influence:</p>
          <ul>
            <li>fees;</li>
            <li>caps;</li>
            <li>sinks;</li>
            <li>market parameters;</li>
            <li>access rules;</li>
            <li>integration preferences;</li>
            <li>event formats;</li>
            <li>treasury-related proposals where legally permitted;</li>
            <li>other bounded system variables.</li>
          </ul>
          <p>Governance cannot:</p>
          <ul>
            <li>guarantee outcomes;</li>
            <li>override security constraints;</li>
            <li>force illegal or non-compliant activity;</li>
            <li>remove platform enforcement rights;</li>
            <li>create guaranteed yield;</li>
            <li>require fiat redemption;</li>
            <li>authorize gambling without a dedicated legal framework;</li>
            <li>bind the Company to preserve value, liquidity, or utility.</li>
          </ul>
          <p>
            Governance, where enabled, is a system tool. It is not a guarantee
            of control over the Company or the entire platform.
          </p>

          <h2>1.14 Transparency, Logging, and Auditability</h2>
          <p>Equity maintains internal logs for:</p>
          <ul>
            <li>balances;</li>
            <li>reward issuance;</li>
            <li>market actions;</li>
            <li>trades;</li>
            <li>asset ownership records;</li>
            <li>wallet interactions where applicable;</li>
            <li>enforcement actions;</li>
            <li>abuse detection;</li>
            <li>system parameter changes.</li>
          </ul>
          <p>Public transparency may include:</p>
          <ul>
            <li>aggregate supply statistics;</li>
            <li>market volumes;</li>
            <li>fee and sink behavior;</li>
            <li>asset issuance data;</li>
            <li>public smart contract data;</li>
            <li>high-level ecosystem metrics.</li>
          </ul>
          <p>
            Sensitive thresholds, detection systems, internal abuse signals,
            security procedures, and private user data may remain non-public to
            prevent gaming, harassment, targeting, or exploitation.
          </p>
          <p>
            Transparency exists to support trust and accountability. It does not
            require exposing the system to manipulation.
          </p>

          <h2>1.15 Abuse, Failure Modes, and Intervention</h2>
          <p>Equity assumes adversarial participation.</p>
          <p>The system may face:</p>
          <ul>
            <li>botting;</li>
            <li>Sybil attacks;</li>
            <li>farming;</li>
            <li>collusion;</li>
            <li>wash trading;</li>
            <li>fake volume;</li>
            <li>market manipulation;</li>
            <li>exploit cascades;</li>
            <li>wallet abuse;</li>
            <li>phishing;</li>
            <li>loan or rental abuse;</li>
            <li>griefing;</li>
            <li>attempts to convert internal mechanics into unauthorized cash-out pathways.</li>
          </ul>
          <p>Controls may include:</p>
          <ul>
            <li>rate limits;</li>
            <li>caps;</li>
            <li>freezes;</li>
            <li>reversals or rollbacks where applicable;</li>
            <li>market pauses;</li>
            <li>account restrictions;</li>
            <li>asset restrictions;</li>
            <li>anti-collusion rules;</li>
            <li>detection systems;</li>
            <li>manual review;</li>
            <li>discretionary intervention.</li>
          </ul>
          <p>
            Interventions exist to preserve market truth, asset integrity, user
            safety, and system continuity. No participant is guaranteed
            uninterrupted access, continuous utility, or protection from all
            loss.
          </p>

          <h2>1.16 Regulated Activity Boundary</h2>
          <p>
            Equity does not currently operate gambling, games of chance,
            casino-style mechanics, wagered cash-prize events, direct fiat
            redemption, guaranteed yield products, guaranteed buyback programs,
            or user-created cash-out mechanisms.
          </p>
          <p>
            These activities may require dedicated licensing, authorization,
            compliance infrastructure, age-gating, AML/KYC controls,
            responsible-use controls, tax handling, and specialized staffing.
          </p>
          <p>
            Equity may only enable such mechanics if they are separately
            approved under a dedicated legal and compliance framework.
          </p>
          <p>
            This boundary does not prevent Equity from supporting transferable
            crypto assets, marketplace activity, asset ownership, user
            entrepreneurship, or external wallet portability where legally and
            technically supported.
          </p>

          <h2>1.17 Compliance and Jurisdictional Controls</h2>
          <p>
            Equity operates across platform, payment, crypto, consumer, tax,
            and data protection environments that may vary by jurisdiction.
          </p>
          <p>
            Certain features may be restricted, delayed, modified, or
            unavailable depending on:
          </p>
          <ul>
            <li>user location;</li>
            <li>age;</li>
            <li>payment processor requirements;</li>
            <li>crypto-asset rules;</li>
            <li>marketplace rules;</li>
            <li>KYC/AML requirements;</li>
            <li>tax obligations;</li>
            <li>sanctions restrictions;</li>
            <li>platform terms;</li>
            <li>legal review.</li>
          </ul>
          <p>
            The Company may require additional verification, limit access,
            restrict transfers, disable features, or block participation where
            required for compliance, safety, fraud prevention, or platform
            compatibility.
          </p>
          <p>
            Participants are responsible for understanding and complying with
            laws applicable to their own participation, taxes, wallets,
            transfers, trades, and asset ownership.
          </p>

          <h2>1.18 Legal & Risk Disclosure</h2>
          <p>
            Equity is a for-profit platform operating a multi-layer economy
            that may include internal credits, fiat-purchased platform credits,
            digital assets, crypto assets, market activity, and user-to-user
            economic behavior.
          </p>
          <p>Participants acknowledge that:</p>
          <ul>
            <li>participation involves risk;</li>
            <li>crypto assets may be volatile or illiquid;</li>
            <li>assets may lose value;</li>
            <li>assets may lose utility;</li>
            <li>markets may fail;</li>
            <li>platforms may change or revoke access;</li>
            <li>wallets may be compromised;</li>
            <li>smart contracts may contain vulnerabilities;</li>
            <li>taxes may apply;</li>
            <li>legal requirements may vary by jurisdiction;</li>
            <li>supported features may change.</li>
          </ul>
          <p>
            Nothing in Equity constitutes financial, investment, legal, or tax
            advice.
          </p>
          <p>
            Nothing guarantees profit, appreciation, liquidity, yield,
            redemption, continuous access, or continuous utility.
          </p>

          <h2>1.19 Closing Summary</h2>
          <p>
            Equity is a cross-platform economy and ownership layer built on
            enforced scarcity, markets, signal-based reward issuance, digital
            asset ownership, and portability.
          </p>
          <p>
            It exists because digital time should not vanish into closed
            platforms.
          </p>
          <p>
            Equity enables activity to become signal, signal to become access,
            access to become assets, and assets to persist beyond individual
            sessions, servers, and platforms.
          </p>
          <p>
            Equity does not promise outcomes. It provides infrastructure where
            value can be earned, contested, owned, traded, rented, lent, built
            upon, and carried forward under defined rules.
          </p>
          <blockquote className="docs-callout">
            <p>Digital time should <span className='color-accent'>matter</span>.</p>
            <p>Digital effort should be <span className='color-accent'>legible</span>.</p>
            <p>Digital ownership should be <span className='color-accent'>real</span>.</p>
          </blockquote>

        </article>
      </div>
    </main>
  )
}

export default Whitepaper

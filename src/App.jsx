import { useState } from "react";
import {
  assistantCards,
  campusCards,
  gameCards,
  sectionNav,
  socialCards,
} from "./data";

function Logo() {
  return (
    <a className="logo" href="#hero">
      <span className="logo-mark">W</span>
      <span className="logo-word">WeGame</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-main">
        <Logo />

        <nav className="desktop-nav">
          <a className="is-current" href="#hero">首页</a>
          <a href="#games">商店</a>
          <a href="#download">开发者平台 <span className="nav-chevron" /></a>
        </nav>

        <form className="search-box" onSubmit={(event) => event.preventDefault()}>
          <input placeholder="三国杀创玩节火热开启" />
          <button type="submit" title="Search"><span className="header-search-icon" /></button>
        </form>

        <div className="header-tools">
          <button className="header-icon-button history-icon" title="Update Log" />
          <button className="header-icon-button message-icon" title="Help and Feedback" />
          <button className="client-link"><span className="download-client-icon" /> 下载客户端</button>
          <button className="login-button"><span className="login-user-icon" /> 登录</button>
        </div>
      </div>

      <button
        className="menu-button"
        title="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="mobile-nav" className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}>
        {sectionNav.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>
        ))}
        <button onClick={closeMenu}>下载客户端</button>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="page-section hero-section wegame-hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-vignette" />
      <div className="hero-grid" />
      <div className="hero-title-mark">
        <span>3.0</span>
        <h1>轻装上阵</h1>
      </div>
      <button className="hero-download-button">
        <span>↓</span> 下载客户端 3.0
      </button>
    </section>
  );
}

function GamesSection() {
  return (
    <section id="games" className="page-section games-section wegame-games">
      <div className="floating-games">
        {gameCards.map((game) => (
          <article
            className={`floating-game-card ${game.position}`}
            key={game.title}
            style={{
              "--card-color": game.color,
              backgroundImage: `url(${game.image})`,
            }}
          >
            <div>
              <span>{game.tag}</span>
              <strong>{game.title}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="games-center-copy">
        <h2>大作云集</h2>
        <p>总有新东西</p>
        <div className="fresh-button fresh-word-rotator">
          <div className="fresh-word-track">
            <span>尝新鲜的</span>
            <span>找热门的</span>
            <span>玩经典的</span>
            <span>尝新鲜的</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientSection() {
  return (
    <section id="client" className="page-section client-section section-frame">
      <div className="section-frame-panel update">
        <div className="frame-copy">
          <p className="section-kicker">02 · 焕新客户端</p>
          <h2>轻盈焕新</h2>
          <p>更清晰，更快速，更沉浸</p>
        </div>

        <div className="frame-code-lines" />
        <div className="frame-refresh-light" />

        <div className="client-panel frame-block frame-block--update">
          <div className="window-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="client-layout">
            <aside>
              <span className="active-dot" />
              <span />
              <span />
              <span />
            </aside>
            <div className="client-main">
              <div className="client-search-bar" />
              <div className="library-card wide" />
              <div className="library-grid">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>

        <button className="frame-download-button">立即体验 3.0</button>
      </div>
    </section>
  );
}

function AssistantSection() {
  return (
    <section id="assistant" className="page-section assistant-section">
      <div className="section-copy centered">
        <p className="section-kicker">03 · 游戏助手</p>
        <h2>把有用的信息放在玩家手边</h2>
        <p>
          这一段模拟 WeGame 的工具能力：资讯、修复、加速、消息提醒。交互复杂度不高，但结构完整。
        </p>
      </div>

      <div className="assistant-grid">
        {assistantCards.map((card, index) => (
          <article className="assistant-card highlight-box" key={card.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section id="social" className="page-section social-section">
      <div className="section-copy">
        <p className="section-kicker">04 · 开黑组队</p>
        <h2>从启动游戏，到找到队友</h2>
        <p>
          用卡片模拟组队房间和社区动态，让页面不只是静态海报，而是有产品功能的感觉。
        </p>
      </div>

      <div className="social-board">
        {socialCards.map((card, index) => (
          <article className="social-card highlight-box" key={card.title}>
            <div className="avatar-stack">
              <span />
              <span />
              <span />
            </div>
            <strong>{card.title}</strong>
            <p>{card.meta}</p>
            <small>{index + 2} 位玩家在线</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function CampusSection() {
  return (
    <section id="campus" className="page-section campus-section">
      <div className="section-copy centered">
        <p className="section-kicker">05 · 高校社区</p>
        <h2>校园玩家的专属入口</h2>
        <p>
          高校认证、排行榜和社团活动可以作为加分项方向。这里先完成可响应的视觉模块。
        </p>
      </div>

      <div className="campus-grid">
        {campusCards.map((card) => (
          <article className="campus-card highlight-box" key={card}>
            <span>{card}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="download-section section-more">
      <div className="gameroll">
        <div className="gameroll-group">
          <div className="gameroll-item" />
        </div>
        <div className="gameroll-group">
          <div className="gameroll-item" />
        </div>
      </div>

      <div className="section-more-mask" />
      <div className="section-more-logo" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-main">
          <section className="footer-column footer-downloads">
            <h3>下载客户端</h3>
            <a href="#hero"><span>⊞</span>Windows版</a>
            <a href="#hero"><span>▣</span>Mac版（测试版）</a>
          </section>

          <section className="footer-column footer-channels">
            <h3>官方渠道</h3>
            <a href="#hero"><span>●</span>微信</a>
            <a href="#hero"><span>◉</span>微博</a>
            <a href="#hero"><span>▣</span>bilibili</a>
          </section>

          <section className="footer-column footer-friends">
            <h3>友情链接</h3>
            <div className="friend-links">
              <a href="#hero">INDIENOVA</a>
              <a href="#hero">腾讯GWB</a>
              <a href="#hero">腾讯动漫</a>
              <a href="#hero">腾讯视频</a>
            </div>
          </section>

          <div className="footer-brand" />
        </div>

        <div className="footer-legal">
          <nav>
            <a href="#hero">关于腾讯</a><i />
            <a href="#hero">服务条款</a><i />
            <a href="#hero">软件许可及服务协议</a><i />
            <a href="#hero">隐私保护指引</a><i />
            <a href="#hero">儿童隐私保护指引</a><i />
            <a href="#hero">网络游戏行业防沉迷自律公约</a><i />
            <a href="#hero">侵权通知</a><i />
            <a href="#hero">广告服务</a><i />
            <a href="#hero">腾讯招聘</a><i />
            <a href="#hero">客服中心</a><i />
            <a href="#hero">联系我们</a>
          </nav>
          <p>ICP备案号：粤B2-20090059-376&nbsp;&nbsp;|&nbsp;&nbsp;🛡️ 粤公网安备 44030502008701号</p>
          <p>COPYRIGHT © 2017 – 2026 TENCENT. ALL RIGHTS RESERVED.</p>
          <p>腾讯公司 版权所有</p>
        </div>
      </div>
    </footer>
  );
}

function SectionRail({ activeId }) {
  return (
    <nav className="section-rail">
      {sectionNav.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={activeId === section.id ? "is-active" : ""}
          title={`Go to ${section.label}`}
        >
          <span>{String(index).padStart(2, "0")}</span>
        </a>
      ))}
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GamesSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}

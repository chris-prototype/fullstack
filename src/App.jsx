export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="topbar__brand">My App</div>
        <nav className="topbar__nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <p className="eyebrow">Welcome</p>
          <h1>Simple full-stack app</h1>
          <p>
            This page has a fixed top navigation bar that stays visible while you scroll.
          </p>
        </section>

        <section className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </main>
    </>
  );
}

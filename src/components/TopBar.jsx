export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__brand">My App</div>
      <nav className="topbar__nav" aria-label="Main navigation">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

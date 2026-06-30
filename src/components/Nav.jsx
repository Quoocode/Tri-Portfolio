export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__in">
        <a href="#about" className="nav__logo">
          Minh Tri <span className="s">.</span>
        </a>

        <div className="nav__links">
          <a href="#about">About Me</a>
          <a href="#resume">My Resume</a>
          <a href="#projects">My Projects</a>
          <a href="#tiktok">TikTok</a>
          <a href="#community">Community</a>
          <a href="#rhythm">My Rhythm</a>
          <a href="#why">Why RMIT</a>
        </div>
      </div>
    </nav>
  );
}
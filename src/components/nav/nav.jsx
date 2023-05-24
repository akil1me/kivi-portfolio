import "./nav.scss";

const navList = ["Company", "Services", "Portfolio", "Careers", "Contact"];

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navList.map((item, index) => (
          <li className="nav__item" key={index}>
            <a className="nav__link link-hover" href="#link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

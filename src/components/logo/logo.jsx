import "./logo.scss";

export const Logo = ({ className = "" }) => {
  return (
    <a className={`logo ${className}`} href="/">
      {"Kivi".split("").map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </a>
  );
};

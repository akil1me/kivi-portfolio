import "./logo.scss";

export const Logo = ({ className = "" }) => {
  return (
    <a className={`logo ${className}`} href="/">
      Kivi
    </a>
  );
};

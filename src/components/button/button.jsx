import "./button.scss";

export const Button = ({
  children,
  className = "",
  color = "",
  hover,
  bg = "",
  bgLine ="",
}) => {
  return (
    <button
      className={`button ${className}`}
      style={{
        "--color": color,
        "--hover": hover,
        "--bg": bg,
        "--bgLine": bgLine,
      }}
    >
      <span className="button__line"></span>
      <span className="button__line"></span>
      <span className="button__line"></span>
      <span className="button__line"></span>
      <p className="button__text">{children}</p>
    </button>
  );
};

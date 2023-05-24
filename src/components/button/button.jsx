import "./button.scss";

export const Button = ({ children, className = "", color = "" }) => {
  return (
    <button className={`button ${className}`} style={{ "--color": color }}>
      <span className="button__line"></span>
      <span className="button__line"></span>
      <span className="button__line"></span>
      <span className="button__line"></span>
      <p className="button__text">{children}</p>
    </button>
  );
};

import PropTypes from "prop-types";

export function Button({ color, children, onClick }) {
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: { color },
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {" "}
      {children}
    </button>
  );
}
Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

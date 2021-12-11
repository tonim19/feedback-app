import PropTypes from "prop-types";

const Button = ({ type, children, version, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  version: "primary",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  version: PropTypes.string,
};

export default Button;

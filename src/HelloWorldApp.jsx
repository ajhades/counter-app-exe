import PropTypes from "prop-types";

export const HelloWorldApp = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

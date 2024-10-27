import PropTypes from 'prop-types';

export const HelloWorldApp = ({title, subtitle}) => {
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </>
  );
};

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

HelloWorldApp.defaultProps = {
  title: 'Hello, World!',
  subtitle: 'Welcome to this wonderful app!',
}
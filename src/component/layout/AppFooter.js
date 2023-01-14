import PropTypes from 'prop-types';

const AppFooter = ({ footerText }) => {
  return (
    <footer className='text-center p-1 text-white bg-success w-100'>
      <small>&copy; {footerText}</small>
    </footer>
  );
};

AppFooter.propTypes = {
  footerText: PropTypes.string.isRequired,
};

export default AppFooter;

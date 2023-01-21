import PropTypes from 'prop-types';
import './AppFooter.css';

const AppFooter = ({ footerText }) => {
  return (
    <footer className='text-center p-1  w-100'>
      <small>&copy; {footerText}</small>
    </footer>
  );
};

AppFooter.propTypes = {
  footerText: PropTypes.string.isRequired,
};

export default AppFooter;

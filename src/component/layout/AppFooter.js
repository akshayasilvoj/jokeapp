import PropTypes from 'prop-types';
import styled from 'styled-components';

const Footer = styled.footer`
  color: #eae7b1;
  text-align: center;
  background-color: #3c6255;
  padding: 1px;
  width: 100%;
`;

const AppFooter = ({ footerText }) => {
  return (
    <Footer>
      <small>&copy; {footerText}</small>
    </Footer>
  );
};

AppFooter.propTypes = {
  footerText: PropTypes.string.isRequired,
};

export default AppFooter;

import styled from 'styled-components';

const Footer = styled.footer`
  color: #eae7b1;
  text-align: center;
  background-color: #3c6255;
  padding: 1px;
  width: 100%;
`;

const AppFooter: React.FC<{ footerText: string }> = ({ footerText }) => {
  return (
    <Footer>
      <small>&copy; {footerText}</small>
    </Footer>
  );
};

export default AppFooter;

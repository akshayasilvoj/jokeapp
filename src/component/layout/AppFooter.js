const AppFooter = ({ footerText }) => {
  return (
    <footer className='fixed-bottom text-center p-1 text-white bg-success'>
      <small>{footerText}</small>
    </footer>
  );
};

export default AppFooter;

AppFooter.defaultProps = {
  footerText: 'Debajit Mallick 2023',
};

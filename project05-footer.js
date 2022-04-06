import React from 'react';

const Footer = () => {
  let currDte = new Date();
  return (
    <footer>
      <p>Copyright &copy; {currDte.getFullYear()}</p>
    </footer>
  )
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../Text';
import '../css/Template.css';
function Footer() {
  return (
    <div className="Footer">
      <Text className="Footer-item">
        <Link to="/contact">메일문의</Link>
      </Text>
      <Text className="Footer-item">
        <Link to="/policy">개인정보 이용약관</Link>
      </Text>
      <Text className="Footer-item">
        <Link to="https://github.com/nerdchanii/wedding-card/issues">
          Github
        </Link>
      </Text>
    </div>
  );
}

export default Footer;

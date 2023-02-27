import React from 'react';
import './Footer.css';
import instLogo from './FooterPng/inst.png';
import fbLogo from './FooterPng/fb.png';
import vkLogo from './FooterPng/vk.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <p className="footer__content__text main-font-style">Наши социальные сети</p>
        <div className="footer__content__social-networks-links">
          <div className="footer__link-block">
            <div className="footer__link-icon inst-icon"><img src={instLogo} alt="" /></div>
            <p className="footer__social-network main-font-style">instagram</p>
          </div>
          <div className="footer__link-block">
            <div className="footer__link-icon"><img src={fbLogo} alt="" /></div>
            <p className="footer__social-network main-font-style">facebook</p>
          </div>
          <div className="footer__link-block">
            <div className="footer__link-icon"><img src={vkLogo} alt="" /></div>
            <p className="footer__social-network main-font-style">vkontakte</p>
          </div>
        </div>
      </div>
    </div>
  );
}

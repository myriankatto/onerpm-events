import React from 'react';
import './styles.scss';


import logoONE from '../../assets/images/LOGO_WHITE.png';
import { Icon } from '@iconify/react';
import twitterIcon from '@iconify/icons-feather/twitter';
import facebookIcon from '@iconify/icons-feather/facebook';
import instagramIcon from '@iconify/icons-feather/instagram';
import youtubeIcon from '@iconify/icons-feather/youtube';


function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        {/* <div className="footer__apoio">
          <h5>APOIO</h5>
          <div className="logos">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="footer__parceiros">
          <h5>PARCEIROS</h5>
          <div className="logos">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div> */}

        <div className="footer__realização">
          <h5>REALIZAÇÃO</h5>
          <div className="logos">
          <a href="https://www.onerpm.com/" target="_blank" rel="noopener noreferrer"><img className="logo-one" src={logoONE} alt="oneRPM" /></a>
          </div>
          <div className="social">
          <a href="https://www.youtube.com/channel/UCEjZPeHi44BbX_g9hfJUlHQ" target="_blank" rel="noopener noreferrer"><Icon width={20} icon={youtubeIcon} /></a>
          <a href="https://www.instagram.com/onerpm/" target="_blank" rel="noopener noreferrer"><Icon width={20} icon={instagramIcon} /></a>
          <a href="https://twitter.com/onerpm" target="_blank" rel="noopener noreferrer"><Icon width={20} icon={twitterIcon} /></a>
          <a href="https://www.facebook.com/onerpm" target="_blank" rel="noopener noreferrer"><Icon width={20} icon={facebookIcon} /></a>
          </div>
        </div>
        <div className="footer__final">
          <h6>© COPYRIGHT 2020 – ONERPM – TODOS OS DIREITOS RESERVADOS</h6>
          <span>CRIADO E DESENVOLVIDO POR <a href="https://www.myriankatto.com" target="_blank" rel="noopener noreferrer"><b>MYRIAN KATTO</b></a></span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

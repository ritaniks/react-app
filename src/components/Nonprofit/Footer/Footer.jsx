import React from 'react';

import Logo from '../../Header/parts/Logo';
import { ReactComponent as Facebook } from '../../../assets/img/nonprofit/social/facebook.svg';
import { ReactComponent as LinkedIn } from '../../../assets/img/nonprofit/social/linkedin.svg';

import css from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container-fluid">
        <div className="container">
          <div className={`py-4 ${css.info}`}>
            <div className={css.aboutUs}>
              <h3 className={css.title}>About Us</h3>
              <p className={css.description}>
                TimeLedger is an online and mobile application that gives
                businesses real-time feedback as to what their people are
                working on and where their labor and expenses are going.
                TimeLedger provides immediately available information about the
                return on investment you’re getting on clients, projects and
                your resources to help increase your profits.
              </p>
            </div>
            <div className={css.contactUs}>
              <h3 className={css.title}>Contact Us</h3>
              <p className={`${css.description} ${css.noWrap}`}>
                Call us
                <a className={css.contactLink} href="tel:+18002392201">
                  (800) 239-2201
                </a>
                <span className="d-flex flex-nowrap-reverse">
                  Or e-mail:
                  <a
                    className={css.contactLink}
                    href="mailto:support@timeledger.com"
                  >
                    support@timeledger.com
                  </a>
                </span>
              </p>
              <h3 className={css.title}>Follow Us</h3>
              <div className={css.wrapSocial}>
                <a href="https://www.timeledger.com/">
                  <Facebook className={css.icon} />
                </a>
                <a href="https://www.timeledger.com/">
                  <LinkedIn className={css.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <div className="container ">
          <div className="row">
            <div className={css.logo}>
              <Logo />
            </div>
            <div className={`align-self-center ${css.description}`}>
              © Copyright 2019. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

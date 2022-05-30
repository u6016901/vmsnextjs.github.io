import React from "react";
import Link from "next/link";

function TopNav() {
  return (
    <div className="page-top-bar top-bar-04">
      <div className="container">
        <div className="row row-eq-height">
          <div className="col-md-6 top-bar-left">
            <div className="top-bar-wrap">
              <div className="top-bar-info">
                <ul className="info-list">
                  <li className="info-item">
                    <Link href="tel:+6627232380" className="info-icon far fa-phone">
                      <a>(66) 02 723 2380</a>
                    </Link>
                  </li>
                  <li className="info-item">
                    <a href="mailto:info@vms.au.edu" className="info-link">
                      <i className="info-icon far fa-envelope" />
                      <span className="info-text">info@vms.au.edu</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 top-bar-right">
            <div className="top-bar-wrap">
              <div id="page-navigation-secondary" className="navigation-secondary">
                <nav className="menu menu--secondary">
                  <ul id="menu-secondary" className="menu__container sm sm-simple">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1444 level-1">
                      <Link href="/cs">
                        <a>CS</a>
                      </Link>
                      <div className="menu-item-wrap">
                        <span className="menu-item-title">CS</span>
                      </div>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1284 level-1">
                      <Link href="/it">
                        <a>IT</a>
                      </Link>
                      <div className="menu-item-wrap">
                        <span className="menu-item-title">IT</span>
                      </div>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1284 level-1">
                      <Link href="/labs">
                        <a>Laboratories</a>
                      </Link>
                      <div className="menu-item-wrap">
                        <span className="menu-item-title">IT</span>
                      </div>
                    </li>                    
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1460 level-1">
                      <Link href="/faculty">
                        <a>Faculty</a>
                      </Link>
                      <div className="menu-item-wrap">
                        <span className="menu-item-title">Faculty</span>
                      </div>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-886 level-1">
                      <Link href="/alumni">
                        <a>ALUMNI</a>
                      </Link>
                      <div className="menu-item-wrap">
                        <span className="menu-item-title">ALUMNI</span>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;

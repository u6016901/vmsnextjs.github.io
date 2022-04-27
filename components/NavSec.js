import React from "react";
import Link from "next/link";

function NavSec() {
  return (
    <div
              id="page-navigation-secondary"
              className="navigation-secondary"
            >
              <nav className="menu menu--secondary">
                  <ul id="menu-secondary" className="menu__container sm sm-simple">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1444 level-1">
                      <Link href="/cs">
                        <a>CS</a>
                      </Link>
                      <div className="menu-item-wrap">
                        
                      </div>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1284 level-1">
                      <Link href="/it">
                        <a>IT</a>
                      </Link>
                      <div className="menu-item-wrap">
                        
                      </div>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1460 level-1">
                      <Link href="/staff">
                        <a>STAFF</a>
                      </Link>
                      <div className="menu-item-wrap">
                        
                      </div>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-886 level-1">
                      <Link href="/alumni">
                        <a>ALUMNI</a>
                      </Link>
                      <div className="menu-item-wrap">
                        
                      </div>
                    </li>
                  </ul>
                </nav>
            </div>

  );
}

export default NavSec;

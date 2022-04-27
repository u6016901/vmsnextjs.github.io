import React from "react";
import Link from "next/link";

function SecondMenu() {
  return (
    <div className="page-top-bar top-bar-05">
  <div id="header-right-inner" className="header-right-inner">
    <div className="header-right-inner-content">
      <div id="page-navigation-secondary" className="navigation-secondary">
        <nav id="menu" className="menu menu--primary">
          <ul
            id="page-navigation"
            className="navigation page-navigation"
            data-smartmenus-id={16510641562693838}
          >
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1444 level-1">
              <a href="./index.html">
                <div className="menu-item-wrap">
                  <span className="menu-item-title">Home</span>
                </div>
              </a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-461 level-1">
              <a href="./news.html">
                <div className="menu-item-wrap">
                  <span className="menu-item-title">News &amp; Spotlight</span>
                </div>
              </a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-695 level-1">
              <a href="https://admissions.au.edu/">
                <div className="menu-item-wrap">
                  <span className="menu-item-title">Admissions</span>
                </div>
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-45 level-1">
              <a
                className="has-submenu"
                id="sm-16510641562693838-1"
                aria-haspopup="true"
                aria-controls="sm-16510641562693838-2"
                aria-expanded="false"
              >
                <div className="menu-item-wrap">
                  <span className="menu-item-title">Laboratories</span>
                  <span className="toggle-sub-menu"> </span>
                </div>
                <span className="sub-arrow" />
              </a>
              <ul
                className="sub-menu children simple-menu hide-animation"
                id="sm-16510641562693838-2"
                role="group"
                aria-hidden="true"
                aria-labelledby="sm-16510641562693838-1"
                aria-expanded="false"
                style={{
                  width: "20em",
                  minWidth: "10em",
                  display: "none",
                  maxWidth: "20em",
                  top: "auto",
                  left: 0,
                  marginLeft: 0,
                  marginTop: 0
                }}
              >
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1782">
                  <a href="http://isl.scitech.au.edu/">
                    <div className="menu-item-wrap">
                      <span className="menu-item-title">
                        Intelligent Systems Research Laboratory
                      </span>
                    </div>
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1066">
                  <a href="https://portal.scitech.au.edu/idl/">
                    <div className="menu-item-wrap">
                      <span className="menu-item-title">
                        Intelligent Data Analytics Research Laboratory
                      </span>
                    </div>
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1481">
                  <a href="https://portal.scitech.au.edu/dcode/">
                    <div className="menu-item-wrap">
                      <span className="menu-item-title">d*code</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  
</div>




  );
}

export default SecondMenu;

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import TopNav2 from "../components/TopNav2";
import Footer2 from "../components/Footer2";

export default function FacultyPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <title>VMS – Faculty Members</title>
      </Head>
      <>
        <div id="page" className="site">
          <div className="content-wrapper">
            <TopNav2 />
            <div id="page-title-bar" className="page-title-bar page-title-bar-02">
              <div className="page-title-bar-inner">
                <div className="page-title-bar-bg" />
                <div id="page-breadcrumb" className="page-breadcrumb">
                  <div className="container">
                    <ul className="insight_core_breadcrumb">
                      <li className="level-1 top">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li className="level-2 sub tail current">Faculty</li>
                    </ul>
                  </div>
                </div>
                <div className="page-title-bar-heading container">
                  <h1 className="heading">VMS – Faculty Members</h1>
                </div>
              </div>
            </div>
            <div className="page-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="archive-filtering-form-bar course-filtering-form-bar"></div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="page-main-content">
                    <div
                      className="ml-10 unicamp-main-post unicamp-grid-wrapper unicamp-course-category-listing unicamp-animation-zoom-in style-grid-02"
                      data-grid='{"type":"grid","columns":4,"columnsTablet":2,"columnsMobile":1,"gutter":30}'
                      data-active-columns={4}
                    >
                      <div
                        className="unicamp-grid grid-lg-4 grid-md-2 grid-sm-1 loaded"
                        style={{ position: "relative", height: 3163 }}
                      >
                        <div className="grid-sizer" style={{ width: 270 }} />
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "0%",
                            top: 0,
                            height: 583,
                          }}
                        >
                          <a href="https://portal.scitech.au.edu/songsak/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t1.jpg" alt="course-category-architecture" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">DR. SONGSAK CHANNARUKUL</h4>
                              <div className="category-types">
                                <span>Dean</span> , <span>Full-time lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "25.641%",
                            top: 0,
                            height: 583,
                          }}
                        >
                          <a href="https://portal.scitech.au.edu/thitipong/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t2.jpg" alt="course-category-biomedical-sciences" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">ASST. PROF. DR. THITIPONG TANPRASERT</h4>
                              <div className="category-types">
                                <span>Director, ISL</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "51.2821%",
                            top: 0,
                            height: 583,
                          }}
                        >
                          <a href="https://portal.scitech.au.edu/suparwat/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t3.jpg" alt="course-category-business" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">A. SUPARWAT CHAROENVIKROM</h4>
                              <div className="category-types">
                                <span>Full-time lecturer</span> , <span>Assistant Dean for Administration</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "76.9231%",
                            top: 0,
                            height: 583,
                          }}
                        >
                          <a href="about:blank#blocked" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t4.jpg" alt="course-category-design" width={480} />{" "}
                            </div>

                            <div className="category-caption">
                              <h4 className="category-name">A. TAPANAN YEOPHANTONG</h4>
                              <div className="category-types">
                                <span>Director, ISL</span> , <span>Software Engineering and Data Analytics</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "0%",
                            top: 613,
                            height: 665,
                          }}
                        >
                          <a href="https://portal.scitech.au.edu/rachsuda/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t5.jpg" alt="course-category-economy" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">ASST. PROF. DR. RACHSUDA SETTHAWONG</h4>
                              <div className="category-types">
                                <span>
                                  Graduate Director in Computer Science, and Director, Computer Science Graduate
                                  Laboratory
                                </span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "25.641%",
                            top: 613,
                            height: 665,
                          }}
                        >
                          <a href="https://portal.scitech.au.edu/paitoon/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t6.jpg" alt="course-category-education" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">ASST. PROF. DR. PAITOON PORNTRAKOON</h4>
                              <div className="category-types">
                                <span>
                                  Graduate Director in Information Technology, and Director, Information Technology
                                  Graduate Laboratory
                                </span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "51.2821%",
                            top: 613,
                            height: 665,
                          }}
                        >
                          <a href="about:blank#blocked" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t7.jpg" alt="course-category-engineering" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">A. PIYAKUL TILLAPART</h4>
                              <div className="category-types">
                                <span>Undergraduate Director in Computer Science</span>
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "76.9231%",
                            top: 613,
                            height: 665,
                          }}
                        >
                          <a href="http://portal.scitech.au.edu/benjawan" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t8.jpg" alt="course-category-health-care" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">ASST. PROF. DR. BENJAWAN SRISURA</h4>
                              <div className="category-types">
                                <span>Undergraduate Director in Information Technology</span>
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "0%",
                            top: 1308,
                            height: 583,
                          }}
                        >
                          <a href="http://portal.scitech.au.edu/kwankamol" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t9.jpg" alt="course-category-information-technology" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">DR. KWANKAMOL NONGPONG</h4>
                              <div className="category-types">
                                <span>Director, Intelligent Systems Research Laboratory</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "25.641%",
                            top: 1308,
                            height: 583,
                          }}
                        >
                          <a href="http://portal.scitech.au.edu/kiratijuta" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t10.jpg" alt="course-category-laws" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">A. KIRATIJUTA BHUMICHITR</h4>
                              <div className="category-types">
                                <span>Director, D*Code Research Laboratory</span>
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "51.2821%",
                            top: 1308,
                            height: 583,
                          }}
                        >
                          <a href="about:blank#blocked" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t11.jpg" alt="course-category-sciences" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">ASSOC. PROF. DR. PRATIT SANTIPRABHOB</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "76.9231%",
                            top: 1308,
                            height: 583,
                          }}
                        >
                          <a href="about:blank#blocked" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t12.jpg" alt="course-category-social-sciences" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">PROF. DR. GRAHAM KENNETH WINLEY</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "0%",
                            top: 1921,
                            height: 591,
                          }}
                        >
                          <a href="https://portal.scitech.au.edu/thanachai/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t13.jpg" alt="course-category-information-technology" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">ASST. PROF. DR.THANACHAI THUMTHAWATWORN</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "25.641%",
                            top: 1921,
                            height: 591,
                          }}
                        >
                          <a href="http://portal.scitech.au.edu/dobri/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t14.jpg" alt="course-category-information-technology" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">ASST. PROF. DR.DOBRI ATANASSOV BATOVSKI</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "51.2821%",
                            top: 1921,
                            height: 591,
                          }}
                        >
                          <a href="https://portal.scitech.au.edu/darun/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t15.jpg" alt="course-category-information-technology" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">ASST. PROF. DR. DARUN KESRARAT</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "76.9231%",
                            top: 1921,
                            height: 591,
                          }}
                        >
                          <a href="about:blank#blocked" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t16.jpg" alt="course-category-information-technology" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">ASST. PROF. TITIDA NOCHAI</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "0%",
                            top: 2542,
                            height: 591,
                          }}
                        >
                          <a href="https://portal.scitech.au.edu/anilkumar/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t17.jpg" alt="course-category-information-technology" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">Asst.Prof. DR. ANILKUMAR KOTHALIL GOPALAKRISHNAN</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "25.641%",
                            top: 2542,
                            height: 591,
                          }}
                        >
                          <a href="http://portal.scitech.au.edu/chayapol/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t18.jpg" alt="course-category-information-technology" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">A. CHAYAPOL MOEMENG</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "51.2821%",
                            top: 2542,
                            height: 591,
                          }}
                        >
                          <a href="https://portal.scitech.au.edu/pawut/" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t19.jpg" alt="course-category-information-technology" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">A. PAWUT SATITSUKSANOH</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                        <div
                          className="grid-item animate"
                          style={{
                            marginTop: 0,
                            width: 270,
                            marginBottom: 30,
                            position: "absolute",
                            left: "76.9231%",
                            top: 2542,
                            height: 591,
                          }}
                        >
                          <a href="about:blank#blocked" className="unicamp-box">
                            <div className="category-thumbnail unicamp-image">
                              <img src="./faculty/t20.jpg" alt="course-category-information-technology" width={480} />{" "}
                            </div>
                            <div className="category-caption">
                              <h4 className="category-name">DR. KHAING SANDAR HTUN</h4>
                              <div className="category-types">
                                <span>Full-Time Lecturer</span>{" "}
                              </div>
                              {/*
				<div className="category-description"></div>
			*/}
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* /.content-wrapper */}
        <Footer2 />

        <div
          id="page-mobile-main-menu"
          className="page-mobile-main-menu"
          data-background="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/78176451_2725184400877103_6661179704101306368_n.png"
        >
          <div className="inner">
            <div className="page-mobile-menu-header">
              <div className="page-mobile-popup-logo page-mobile-menu-logo">
                <Link href="/">
                  <img
                    src="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/dark-logo.png"
                    alt="Main"
                    width={165}
                  />
                </Link>
              </div>
              <div id="page-close-mobile-menu" className="page-close-mobile-menu">
                <div className="burger-icon burger-icon-close">
                  <span className="burger-icon-top" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
            <div className="page-mobile-menu-content">
              <ul id="mobile-menu-primary" className="menu__container">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-53 level-1">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-461 level-1">
                  <Link href="/news">
                    <a>News &amp; Spotlight</a>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-695 level-1">
                  <Link href="https://admissions.au.edu/">
                    <a>Admission</a>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-45 level-1">
                  <a>
                    <div className="menu-item-wrap">
                      <span className="menu-item-title">Laboratories</span>
                      <span className="toggle-sub-menu"> </span>
                    </div>
                  </a>
                  <ul className="sub-menu children simple-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1782">
                      <Link href="http://isl.scitech.au.edu/">
                        <a>Intelligent Systems Research Laboratory</a>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1066">
                      <Link href="https://portal.scitech.au.edu/idl/">
                        <a>Intelligent Data Analytics Research Laboratory</a>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1481">
                      <Link href="https://portal.scitech.au.edu/dcode/">
                        <a>d*code</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="unicamp-popup popup-instructor-registration"
          id="unicamp-popup-instructor-register"
          data-template="tutor/global/popup-content-instructor-registration"
        >
          <div className="popup-overlay" />
          <div className="popup-content">
            <div className="button-close-popup" />
            <div className="popup-content-wrap">
              <div className="popup-content-inner" />
            </div>
          </div>
        </div>
        <link
          rel="stylesheet"
          id="lightgallery-css"
          href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/libs/lightGallery/css/lightgallery.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-animations-css"
          href="https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/animations/animations.min.css"
          media="all"
        />
        <span id="elementor-device-mode" className="elementor-screen-only" />
        <div className="eapps-instagram-feed-popup eapps-instagram-feed eapps-widget" id="eapps-instagram-feed-popup-1">
          <div className="eapps-instagram-feed-popup-mobile-panel">
            <div className="eapps-instagram-feed-popup-mobile-panel-title" />
          </div>
          <div className="eapps-instagram-feed-popup-wrapper" eapps-link="wrapper">
            <div className="eapps-instagram-feed-popup-inner" eapps-link="inner" />
          </div>
          <div className="eapps-instagram-feed-popup-close" eapps-link="close" />
          <span className="eapps-instagram-feed-popup-scroll-indicator" eapps-link="scrollIndicator">
            <span className="eapps-instagram-feed-popup-scroll-indicator-mouse">
              <span className="eapps-instagram-feed-popup-scroll-indicator-mouse-wheel" />
            </span>
          </span>
        </div>
        <div id="powerTip" />
      </>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Main &raquo; Feed"
        href="https://unicamp.thememove.com/main/feed/"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Main &raquo; Comments Feed"
        href="https://unicamp.thememove.com/main/comments/feed/"
      />
      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="https://unicamp.thememove.com/main/wp-includes/css/dist/block-library/style.min.css"
        media="all"
      />
      <meta name="robots" content="max-image-preview:large" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Main &raquo; Feed"
        href="https://unicamp.thememove.com/main/feed/"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Main &raquo; Comments Feed"
        href="https://unicamp.thememove.com/main/comments/feed/"
      />
      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="https://unicamp.thememove.com/main/wp-includes/css/dist/block-library/style.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wc-block-vendors-style-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wc-block-style-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="rs-plugin-settings-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/revslider/public/assets/css/rs6.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="tutor-icon-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/tutor/assets/icons/css/tutor-icon.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="tutor-plyr-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/tutor/assets/packages/plyr/plyr.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="tutor-frontend-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/tutor/assets/css/tutor-front.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="perfect-scrollbar-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/perfect-scrollbar.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="perfect-scrollbar-wpc-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/custom-theme.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wooscp-frontend-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-compare/assets/css/frontend.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="woosw-frontend-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-wishlist/assets/css/frontend.css"
        media="all"
      />
      \
      <link
        rel="stylesheet"
        id="font-gordita-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/fonts/gordita/font-gordita.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="font-butler-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/fonts/butler/font-butler.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="font-awesome-pro-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/fonts/awesome/css/fontawesome-all.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="swiper-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/libs/swiper/css/swiper.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="unicamp-style-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/style.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="growl-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/libs/growl/css/jquery.growl.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="unicamp-woocommerce-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/woocommerce.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="unicamp-zoom-meetings-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/video-conferencing-zoom.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-frontend-legacy-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-frontend-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/css/frontend.min.css"
        media="all"
      />
      <>
        <link rel="stylesheet" id="elementor-post-22-css" href="./cs_files/post-22.css" media="all" />
        <link rel="stylesheet" id="elementor-pro-css" href="./cs_files/frontend.min.css" media="all" />
        <link rel="stylesheet" id="elementor-global-css" href="./cs_files/global.css" media="all" />
        <link rel="stylesheet" id="elementor-post-692-css" href="./cs_files/post-692.css" media="all" />
        <link rel="stylesheet" id="elementor-post-110-css" href="./cs_files/post-110.css" media="all" />
        <link rel="stylesheet" id="isw-frontend-css" href="./cs_files/style.css" media="all" />
        <link rel="stylesheet" id="unicamp-tutor-css" href="./cs_files/tutor-lms.min.css" media="all" />
        <link rel="stylesheet" id="unicamp-child-demo-style-css" href="./cs_files/style.css" media="all" />
        <link rel="stylesheet" id="unicamp-events-manager-css" href="./cs_files/events-manager.css" media="all" />
        <link rel="stylesheet" id="video-conferencing-with-zoom-api-css" href="./cs_files/style.min.css" media="all" />
      </>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Main » Feed"
        href="https://unicamp.thememove.com/main/feed/"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Main » Comments Feed"
        href="https://unicamp.thememove.com/main/comments/feed/"
      />
      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="https://unicamp.thememove.com/main/wp-includes/css/dist/block-library/style.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wc-block-vendors-style-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wc-block-style-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="rs-plugin-settings-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/revslider/public/assets/css/rs6.css"
        media="all"
      />
      <style
        id="rs-plugin-settings-inline-css"
        dangerouslySetInnerHTML={{ __html: "\n        #rs-demo-id {}\n    " }}
      />
      <link
        rel="stylesheet"
        id="tutor-icon-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/tutor/assets/icons/css/tutor-icon.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="tutor-plyr-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/tutor/assets/packages/plyr/plyr.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="tutor-frontend-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/tutor/assets/css/tutor-front.min.css"
        media="all"
      />
      <style id="tutor-frontend-inline-css" dangerouslySetInnerHTML={{ __html: "\n         :root {}\n    " }} />
      <style
        id="woocommerce-inline-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n        .woocommerce form .form-row .required {\n            visibility: visible;\n        }\n    ",
        }}
      />
      <link
        rel="stylesheet"
        id="perfect-scrollbar-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/perfect-scrollbar.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="perfect-scrollbar-wpc-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/custom-theme.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wooscp-frontend-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-compare/assets/css/frontend.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="woosw-frontend-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-wishlist/assets/css/frontend.css"
        media="all"
      />
      <style
        id="woosw-frontend-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n        .woosw-area .woosw-inner .woosw-content .woosw-content-bot .woosw-notice {\n            background-color: #5fbd74;\n        }\n        \n        .woosw-area .woosw-inner .woosw-content .woosw-content-bot .woosw-content-bot-inner .woosw-page a:hover,\n        .woosw-area .woosw-inner .woosw-content .woosw-content-bot .woosw-content-bot-inner .woosw-continue:hover {\n            color: #5fbd74;\n        }\n    ",
        }}
      />
      <link
        rel="stylesheet"
        id="font-gordita-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/fonts/gordita/font-gordita.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="font-butler-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/fonts/butler/font-butler.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="font-awesome-pro-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/fonts/awesome/css/fontawesome-all.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="swiper-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/libs/swiper/css/swiper.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="unicamp-style-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/style.min.css"
        media="all"
      />
      <style
        id="unicamp-style-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n         :root {\n            --unicamp-typography-body-font-family: Gordita;\n            --unicamp-typography-body-font-size: 15px;\n            --unicamp-typography-body-font-weight: 400;\n            --unicamp-typography-body-line-height: 1.87;\n            --unicamp-typography-body-letter-spacing: 0em;\n            --unicamp-typography-headings-font-family: Butler;\n            --unicamp-typography-headings-font-weight: 700;\n            --unicamp-typography-headings-line-height: 1.3;\n            --unicamp-typography-headings-letter-spacing: 0em;\n            --unicamp-color-primary: #ae152d;\n            --unicamp-color-primary-rgb: 174, 21, 45;\n            --unicamp-color-secondary: #9D2235;\n            --unicamp-color-third: #031f42;\n            --unicamp-color-text: #696969;\n            --unicamp-color-text-bit-lighten: #7e7e7e;\n            --unicamp-color-text-lighten: #ababab;\n            --unicamp-color-heading: #111;\n            --unicamp-color-link: #696969;\n            --unicamp-color-link-hover: #ae152d;\n            --unicamp-color-box-white-background: #fff;\n            --unicamp-color-box-white-border: #ededed;\n            --unicamp-color-box-grey-background: #f8f8f8;\n            --unicamp-color-box-light-grey-background: #f9f9fb;\n            --unicamp-color-box-fill-separator: #eee;\n            --unicamp-color-box-border: #eee;\n            --unicamp-color-box-border-lighten: #ededed;\n            --unicamp-color-button-text: #fff;\n            --unicamp-color-button-border: #ae152d;\n            --unicamp-color-button-background: #ae152d;\n            --unicamp-color-button-hover-text: #fff;\n            --unicamp-color-button-hover-border: #111;\n            --unicamp-color-button-hover-background: #111;\n            --unicamp-color-form-text: #696969;\n            --unicamp-color-form-border: #f5f5f5;\n            --unicamp-color-form-background: #f5f5f5;\n            --unicamp-color-form-focus-text: #111;\n            --unicamp-color-form-focus-border: #ae152d;\n            --unicamp-color-form-focus-background: #fff;\n            --unicamp-color-sub-menu-border: #ededed;\n            --unicamp-color-sub-menu-background: #fff;\n        }\n        \n        .boxed {\n            max-width: 1200px\n        }\n        \n         ::-moz-selection {\n            color: #fff;\n            background-color: #ae152d\n        }\n        \n         ::selection {\n            color: #fff;\n            background-color: #ae152d\n        }\n        \n        .primary-fill-color {\n            fill: #ae152d\n        }\n        \n        .lg-backdrop {\n            background-color: #000 !important\n        }\n        \n        .page-mobile-main-menu>.inner {\n            background-color: #3f3a64;\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-attachment: scroll;\n            background-position: top center\n        }\n    ",
        }}
      />
      <link
        rel="stylesheet"
        id="growl-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/libs/growl/css/jquery.growl.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="unicamp-woocommerce-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/woocommerce.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="unicamp-zoom-meetings-css"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp/video-conferencing-zoom.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-frontend-legacy-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-frontend-css"
        href="https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/css/frontend.min.css"
        media="all"
      />
      <style
        id="elementor-frontend-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            '\n        @font-face {\n            font-family: eicons;\n            src: url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.eot?5.10.0);\n            src: url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.eot?5.10.0#iefix) format("embedded-opentype"), url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.woff2?5.10.0) format("woff2"), url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.woff?5.10.0) format("woff"), url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.ttf?5.10.0) format("truetype"), url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.svg?5.10.0#eicon) format("svg");\n            font-weight: 400;\n            font-style: normal\n        }\n    ',
        }}
      />
      <link rel="stylesheet" id="elementor-post-22-css" href="./home/post-22.css" media="all" />
      <link rel="stylesheet" id="elementor-pro-css" href="./home/frontend.min.css" media="all" />
      <link rel="stylesheet" id="elementor-global-css" href="./home/global.css" media="all" />
      <link rel="stylesheet" id="elementor-post-2837-css" href="./home/post-2837.css" media="all" />
      <link rel="stylesheet" id="elementor-post-3023-css" href="./home/post-3023.css" media="all" />
      <link rel="stylesheet" id="isw-frontend-css" href="./home/style.css" media="all" />
      <link rel="stylesheet" id="unicamp-tutor-css" href="./home/tutor-lms.min.css" media="all" />
      <link rel="stylesheet" id="unicamp-child-demo-style-css" href="./home/style.css" media="all" />
      <link rel="stylesheet" id="unicamp-events-manager-css" href="./home/events-manager.css" media="all" />
      <link rel="stylesheet" id="video-conferencing-with-zoom-api-css" href="./home/style.min.css" media="all" />
      <link rel="https://api.w.org/" href="https://unicamp.thememove.com/main/wp-json/" />
      <link
        rel="alternate"
        type="application/json"
        href="https://unicamp.thememove.com/main/wp-json/wp/v2/pages/2837"
      />
      <link rel="canonical" href="https://unicamp.thememove.com/main/college-02/" />
      <link rel="icon" href="./home/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" href="./home/favicon-192x192.png" sizes="192x192" />
      <link
        rel="apple-touch-icon-precomposed"
        href="https://unicamp.thememove.com/main/wp-content/themes/unicamp-child-demo/assets/images/favicon/favicon-180x180.png"
      />
      <meta
        name="msapplication-TileImage"
        content="https://unicamp.thememove.com/main/wp-content/themes/unicamp-child-demo/assets/images/favicon/favicon-270x270.png"
      />
      <link rel="stylesheet" id="elementor-post-22-css" href="./alumni/post-22.css" media="all" />
      <link rel="stylesheet" id="elementor-pro-css" href="./alumni/frontend.min.css" media="all" />
      <link rel="stylesheet" id="elementor-global-css" href="./alumni/global.css" media="all" />
      <link rel="stylesheet" id="elementor-post-1458-css" href="./alumni/post-1458.css" media="all" />
      <link rel="stylesheet" id="elementor-post-110-css" href="./alumni/post-110.css" media="all" />
      <link rel="stylesheet" id="isw-frontend-css" href="./alumni/style.css" media="all" />
      <link rel="stylesheet" id="unicamp-tutor-css" href="./alumni/tutor-lms.min.css" media="all" />
      <link rel="stylesheet" id="unicamp-child-demo-style-css" href="./alumni/style.css" media="all" />
      <link rel="stylesheet" id="unicamp-events-manager-css" href="./alumni/events-manager.css" media="all" />
      <link rel="stylesheet" id="video-conferencing-with-zoom-api-css" href="./alumni/style.min.css" media="all" />
      <link rel="https://api.w.org/" href="https://unicamp.thememove.com/main/wp-json/" />
      <link
        rel="alternate"
        type="application/json"
        href="https://unicamp.thememove.com/main/wp-json/wp/v2/pages/1458"
      />
      <link rel="canonical" href="https://unicamp.thememove.com/main/alumni/" />
    </>
  );
}

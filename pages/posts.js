import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

export default function Posts() {
  return (
    <>
    <Head>
    
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="profile" href="https://gmpg.org/xfn/11" />
  <title>VMS – Post</title>
  <meta
    name="description"
    content="This page represents the demo of our senior project, VMS 2022 website. As we all know our current website is outdated and hard to maintain, so our goal is to recreate the VMS website using more advanced technologies."
  />
  <meta name="robots" content="max-image-preview:large" />
  <link rel="alternate" type="application/rss+xml" title="Main &raquo; Feed" href="https://unicamp.thememove.com/main/feed/" />
    <link rel="alternate" type="application/rss+xml" title="Main &raquo; Comments Feed" href="https://unicamp.thememove.com/main/comments/feed/" />
    <link rel='stylesheet' id='wp-block-library-css' href='https://unicamp.thememove.com/main/wp-includes/css/dist/block-library/style.min.css' media='all' />
    <link rel='stylesheet' id='wc-block-vendors-style-css' href='https://unicamp.thememove.com/main/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css' media='all' />
    <link rel='stylesheet' id='wc-block-style-css' href='https://unicamp.thememove.com/main/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css' media='all' />
    <link rel='stylesheet' id='rs-plugin-settings-css' href='https://unicamp.thememove.com/main/wp-content/plugins/revslider/public/assets/css/rs6.css' media='all' />
    <link rel='stylesheet' id='tutor-icon-css' href='https://unicamp.thememove.com/main/wp-content/plugins/tutor/assets/icons/css/tutor-icon.css' media='all' />
    <link rel='stylesheet' id='tutor-plyr-css' href='https://unicamp.thememove.com/main/wp-content/plugins/tutor/assets/packages/plyr/plyr.css' media='all' />
    <link rel='stylesheet' id='tutor-frontend-css' href='https://unicamp.thememove.com/main/wp-content/plugins/tutor/assets/css/tutor-front.min.css' media='all' />
    <link rel='stylesheet' id='perfect-scrollbar-css' href='https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/perfect-scrollbar.min.css' media='all' />
    <link rel='stylesheet' id='perfect-scrollbar-wpc-css' href='https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/custom-theme.css' media='all' />
    <link rel='stylesheet' id='wooscp-frontend-css' href='https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-compare/assets/css/frontend.css' media='all' />
    <link rel='stylesheet' id='woosw-frontend-css' href='https://unicamp.thememove.com/main/wp-content/plugins/woo-smart-wishlist/assets/css/frontend.css' media='all' />\<link rel='stylesheet' id='font-gordita-css' href='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/fonts/gordita/font-gordita.min.css' media='all' />
    <link rel='stylesheet' id='font-butler-css' href='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/fonts/butler/font-butler.min.css' media='all' />
    <link rel='stylesheet' id='font-awesome-pro-css' href='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/fonts/awesome/css/fontawesome-all.min.css' media='all' />
    <link rel='stylesheet' id='swiper-css' href='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/libs/swiper/css/swiper.min.css' media='all' />
    <link rel='stylesheet' id='unicamp-style-css' href='https://unicamp.thememove.com/main/wp-content/themes/unicamp/style.min.css' media='all' />
    <link rel='stylesheet' id='growl-css' href='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/libs/growl/css/jquery.growl.min.css' media='all' />
    <link rel='stylesheet' id='unicamp-woocommerce-css' href='https://unicamp.thememove.com/main/wp-content/themes/unicamp/woocommerce.min.css' media='all' />
    <link rel='stylesheet' id='unicamp-zoom-meetings-css' href='https://unicamp.thememove.com/main/wp-content/themes/unicamp/video-conferencing-zoom.min.css' media='all' />
    <link rel='stylesheet' id='elementor-icons-css' href='https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css' media='all' />
    <link rel='stylesheet' id='elementor-frontend-legacy-css' href='https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css' media='all' />
    <link rel='stylesheet' id='elementor-frontend-css' href='https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/css/frontend.min.css' media='all' />
    <>
  <link
    rel="stylesheet"
    id="elementor-post-22-css"
    href="./cs_files/post-22.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-pro-css"
    href="./cs_files/frontend.min.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-global-css"
    href="./cs_files/global.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-post-692-css"
    href="./cs_files/post-692.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-post-110-css"
    href="./cs_files/post-110.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="isw-frontend-css"
    href="./cs_files/style.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="unicamp-tutor-css"
    href="./cs_files/tutor-lms.min.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="unicamp-child-demo-style-css"
    href="./cs_files/style.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="unicamp-events-manager-css"
    href="./cs_files/events-manager.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="video-conferencing-with-zoom-api-css"
    href="./cs_files/style.min.css"
    media="all"
  />
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
  <style
    id="tutor-frontend-inline-css"
    dangerouslySetInnerHTML={{ __html: "\n         :root {}\n    " }}
  />
  <style
    id="woocommerce-inline-inline-css"
    dangerouslySetInnerHTML={{
      __html:
        "\n        .woocommerce form .form-row .required {\n            visibility: visible;\n        }\n    "
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
        "\n        .woosw-area .woosw-inner .woosw-content .woosw-content-bot .woosw-notice {\n            background-color: #5fbd74;\n        }\n        \n        .woosw-area .woosw-inner .woosw-content .woosw-content-bot .woosw-content-bot-inner .woosw-page a:hover,\n        .woosw-area .woosw-inner .woosw-content .woosw-content-bot .woosw-content-bot-inner .woosw-continue:hover {\n            color: #5fbd74;\n        }\n    "
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
        "\n         :root {\n            --unicamp-typography-body-font-family: Gordita;\n            --unicamp-typography-body-font-size: 15px;\n            --unicamp-typography-body-font-weight: 400;\n            --unicamp-typography-body-line-height: 1.87;\n            --unicamp-typography-body-letter-spacing: 0em;\n            --unicamp-typography-headings-font-family: Butler;\n            --unicamp-typography-headings-font-weight: 700;\n            --unicamp-typography-headings-line-height: 1.3;\n            --unicamp-typography-headings-letter-spacing: 0em;\n            --unicamp-color-primary: #ae152d;\n            --unicamp-color-primary-rgb: 174, 21, 45;\n            --unicamp-color-secondary: #9D2235;\n            --unicamp-color-third: #031f42;\n            --unicamp-color-text: #696969;\n            --unicamp-color-text-bit-lighten: #7e7e7e;\n            --unicamp-color-text-lighten: #ababab;\n            --unicamp-color-heading: #111;\n            --unicamp-color-link: #696969;\n            --unicamp-color-link-hover: #ae152d;\n            --unicamp-color-box-white-background: #fff;\n            --unicamp-color-box-white-border: #ededed;\n            --unicamp-color-box-grey-background: #f8f8f8;\n            --unicamp-color-box-light-grey-background: #f9f9fb;\n            --unicamp-color-box-fill-separator: #eee;\n            --unicamp-color-box-border: #eee;\n            --unicamp-color-box-border-lighten: #ededed;\n            --unicamp-color-button-text: #fff;\n            --unicamp-color-button-border: #ae152d;\n            --unicamp-color-button-background: #ae152d;\n            --unicamp-color-button-hover-text: #fff;\n            --unicamp-color-button-hover-border: #111;\n            --unicamp-color-button-hover-background: #111;\n            --unicamp-color-form-text: #696969;\n            --unicamp-color-form-border: #f5f5f5;\n            --unicamp-color-form-background: #f5f5f5;\n            --unicamp-color-form-focus-text: #111;\n            --unicamp-color-form-focus-border: #ae152d;\n            --unicamp-color-form-focus-background: #fff;\n            --unicamp-color-sub-menu-border: #ededed;\n            --unicamp-color-sub-menu-background: #fff;\n        }\n        \n        .boxed {\n            max-width: 1200px\n        }\n        \n         ::-moz-selection {\n            color: #fff;\n            background-color: #ae152d\n        }\n        \n         ::selection {\n            color: #fff;\n            background-color: #ae152d\n        }\n        \n        .primary-fill-color {\n            fill: #ae152d\n        }\n        \n        .lg-backdrop {\n            background-color: #000 !important\n        }\n        \n        .page-mobile-main-menu>.inner {\n            background-color: #3f3a64;\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-attachment: scroll;\n            background-position: top center\n        }\n    "
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
        '\n        @font-face {\n            font-family: eicons;\n            src: url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.eot?5.10.0);\n            src: url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.eot?5.10.0#iefix) format("embedded-opentype"), url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.woff2?5.10.0) format("woff2"), url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.woff?5.10.0) format("woff"), url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.ttf?5.10.0) format("truetype"), url(https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.svg?5.10.0#eicon) format("svg");\n            font-weight: 400;\n            font-style: normal\n        }\n    '
    }}
  />
  <link
    rel="stylesheet"
    id="elementor-post-22-css"
    href="./home/post-22.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-pro-css"
    href="./home/frontend.min.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-global-css"
    href="./home/global.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-post-2837-css"
    href="./home/post-2837.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-post-3023-css"
    href="./home/post-3023.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="isw-frontend-css"
    href="./home/style.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="unicamp-tutor-css"
    href="./home/tutor-lms.min.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="unicamp-child-demo-style-css"
    href="./home/style.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="unicamp-events-manager-css"
    href="./home/events-manager.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="video-conferencing-with-zoom-api-css"
    href="./home/style.min.css"
    media="all"
  />
  <link
    rel="https://api.w.org/"
    href="https://unicamp.thememove.com/main/wp-json/"
  />
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
  <noScript>
    &lt;style&gt;.woocommerce-product-gallery{"{"} opacity: 1 !important; {"}"}
    &lt;/style&gt;
  </noScript>



  
  
  
  


    </Head>
    <>
    <div id="page" className="site">
  <div className="content-wrapper">
    <header
      id="page-header"
      className="page-header header-01 header-dark nav-links-hover-style-01 header-sticky-dark-logo"
    >
      <div className="page-header-place-holder" />
      <div id="page-header-inner" className="page-header-inner" data-sticky={1}>
        <div className="container">
          <div className="header-wrap">
            <div className="header-left">
              <div className="header-content-inner">
                <div className="branding">
                  <div className="branding-logo-wrap">
                  <Link href="/">
                      <img
                        src="posts_files/dark-logo.png"
                        alt="Main"
                        className="branding-logo dark-logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-center">
          <div className="header-content-inner">
            <div
              id="page-navigation-secondary"
              className="navigation-secondary"
            >
              <nav className="menu menu--secondary">
                    <ul
                      id="menu-secondary"
                      className="menu__container sm sm-simple"
                    >
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1444 level-1">
                      <Link href="cs">
          <a>CS</a>
        </Link>
                          
                        
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1284 level-1">
                      <Link href="it">
          <a>IT</a>
        </Link>
                          
                        
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1460 level-1">
                      <Link href="staff">
          <a>STAFF</a>
        </Link>
                          
                        
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-886 level-1">
                      <Link href="alumni">
          <a>ALUMNI</a>
        </Link>
                          
                        
                      </li>
                    </ul>
                  </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-bottom">
      <div className="container">
        <div id="page-navigation" className="navigation page-navigation">
          <nav id="menu" className="menu menu--primary">
            <ul id="menu-primary" className="menu__container sm sm-simple">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1444 level-1">
                      <Link href="/">
          <a>Home</a>
        </Link>
        </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-461 level-1">
              <Link href="/news">
          <a>News</a>
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
          </nav>
        </div>
          </div>
        </div>
      </div>
    </header>
    <div id="page-title-bar" className="page-title-bar page-title-bar-01">
      <div className="page-title-bar-inner">
        <div className="page-title-bar-bg" />
        <div id="page-breadcrumb" className="page-breadcrumb">
          <div className="container">
            <ul className="insight_core_breadcrumb">
              <li className="level-1 top">
                <link href="/"/>Home
              </li>
              <li className="level-3 sub tail current">
                Most students pleased with their digital learning
              </li>
            </ul>
          </div>
        </div>
        <div className="page-title-bar-heading container">
          <h2 className="heading"> News and Spotlight </h2>
        </div>
      </div>
    </div>
    <div id="page-content" className="page-content">
      <div className="container">
        <div className="row">
          <div className="page-main-content">
            <div className="rich-snippet display-none">
              <h1 className="entry-title">
                Most students pleased with their digital learning
              </h1>{" "}
              <span className="published">January 23, 2021</span>
              <span className="updated" data-time="2021-04-28 8:04">
                2021-04-28 8:04
              </span>
            </div>
            <article
              id="post-100"
              className="entry-wrapper post-100 post type-post status-publish format-standard has-post-thumbnail hentry category-career category-research category-spotlight category-student-story tag-campus tag-career tag-digital-learning tag-learning-business"
            >
              <h2 className="screen-reader-text">
                Most students pleased with their digital learning
              </h2>
              <div className="entry-header featured-on">
                <div className="entry-header-featured">
                  <div className="entry-post-feature post-thumbnail">
                    <img
                      src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/01/blog-12-770x400.jpg"
                      alt="blog-12"
                      width={770}
                    />{" "}
                  </div>
                </div>
                <div className="entry-post-categories">
                  <a
                    href="https://unicamp.thememove.com/main/category/career/"
                    rel="category tag"
                  >
                    <span
                      className="cat-shape"
                      style={{ background: "#381ec3" }}
                    />
                    <span className="cat-name">Career</span>
                  </a>
                  <a
                    href="https://unicamp.thememove.com/main/category/research/"
                    rel="category tag"
                  >
                    <span
                      className="cat-shape"
                      style={{ background: "#6cbd7e" }}
                    />
                    <span className="cat-name">Research</span>
                  </a>
                  <a
                    href="https://unicamp.thememove.com/main/category/spotlight/"
                    rel="category tag"
                  >
                    <span
                      className="cat-shape"
                      style={{ background: "#d31819" }}
                    />
                    <span className="cat-name">Spotlight</span>
                  </a>
                  <a
                    href="https://unicamp.thememove.com/main/category/student-story/"
                    rel="category tag"
                  >
                    <span
                      className="cat-shape"
                      style={{ background: "#a701ad" }}
                    />
                    <span className="cat-name">Student story</span>
                  </a>{" "}
                </div>
                <h1 className="entry-title">
                  Most students pleased with their digital learning
                </h1>
                <div className="entry-post-meta">
                  <div className="post-meta-author">
                    <link href="/posts"/>
                      <span className="meta-value">Kasidit Ploenthamakhun</span>
                    
                  </div>
                  <div className="post-date">
                    <span className="meta-value">Jan 23, 2021</span>
                  </div>
                  <div className="post-view">
                    <span className="meta-value">241 views</span>
                  </div>
                  <div className="post-comments">
                    <link href="#comments" className="smooth-scroll-link"/>
                      0 comments{" "}
                    
                  </div>
                </div>
              </div>
              <div className="entry-content">
                <p>
                  Nearly seven in 10 students surveyed rate the quality of
                  online and digital learning as either &apos;best imaginable&apos;,
                  &apos;excellent&apos; or &apos;good&apos; (68% of both further and higher
                  education students).
                </p>
                <p>
                  But the snapshot findings of the Jisc survey of 27,069 higher
                  and further education students in the United Kingdom also
                  found that areas such as well-being, mental health and staff
                  digital skills need more attention.
                </p>
                <p>
                  Sarah Knight, Jisc&apos;s head of data and digital capability,
                  said: “We hope this data pulse helps universities and colleges
                  see clearly where students are benefiting, and where they
                  could be better supported.”
                </p>
                <p>
                  Between October and December 2020, 21,697 higher education
                  students and 5,372 further education students from 11
                  universities and four further education colleges took part in
                  Jisc&apos;s digital experience insights student survey.
                </p>
                <p>
                  The surveys seek to support the sector in adapting and
                  responding to the changing situation as a result of COVID-19
                  policies.
                </p>
                <p>
                  The surveys will continue to run until 30 April 2021, but this
                  first snapshot of results shows the swift work of colleges and
                  universities in moving learning online has been predominantly
                  well received by students.
                </p>
                <p>
                  Among those surveyed, 81% were studying online, 72% of them
                  from home.
                </p>
                <p>
                  Both higher education and further education students surveyed
                  noted the huge benefits of flexible learning, with lecture
                  recordings proving helpful for note-taking and scheduling
                  learning around other aspects of life. Some students enjoy the
                  comfort and convenience of studying at home, as well as
                  feeling more in control.
                </p>
                <blockquote className="wp-block-quote">
                  <p>
                    Learning online (ironically) has made it easier to get
                    support from staff. They&apos;re more likely to encourage us to
                    talk to them and it is a little easier than having to find
                    them physically on campus.
                  </p>
                </blockquote>
                <p>
                  Students enjoyed a range of different online activities and
                  were positive about being able to access lecture recordings
                  and participate live online.
                </p>
                <p>
                  Analysis of free text responses in the survey was particularly
                  revealing and highlighted how being able to watch sessions
                  again helped students to study in ways that better met their
                  learning needs, improved their understanding and encouraged
                  further independent study.
                </p>
                <p>
                  For instance, recordings enabled them to catch up if they
                  missed the live session, manage the pace and take notes. They
                  also made it easier for students for whom English is not a
                  first language to hear and understand the lecture.
                </p>
                <p>
                  Some of the more engaging activities were less well used and
                  there are opportunities to embed activities like the use of
                  small group discussions for peer support and collaboration,
                  quizzes or polls, and online research tasks into curriculum
                  design, the survey found.
                </p>
              </div>
              <div className="entry-author">
                <div className="author-info">
                  <div className="author-avatar">
                    <img
                      alt=""
                      src="/posts_files/pubb.png"
                      srcSet="/posts_files/pubb.png 2x"
                      className="avatar avatar-100 photo"
                      height={100}
                      width={100}
                      loading="lazy"
                    />
                    <div className="author-social-networks">
                      <div className="inner">
                        {" "}
                        <a
                          className="hint--bounce hint--top hint--primary"
                          aria-label="Twitter"
                          href="#"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          className="hint--bounce hint--top hint--primary"
                          aria-label="Facebook"
                          href="#"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          className="hint--bounce hint--top hint--primary"
                          aria-label="Instagram"
                          href="#"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                        <a
                          className="hint--bounce hint--top hint--primary"
                          aria-label="Youtube"
                          href="#"
                          target="_blank"
                        >
                          <i className="fab fa-youtube" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                  <div className="author-description">
                    <h5 className="author-name">Kasidit Ploenthamakhun</h5>
                    <div className="author-biographical-info">
                      Kasidit Ploenthamakhun is an author, blogger, and designer
                      living in a suburb of Bangkok. When he&apos;s not designing,
                      blogging, or writing, Kasidit can be found with her head
                      in a book or pinning like a madman.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-nav-links">
                <div className="nav-list">
                  <div className="nav-item prev">
                    <div className="inner">
                      <link href="#" rel="prev"/>
                        <div
                          className="hover-bg has-thumbnail"
                          style={{
                            backgroundImage:
                              "url(https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/01/blog-11-370x120.jpg)"
                          }}
                        />
                        <h6>Gender inequality in higher education persists</h6>
                      {" "}
                    </div>
                  </div>
                  <div className="nav-item next">
                    <div className="inner">
                      <link href="#" rel="next"/>
                        <div
                          className="hover-bg has-thumbnail"
                          style={{
                            backgroundImage:
                              "url(https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/blog-13-370x120.jpg)"
                          }}
                        />
                        <h6>
                          Most students say their mental health suffered in
                          pandemic
                        </h6>
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="related-posts unicamp-blog unicamp-animation-zoom-in unicamp-blog-caption-style-01">
                <h3 className="related-title box-title-with-separator">
                  Related Posts{" "}
                </h3>
                <div
                  className="tm-swiper tm-slider v-stretch bullets-v-align-below nav-style-01 pagination-style-01"
                  data-lg-items="auto"
                  data-lg-gutter={30}
                  data-nav={1}
                  data-auto-height={1}
                >
                  <div className="swiper-inner">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="related-post-item post-1862 post type-post status-publish format-standard has-post-thumbnail hentry category-alumni category-research tag-alumni tag-campus tag-career tag-research">
                            <div className="post-wrapper unicamp-box">
                              <div className="post-feature post-thumbnail unicamp-image">
                                <link href="#"/>
                                  <img
                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/blog-14-240x150.jpg"
                                    alt="blog-14"
                                    width={240}
                                  />{" "}
                                
                              </div>
                              <div className="post-caption">
                                <h3 className="post-title post-title-2-rows">
                                  <link href="#"/>
                                    Autism rates have increased and show
                                    differences in ethnic minorities
                                  
                                </h3>
                                <div className="post-meta">
                                  <div className="inner">
                                    <div className="post-date">
                                      <span className="meta-value">
                                        Mar 17, 2021
                                      </span>
                                    </div>
                                    <div className="post-view">
                                      <span className="meta-value">
                                        353 views
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="related-post-item post-1745 post type-post status-publish format-standard has-post-thumbnail hentry category-student-life category-student-story tag-campus tag-career tag-health tag-life tag-pandemic">
                            <div className="post-wrapper unicamp-box">
                              <div className="post-feature post-thumbnail unicamp-image">
                                <link href="#"/>
                                  <img
                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/blog-13-240x150.jpg"
                                    alt="blog-13"
                                    width={240}
                                  />{" "}
                                
                              </div>
                              <div className="post-caption">
                                <h3 className="post-title post-title-2-rows">
                                  <link href="#"/>
                                    Most students say their mental health
                                    suffered in pandemic
                                  
                                </h3>
                                <div className="post-meta">
                                  <div className="inner">
                                    <div className="post-date">
                                      <span className="meta-value">
                                        Jan 25, 2021
                                      </span>
                                    </div>
                                    <div className="post-view">
                                      <span className="meta-value">
                                        266 views
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="related-post-item post-97 post type-post status-publish format-standard has-post-thumbnail hentry category-research category-student-life tag-campus tag-career tag-life">
                            <div className="post-wrapper unicamp-box">
                              <div className="post-feature post-thumbnail unicamp-image">
                                <link href="#"/>
                                  <img
                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/01/blog-11-240x150.jpg"
                                    alt="blog-11"
                                    width={240}
                                  />{" "}
                                
                              </div>
                              <div className="post-caption">
                                <h3 className="post-title post-title-2-rows">
                                  <link href="#"/>
                                    Gender inequality in higher education
                                    persists
                                  
                                </h3>
                                <div className="post-meta">
                                  <div className="inner">
                                    <div className="post-date">
                                      <span className="meta-value">
                                        Jan 22, 2021
                                      </span>
                                    </div>
                                    <div className="post-view">
                                      <span className="meta-value">
                                        217 views
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="related-post-item post-1865 post type-post status-publish format-standard has-post-thumbnail hentry category-alumni category-spotlight category-student-life category-student-story tag-activities tag-alumni tag-campus tag-career">
                            <div className="post-wrapper unicamp-box">
                              <div className="post-feature post-thumbnail unicamp-image">
                                <link href="#"/>
                                  <img
                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/blog-15-240x150.jpg"
                                    alt="blog-15"
                                    width={240}
                                  />{" "}
                                
                              </div>
                              <div className="post-caption">
                                <h3 className="post-title post-title-2-rows">
                                  <link href="#"/>
                                    University of Cambridge commits to a major
                                    new centre for music performance
                                  
                                </h3>
                                <div className="post-meta">
                                  <div className="inner">
                                    <div className="post-date">
                                      <span className="meta-value">
                                        Jan 21, 2021
                                      </span>
                                    </div>
                                    <div className="post-view">
                                      <span className="meta-value">
                                        122 views
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="related-post-item post-94 post type-post status-publish format-standard has-post-thumbnail hentry category-alumni category-spotlight category-student-life tag-campus tag-career tag-learning-business">
                            <div className="post-wrapper unicamp-box">
                              <div className="post-feature post-thumbnail unicamp-image">
                                <link href="/posts"/>
                                  <img
                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/01/blog-10-240x150.jpg"
                                    alt="blog-10"
                                    width={240}
                                  />{" "}
                                
                              </div>
                              <div className="post-caption">
                                <h3 className="post-title post-title-2-rows">
                                  <link href="/posts"/>
                                    9 Top Tips On How To Get A First Class
                                    Degree At University
                                  
                                </h3>
                                <div className="post-meta">
                                  <div className="inner">
                                    <div className="post-date">
                                      <span className="meta-value">
                                        Jan 21, 2021
                                      </span>
                                    </div>
                                    <div className="post-view">
                                      <span className="meta-value">
                                        164 views
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="comments" className="comments-area">
                <div className="comment-form-wrap">
                  <div id="respond" className="comment-respond">
                    <h3
                      id="reply-title"
                      className="comment-reply-title box-title-with-separator"
                    >
                      Leave your thought here{" "}
                      <small>
                        <a
                          rel="noreferrer"
                          id="cancel-comment-reply-link"
                          href="/main/most-students-pleased-with-their-digital-learning/#respond"
                          style={{ display: "none" }}
                        >
                          Cancel reply
                        </a>
                      </small>
                    </h3>
                    <form
                      action="https://unicamp.thememove.com/main/wp-comments-post.php"
                      method="post"
                      id="commentform"
                      className="comment-form"
                      noValidate=""
                    >
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>{" "}
                        Required fields are marked{" "}
                        <span className="required">*</span>
                      </p>
                      <div className="row">
                        <div className="col-sm-6 comment-form-author">
                          <input
                            id="author"
                            placeholder="Your Name *"
                            name="author"
                            type="text"
                            defaultValue=""
                            size={30}
                            aria-required="true"
                          />
                        </div>
                        <div className="col-sm-6 comment-form-email">
                          <input
                            id="email"
                            placeholder="Your Email *"
                            name="email"
                            type="text"
                            defaultValue=""
                            size={30}
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 comment-form-comment">
                          <textarea
                            id="comment"
                            placeholder="Your Comment"
                            name="comment"
                            aria-required="true"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <p className="comment-form-cookies-consent">
                        <input
                          id="wp-comment-cookies-consent"
                          name="wp-comment-cookies-consent"
                          type="checkbox"
                          defaultValue="yes"
                        />{" "}
                        <label htmlFor="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>
                      <p className="form-submit">
                        <input
                          name="submit"
                          type="submit"
                          id="submit"
                          className="submit"
                          defaultValue="Submit"
                        />{" "}
                        <input
                          type="hidden"
                          name="comment_post_ID"
                          defaultValue={100}
                          id="comment_post_ID"
                        />
                        <input
                          type="hidden"
                          name="comment_parent"
                          id="comment_parent"
                          defaultValue={0}
                        />
                      </p>
                    </form>{" "}
                  </div>
                  {/* #respond */}
                </div>
              </div>
            </article>
          </div>
          <div className="page-sidebar page-sidebar-right">
            <div
              className="page-sidebar-inner tm-sticky-column"
              itemScope="itemscope"
            >
              <div className="page-sidebar-content">
                <div
                  id="categories-3"
                  className="widget-even widget-2 widget widget_categories"
                >
                  <p className="widget-title heading">
                    <span>Categories</span>
                  </p>
                  <ul>
                    <li className="cat-item cat-item-26">
                      Admission <span className="count">(6)</span>
                    </li>
                    <li className="cat-item cat-item-50">
                      Alumni <span className="count">(11)</span>
                    </li>
                    <li className="cat-item cat-item-24">
                      Career <span className="count">(4)</span>
                    </li>
                    <li className="cat-item cat-item-22">
                      Research <span className="count">(7)</span>
                    </li>
                    <li className="cat-item cat-item-23">
                      Spotlight <span className="count">(7)</span>
                    </li>
                    <li className="cat-item cat-item-25">
                      Student life <span className="count">(12)</span>
                    </li>
                    <li className="cat-item cat-item-51">
                      Student story <span className="count">(6)</span>
                    </li>
                  </ul>
                </div>
                <div
                  id="elementor-library-2"
                  className="widget-odd widget-3 widget-no-style widget widget_elementor-library"
                >
                  {" "}
                  <div
                    data-elementor-type="section"
                    data-elementor-id={32}
                    className="elementor elementor-32"
                    data-elementor-settings="[]"
                  ></div>
                </div>
                <div
                  className="elementor-element elementor-element-fb96db3 elementor-widget elementor-widget-tm-button"
                  data-id="fb96db3"
                  data-element_type="widget"
                  data-widget_type="tm-button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="tm-button-wrapper">
                      <a
                        href="#"
                        className="tm-button-link tm-button style-thick-border tm-button-nm"
                        role="button"
                      >
                        <div className="button-content-wrapper">
                          <span className="button-text">Become a donor</span>
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
  </div>
</div>


  {/* /.content-wrapper */}
  <div id="page-footer-wrapper" className="page-footer-wrapper">
    <div className="page-footer elementor-footer" id="page-footer">
      <div
        data-elementor-type="footer"
        data-elementor-id={110}
        className="elementor elementor-110 elementor-location-footer"
        data-elementor-settings="[]"
      >
        <div className="elementor-section-wrap">
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-d836f75 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
            data-id="d836f75"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
          >
            <div className="elementor-container elementor-column-gap-extended">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3352a6b"
                  data-id="3352a6b"
                  data-element_type="column"
                >
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-6c06c2e elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="6c06c2e"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-64eb365"
                              data-id="64eb365"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-3e5c75b elementor-widget elementor-widget-image"
                                    data-id="3e5c75b"
                                    data-element_type="widget"
                                    data-widget_type="image.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-image">
                                      <Link href="/">
        
                                          <img

                                            src="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/light-logo(1).png"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-988f261 elementor-widget elementor-widget-tm-heading"
                                    data-id="988f261"
                                    data-element_type="widget"
                                    data-widget_type="tm-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-modern-heading">
                                        <div className="heading-primary-wrap">
                                          <div className="heading-primary elementor-heading-title">
                                            VMS transforms lives through
                                            accessible, student-centered,
                                            high-quality education and meets
                                            learners&apos; needs for a lifetime.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-92edb1d elementor-widget elementor-widget-tm-social-networks"
                                    data-id="92edb1d"
                                    data-element_type="widget"
                                    data-widget_type="tm-social-networks.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-social-networks style-large-icons layout-inline">
                                        <ul className="list">
                                          <li className="item elementor-repeater-item-a4ebc41">
                                            <a
                                              className="link hint--bounce hint--top-right hint--white"
                                              aria-label="Twitter"
                                              href="https://twitter.com/assumptionu?lang=en"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              <i className="link-icon fab fa-twitter" />{" "}
                                            </a>
                                          </li>
                                          <li className="item elementor-repeater-item-3a62d63">
                                            <a
                                              className="link hint--bounce hint--top-right hint--white"
                                              aria-label="Facebook"
                                              href="https://www.facebook.com/vms.au.edu/"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              <i className="link-icon fab fa-facebook-f" />{" "}
                                            </a>
                                          </li>
                                          <li className="item elementor-repeater-item-5840c98">
                                            <a
                                              className="link hint--bounce hint--top-right hint--white"
                                              aria-label="Instagram"
                                              href="https://www.instagram.com/accounts/login/?next=/vms.sc/"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              <i className="link-icon fab fa-instagram" />{" "}
                                            </a>
                                          </li>
                                          <li className="item elementor-repeater-item-ecbdfc2">
                                            <a
                                              className="link hint--bounce hint--top-right hint--white"
                                              aria-label="Youtube Chanel"
                                              href="https://www.youtube.com/channel/UCBArL_dL5XiXCiS5pDtyLpQ"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              <i className="link-icon fab fa-youtube" />{" "}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-0995bef elementor-widget elementor-widget-spacer"
                                    data-id="0995bef"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-b67d2aa"
                              data-id="b67d2aa"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-8fd6ff6 elementor-widget elementor-widget-tm-heading"
                                    data-id="8fd6ff6"
                                    data-element_type="widget"
                                    data-widget_type="tm-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-modern-heading">
                                        <div className="heading-primary-wrap">
                                          <h4 className="heading-primary elementor-heading-title">
                                            Get in touch
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-6256ffa unicamp-link-animate-border-02 elementor-widget elementor-widget-tm-heading"
                                    data-id="6256ffa"
                                    data-element_type="widget"
                                    data-widget_type="tm-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-modern-heading">
                                        <div className="heading-primary-wrap">
                                          <div className="heading-primary elementor-heading-title">
                                            <link href="tel:66023004543"/>
                                              <mark>(66) 02 300 4543</mark>
                                            
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-4e6661f elementor-widget elementor-widget-tm-heading"
                                    data-id="4e6661f"
                                    data-element_type="widget"
                                    data-widget_type="tm-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-modern-heading">
                                        <div className="heading-primary-wrap">
                                          <div className="heading-primary elementor-heading-title">
                                            88 Moo 8 Bang Na-Trad Km. 26 Bang
                                            Sao Thong, Samut Prakan 10570,
                                            Thailand
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-77afafd elementor-widget elementor-widget-spacer"
                                    data-id="77afafd"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-8945ba8"
                              data-id="8945ba8"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                <div
                                    className="elementor-element elementor-element-56f8ba6 elementor-widget elementor-widget-tm-heading"
                                    data-id="56f8ba6"
                                    data-element_type="widget"
                                    data-widget_type="tm-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-modern-heading">
                                        <div className="heading-primary-wrap">
                                          <h4 className="heading-primary elementor-heading-title">
                                            Links
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-95e9817 unicamp-list-layout-block elementor-widget elementor-widget-tm-list"
                                    data-id="95e9817"
                                    data-element_type="widget"
                                    data-widget_type="tm-list.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="unicamp-list">
                                        <div className="item elementor-repeater-item-de25e53">
                                        <Link href="/staff">
          <a>STAFF</a>
        </Link>
                                        </div>
                                        <div className="item elementor-repeater-item-4f48939">
                                        <Link href="/news">
          <a>News &amp; Spotlight</a>
        
      
            </Link>
                                        </div>
                                        <div className="item elementor-repeater-item-882f063">
                                        <Link href="/alumni">
          <a>Alumni</a>
        
      
            </Link>
                                        </div>
                                        <div className="item elementor-repeater-item-9052523">
                                        <Link href="/cs">
          <a>CS</a>
        
      
            </Link>
                                        </div>
                                        <div className="item elementor-repeater-item-450b61a">
                                        <Link href="/it">
          <a>IT</a>
        
      
            </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="elementor-element elementor-element-832f692 elementor-widget elementor-widget-spacer"
                                    data-id="832f692"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-23d0400 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="23d0400"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5f563e9"
                              data-id="5f563e9"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-233eba6 elementor-widget elementor-widget-tm-heading"
                                    data-id="233eba6"
                                    data-element_type="widget"
                                    data-widget_type="tm-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-modern-heading">
                                        <div className="heading-primary-wrap">
                                          <div className="heading-primary elementor-heading-title">
                                            © 2022 Vincent Mary School of
                                            Science and Technology
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>



  
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
          <Link href="https://unicamp.thememove.com/main/admissions/">
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
  <div
    className="eapps-instagram-feed-popup eapps-instagram-feed eapps-widget"
    id="eapps-instagram-feed-popup-1"
  >
    <div className="eapps-instagram-feed-popup-mobile-panel">
      <div className="eapps-instagram-feed-popup-mobile-panel-title" />
    </div>
    <div className="eapps-instagram-feed-popup-wrapper" eapps-link="wrapper">
      <div className="eapps-instagram-feed-popup-inner" eapps-link="inner" />
    </div>
    <div className="eapps-instagram-feed-popup-close" eapps-link="close" />
    <span
      className="eapps-instagram-feed-popup-scroll-indicator"
      eapps-link="scrollIndicator"
    >
      <span className="eapps-instagram-feed-popup-scroll-indicator-mouse">
        <span className="eapps-instagram-feed-popup-scroll-indicator-mouse-wheel" />
      </span>
    </span>
  </div>
  <div id="powerTip" />
</>

  
  
</>




  )
}

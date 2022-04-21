import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'


export default function Home() {
  return (
    <>
    <Head>
    
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="profile" href="https://gmpg.org/xfn/11" />
  <title>VMS – Home</title>
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
    
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/jquery/jquery.min.js' id='jquery-core-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/jquery/jquery-migrate.min.js' id='jquery-migrate-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/plugins/revslider/public/assets/js/rbtools.min.js' id='tp-tools-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/plugins/revslider/public/assets/js/rs6.min.js' id='revmin-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/js/tutor/general.min.js' id='unicamp-course-general-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/libs/lightGallery/js/lightgallery-all.min.js' id='lightgallery-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/elementor/assets/libs/countTo/jquery.countTo.min.js' id='count-to-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/elementor/assets/js/widgets/widget-counter.js' id='unicamp-widget-counter-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/elementor/assets/js/widgets/group-widget-carousel.js' id='unicamp-group-widget-carousel-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js' id='elementor-webpack-runtime-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/js/frontend-modules.min.js' id='elementor-frontend-modules-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/share-link/share-link.min.js' id='share-link-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js' id='elementor-dialog-js'></Script>
  <Script src='./home/frontend.min.js' id='elementor-pro-frontend-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/plugins/elementor-pro/assets/js/preloaded-elements-handlers.min.js' id='pro-preloaded-elements-handlers-js'></Script>
    <Script src='./home/preloaded-modules.min.js' id='preloaded-modules-js'></Script>
    <Script src="./home/swiper-wrapper.min.js.download" id="unicamp-swiper-wrapper-js"></Script>
    <Script src="./home/jquery.smartmenus.min.js.download" id="smartmenus-js"></Script>
    <Script src="./home/jquery.growl.min.js.download" id="growl-js"></Script>
    <Script src="./home/nice-select.min.js.download" id="unicamp-nice-select-js"></Script>
    <Script id="./home/unicamp-Script-js-extra"></Script>
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/quicktags.min.js' id='quicktags-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/jquery/ui/core.min.js' id='jquery-ui-core-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/jquery/ui/mouse.min.js' id='jquery-ui-mouse-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/jquery/ui/sortable.min.js' id='jquery-ui-sortable-js'></Script>
    <Script src='./home/plyr.polyfilled.min.js' id='tutor-plyr-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/dist/vendor/regenerator-runtime.min.js' id='regenerator-runtime-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/dist/vendor/wp-polyfill.min.js' id='wp-polyfill-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/dist/hooks.min.js' id='wp-hooks-js'></Script>
    <Script src='./home/i18n.min.js' id='wp-i18n-js'></Script>
    

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

  <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/js/main.min.js' id='unicamp-script-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/js/woo/general.min.js' id='unicamp-woo-general-js'></Script>
    <Script id='isw-frontend-js-extra'></Script>

  
  
  
  


    </Head>
    <>
  <div id="page" className="site" style={{ minHeight: 509 }}>
    <div className="content-wrapper">
      <div className="page-top-bar top-bar-04">
        <div className="container">
          <div className="row row-eq-height">
            <div className="col-md-6 top-bar-left">
              <div className="top-bar-wrap">
                <div className="top-bar-info">
                  <ul className="info-list">
                    <li className="info-item">
                      <a href="tel:+8819906886" className="info-link">
                        <i className="info-icon far fa-phone" />
                        <span className="info-text">(66) 02 300 4543</span>
                      </a>
                    </li>
                    <li className="info-item">
                      <a
                        href="mailto:info@scitech.au.edu"
                        className="info-link"
                      >
                        <i className="info-icon far fa-envelope" />
                        <span className="info-text">info@scitech.au.edu</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 top-bar-right">
              <div className="top-bar-wrap">
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
                        <a href="/cs">
                          <div className="menu-item-wrap">
                            <span className="menu-item-title">CS</span>
                          </div>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1284 level-1">
                        <a href="/it">
                          <div className="menu-item-wrap">
                            <span className="menu-item-title">IT</span>
                          </div>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1460 level-1">
                        <a href="/staff">
                          <div className="menu-item-wrap">
                            <span className="menu-item-title">STAFF</span>
                          </div>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-886 level-1">
                        <a href="/alumni">
                          <div className="menu-item-wrap">
                            <span className="menu-item-title">ALUMNI</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        id="page-header"
        className="page-header header-04 header-light header-layout-fixed nav-links-hover-style-01 header-sticky-dark-logo headroom headroom--top headroom--not-bottom"
      >
        <div className="page-header-place-holder" />
        <div
          id="page-header-inner"
          className="page-header-inner"
          data-sticky={1}
        >
          <div className="container">
            <div className="header-wrap">
              <div className="header-left">
                <div className="header-content-inner">
                  <div className="branding">
                    <div className="branding-logo-wrap">
                      <a href="/" rel="home">
                        <img
                          src="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/light-logo(1).png"
                          alt="Main"
                          className="branding-logo light-logo"
                        />
                        <img
                          src="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/dark-logo.png"
                          alt="Main"
                          className="branding-logo dark-logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-right">
                <div className="header-content-inner">
                  <div id="header-right-inner" className="header-right-inner">
                    <div className="header-right-inner-content">
                      <div id="page-navigation" className="navigation page-navigation">
                        <nav id="menu" className="menu menu--primary">
                          <ul id="menu-primary" className="menu__container sm sm-simple" data-smartmenus-id={16502317500842585}>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-53 level-1">
                              <a href="/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">Home</span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-461 level-1">
                              <a href="/news">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    News &amp; Spotlight
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-695 level-1">
                              <a href="https://admissions.au.edu/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Admissions
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-45 level-1">
                              <a
                                className="has-submenu"
                                id="sm-16502317500842585-1"
                                aria-haspopup="true"
                                aria-controls="sm-16502317500842585-2"
                                aria-expanded="false"
                              >
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Laboratories
                                  </span>
                                  <span className="toggle-sub-menu"> </span>
                                </div>
                                <span className="sub-arrow" />
                              </a>
                              <ul
                                className="sub-menu children simple-menu"
                                id="sm-16502317500842585-2"
                                role="group"
                                aria-hidden="true"
                                aria-labelledby="sm-16502317500842585-1"
                                aria-expanded="false"
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
                                        Intelligent Data Analytics Research
                                        Laboratory
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1481">
                                  <a href="https://portal.scitech.au.edu/dcode/">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        d*code
                                      </span>
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
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="page-content" className="page-content">
        <div className="container">
          <div className="row">
            <div id="page-main-content" className="page-main-content">
              <div className="rich-snippet display-none">
                <h1 className="entry-title">VMS-Home</h1>{" "}
                <span className="published">April 5, 2021</span>
                <span className="updated" data-time="2021-05-04 9:16">
                  2021-05-04 9:16
                </span>
              </div>
              <article
                id="post-2837"
                className="post-2837 page type-page status-publish hentry post-no-thumbnail"
              >
                <h2 className="screen-reader-text">VMS-Home</h2>
                <div
                  data-elementor-type="wp-page" data-elementor-id={2837}
                  className="elementor elementor-2837"
                  data-elementor-settings="[]"
                >
                  <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-063448a elementor-section-content-middle elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="063448a"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-69ad18c"
                              data-id="69ad18c"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-977e01f unicamp-modern-heading-style-04 elementor-widget elementor-widget-tm-heading animated unicampFadeInUp"
                                    data-id="977e01f"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"unicampFadeInUp"}'
                                    data-widget_type="tm-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-modern-heading">
                                        <div className="heading-primary-wrap">
                                          <h2 className="heading-primary elementor-heading-title">
                                            Investing In <mark>Knowledge</mark>{" "}
                                            in
                                          </h2>
                                          <p></p>
                                          <h2 className="heading-primary elementor-heading-title">
                                            VMS
                                          </h2>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-44b29ef elementor-mobile-align-left elementor-widget__width-auto elementor-widget elementor-widget-tm-button animated unicampFadeInUp"
                                    data-id="44b29ef"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"unicampFadeInUp"}'
                                    data-widget_type="tm-button.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-button-wrapper">
                                        <a
                                          href="https://admissions.au.edu/"
                                          className="tm-button-link tm-button style-flat tm-button-nm smooth-scroll-link"
                                          role="button"
                                        >
                                          <div className="button-content-wrapper">
                                            <span className="button-text">
                                              Admission
                                            </span>
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
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-6cd5610 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="6cd5610"
                        data-element_type="section"
                        id="section-about"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dacde6d"
                              data-id="dacde6d"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-17babde elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                    data-id="17babde"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-extended">
                                      <div className="elementor-row">
                                        <div
                                          className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bcc3d59"
                                          data-id="bcc3d59"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-00b2b93 unicamp-icon-box-style-01 unicamp-graphic-position-top elementor-visible elementor-widget elementor-widget-tm-icon-box"
                                                data-id="00b2b93"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-icon-box.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="tm-icon-box unicamp-box">
                                                    <div className="unicamp-graphic-box icon-box-wrapper">
                                                      <div className="unicamp-graphic-content icon-box-content">
                                                        <div className="heading-wrap">
                                                          <h3 className="heading">
                                                            Welcome to Vincent
                                                            Mary School Of
                                                            Science And
                                                            Technology!
                                                          </h3>
                                                          <div className="heading-divider" />
                                                        </div>
                                                        <div className="description-wrap">
                                                          <div className="description">
                                                            <p>
                                                              The Vincent Mary
                                                              School of Science
                                                              and Technology is
                                                              one of the
                                                              pioneers to
                                                              develop
                                                              information
                                                              technology. This
                                                              tradition helps in
                                                              creating graduates
                                                              who are experts in
                                                              the science and
                                                              technology field,
                                                              as well as fluent
                                                              English speakers.
                                                            </p>
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
                                        <div
                                          className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6376060"
                                          data-id={6376060}
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-49966f8 unicamp-animation-zoom-in unicamp-graphic-position-top elementor-visible elementor-widget elementor-widget-tm-cover-image-box"
                                                data-id="49966f8"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-cover-image-box.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <a className="tm-cover-image-box unicamp-box style-03 link-secret">
                                                    <div className="content-wrap">
                                                      <div className="unicamp-image image">
                                                        <img
                                                          src="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/home-06-intro-bg-01.jpg"
                                                          alt="home-06-intro-bg-01"
                                                          width={690}
                                                        />{" "}
                                                      </div>
                                                      <div className="box-caption-wrap">
                                                        <div className="box-caption">
                                                          <h3 className="title">
                                                            Why VMS?
                                                          </h3>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-13a6a04 unicamp-animation-zoom-in unicamp-graphic-position-top elementor-visible elementor-widget elementor-widget-tm-cover-image-box"
                                                data-id="13a6a04"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-cover-image-box.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <a className="tm-cover-image-box unicamp-box style-03 link-secret">
                                                    <div className="content-wrap">
                                                      <div className="unicamp-image image">
                                                        <img
                                                          src="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/home-06-intro-bg-02.jpg"
                                                          alt="home-06-intro-bg-02"
                                                          width={690}
                                                        />{" "}
                                                      </div>
                                                      <div className="box-caption-wrap">
                                                        <div className="box-caption">
                                                          <h3 className="title">
                                                            Meet Our Students
                                                          </h3>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
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
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-a798f7c elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="a798f7c"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-833ff54"
                              data-id="833ff54"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-b35b85f unicamp-icon-box-style-01 unicamp-graphic-position-top elementor-visible elementor-widget elementor-widget-tm-icon-box"
                                    data-id="b35b85f"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"unicampFadeInUp"}'
                                    data-widget_type="tm-icon-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-icon-box unicamp-box has-link">
                                        <div className="unicamp-graphic-box icon-box-wrapper">
                                          <div className="unicamp-graphic-content icon-box-content">
                                            <div className="heading-wrap">
                                              <h3 className="heading">
                                                Apply for Admissions
                                              </h3>
                                              <div className="heading-divider" />
                                            </div>
                                            <div className="description-wrap">
                                              <div className="description">
                                                At VMS we don’t expect
                                                intelligence to come in any
                                                particular shape or form. We’re
                                                looking for future students who
                                                are inquisitive, passionate,
                                                original and determined to grow.{" "}
                                              </div>
                                            </div>
                                            <div className="tm-button-wrapper">
                                              <a
                                                className="tm-button style-flat tm-button-nm icon-right"
                                                href="https://www.au.edu/admissions.html"
                                              >
                                                <div className="button-content-wrapper">
                                                  <span className="button-text">
                                                    Apply now
                                                  </span>
                                                  <span className="button-icon">
                                                    <i className="fas fa-long-arrow-right" />{" "}
                                                  </span>
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
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-55320ec elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="55320ec"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e822bfe"
                              data-id="e822bfe"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-d46cf3b elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                    data-id="d46cf3b"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-extended">
                                      <div className="elementor-row">
                                        <div
                                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4993361"
                                          data-id={4993361}
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-8db6da7 unicamp-counter-style-02 elementor-visible elementor-widget elementor-widget-tm-counter"
                                                data-id="8db6da7"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-counter.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div
                                                    className="unicamp-box unicamp-graphic-box tm-counter"
                                                    data-counter='{"from":0,"to":179,"duration":2000,"separator":""}'
                                                  >
                                                    <div className="unicamp-graphic-content counter-content">
                                                      <div className="counter-number-wrap">
                                                        <span className="counter-number-prefix" />
                                                        <span className="counter-number">
                                                          990
                                                        </span>
                                                        <span className="counter-number-suffix" />
                                                      </div>
                                                      <div className="heading-wrap">
                                                        <h3 className="counter-heading">
                                                          Students
                                                        </h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-67964bf"
                                          data-id="67964bf"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-ed5c3a9 unicamp-counter-style-02 elementor-visible elementor-widget elementor-widget-tm-counter"
                                                data-id="ed5c3a9"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-counter.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div
                                                    className="unicamp-box unicamp-graphic-box tm-counter"
                                                    data-counter='{"from":0,"to":12,"duration":2000,"separator":""}'
                                                  >
                                                    <div className="unicamp-graphic-content counter-content">
                                                      <div className="counter-number-wrap">
                                                        <span className="counter-number-prefix" />
                                                        <span className="counter-number">
                                                          990
                                                        </span>
                                                        <span className="counter-number-suffix" />
                                                      </div>
                                                      <div className="heading-wrap">
                                                        <h3 className="counter-heading">
                                                          Nationalities
                                                        </h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-08ebf84"
                                          data-id="08ebf84"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-7052edf unicamp-counter-style-02 elementor-visible elementor-widget elementor-widget-tm-counter"
                                                data-id="7052edf"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-counter.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div
                                                    className="unicamp-box unicamp-graphic-box tm-counter"
                                                    data-counter='{"from":0,"to":39,"duration":2000,"separator":""}'
                                                  >
                                                    <div className="unicamp-graphic-content counter-content">
                                                      <div className="counter-number-wrap">
                                                        <span className="counter-number-prefix" />
                                                        <span className="counter-number">
                                                          10
                                                        </span>
                                                        <span className="counter-number-suffix">
                                                          %
                                                        </span>
                                                      </div>
                                                      <div className="heading-wrap">
                                                        <h3 className="counter-heading">
                                                          International Students
                                                        </h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-559d687"
                                          data-id="559d687"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-002c855 unicamp-counter-style-02 elementor-visible elementor-widget elementor-widget-tm-counter"
                                                data-id="002c855"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-counter.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div
                                                    className="unicamp-box unicamp-graphic-box tm-counter"
                                                    data-counter='{"from":0,"to":27,"duration":2000,"separator":""}'
                                                  >
                                                    <div className="unicamp-graphic-content counter-content">
                                                      <div className="counter-number-wrap">
                                                        <span className="counter-number-prefix" />
                                                        <span className="counter-number">
                                                          50
                                                        </span>
                                                        <span className="counter-number-suffix" />
                                                      </div>
                                                      <div className="heading-wrap">
                                                        <h3 className="counter-heading">
                                                          Top Instructors and
                                                          Experts
                                                        </h3>
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
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-2d12ec6 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="2d12ec6"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d93fb3e"
                              data-id="d93fb3e"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-3d75f19 elementor-widget elementor-widget-spacer"
                                    data-id="3d75f19"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-643b6c0 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                    data-id="643b6c0"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-extended">
                                      <div className="elementor-row">
                                        <div
                                          className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4b0fc56"
                                          data-id="4b0fc56"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-9d7c24e elementor-visible elementor-widget elementor-widget-tm-heading"
                                                data-id="9d7c24e"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="tm-modern-heading">
                                                    <div className="heading-primary-wrap">
                                                      <h3 className="heading-primary elementor-heading-title">
                                                        Latest News
                                                      </h3>
                                                    </div>
                                                    <div className="heading-divider" />
                                                    <div className="heading-description-wrap">
                                                      <div className="heading-description">
                                                        <p className="p1">
                                                          <span className="s1">
                                                            What's happening in
                                                            VMS. Explore Your
                                                            Potential &amp;
                                                            Talents in VMS
                                                          </span>
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-82d5974 elementor-mobile-align-left elementor-visible elementor-widget elementor-widget-tm-button"
                                                data-id="82d5974"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-button.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="tm-button-wrapper">
                                                    <a
                                                      href="/news"
                                                      className="tm-button-link tm-button style-flat tm-button-xs icon-right"
                                                      role="button"
                                                    >
                                                      <div className="button-content-wrapper">
                                                        <span className="button-text">
                                                          View all news
                                                        </span>
                                                        <span className="button-icon">
                                                          <i className="fas fa-long-arrow-right" />{" "}
                                                        </span>
                                                      </div>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-32b2e83"
                                          data-id="32b2e83"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-7e3199b unicamp-animation-zoom-in unicamp-blog-caption-style-01 bullets-v-align-below elementor-visible elementor-widget elementor-widget-tm-post-carousel"
                                                data-id="7e3199b"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-post-carousel.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div
                                                    className="tm-swiper tm-slider-widget nav-style-01 pagination-style-01 bullets-horizontal bullets-h-align-center bullets-v-align-below unicamp-blog"
                                                    data-lg-items={3}
                                                    data-md-items="auto-fixed"
                                                    data-sm-items="auto-fixed"
                                                    data-lg-gutter={30}
                                                    data-md-gutter=""
                                                    data-sm-gutter=""
                                                    data-nav={1}
                                                    data-nav-aligned-by="slider"
                                                    data-pagination-aligned-by="slider"
                                                    data-pagination={1}
                                                    data-loop={1}
                                                    data-simulate-touch={1}
                                                    data-speed={1000}
                                                    data-effect="slide"
                                                    data-active-columns={3}
                                                  >
                                                    <div className="swiper-inner">
                                                      <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                                                        <div
                                                          className="swiper-wrapper"
                                                          style={{
                                                            transform:
                                                              "translate3d(-803px, 0px, 0px)",
                                                            transitionDuration:
                                                              "0ms"
                                                          }}
                                                        >
                                                          <div
                                                            className="swiper-slide post-100 post type-post status-publish format-standard has-post-thumbnail hentry category-career category-research category-spotlight category-student-story tag-campus tag-career tag-digital-learning tag-learning-business swiper-slide-duplicate"
                                                            data-swiper-slide-index={
                                                              2
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/269327941_965627704309898_224471.jpg"
                                                                    alt="blog-12"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#381ec3"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Career
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#6cbd7e"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Research
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    Most
                                                                    students
                                                                    pleased with
                                                                    their
                                                                    digital
                                                                    learning
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Jan 23,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-97 post type-post status-publish format-standard has-post-thumbnail hentry category-research category-student-life tag-campus tag-career tag-life swiper-slide-duplicate"
                                                            data-swiper-slide-index={
                                                              3
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/media-video-poster-05.jpg"
                                                                    alt="blog-11"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#6cbd7e"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Research
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#77ccfd"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Student
                                                                      life
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    Gender
                                                                    inequality
                                                                    in higher
                                                                    education
                                                                    persists
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Jan 22,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-1865 post type-post status-publish format-standard has-post-thumbnail hentry category-alumni category-spotlight category-student-life category-student-story tag-activities tag-alumni tag-campus tag-career swiper-slide-duplicate swiper-slide-prev"
                                                            data-swiper-slide-index={
                                                              4
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/blog-15-480x320.jpg"
                                                                    alt="blog-15"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#a371ff"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Alumni
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#d31819"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Spotlight
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    University
                                                                    of Cambridge
                                                                    commits to a
                                                                    major new
                                                                    centre for
                                                                    music
                                                                    performance
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Jan 21,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-1862 post type-post status-publish format-standard has-post-thumbnail hentry category-alumni category-research tag-alumni tag-campus tag-career tag-research swiper-slide-visible swiper-slide-active"
                                                            data-swiper-slide-index={
                                                              0
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/34815257_183098985711324_7030911.jpg"
                                                                    alt="blog-14"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#a371ff"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Alumni
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#6cbd7e"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Research
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    Autism rates
                                                                    have
                                                                    increased
                                                                    and show
                                                                    differences
                                                                    in ethnic
                                                                    minorities
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Mar 17,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-1745 post type-post status-publish format-standard has-post-thumbnail hentry category-student-life category-student-story tag-campus tag-career tag-health tag-life tag-pandemic swiper-slide-visible swiper-slide-next"
                                                            data-swiper-slide-index={
                                                              1
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/74616025_157332375614738_4471589.jpg"
                                                                    alt="blog-13"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#77ccfd"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Student
                                                                      life
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#a701ad"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Student
                                                                      story
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    Most
                                                                    students say
                                                                    their mental
                                                                    health
                                                                    suffered in
                                                                    pandemic
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Jan 25,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-100 post type-post status-publish format-standard has-post-thumbnail hentry category-career category-research category-spotlight category-student-story tag-campus tag-career tag-digital-learning tag-learning-business swiper-slide-visible"
                                                            data-swiper-slide-index={
                                                              2
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/269327941_965627704309898_224471.jpg"
                                                                    alt="blog-12"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#381ec3"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Career
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#6cbd7e"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Research
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    Most
                                                                    students
                                                                    pleased with
                                                                    their
                                                                    digital
                                                                    learning
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Jan 23,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-97 post type-post status-publish format-standard has-post-thumbnail hentry category-research category-student-life tag-campus tag-career tag-life"
                                                            data-swiper-slide-index={
                                                              3
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/media-video-poster-05.jpg"
                                                                    alt="blog-11"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#6cbd7e"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Research
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#77ccfd"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Student
                                                                      life
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    Gender
                                                                    inequality
                                                                    in higher
                                                                    education
                                                                    persists
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Jan 22,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-1865 post type-post status-publish format-standard has-post-thumbnail hentry category-alumni category-spotlight category-student-life category-student-story tag-activities tag-alumni tag-campus tag-career swiper-slide-duplicate-prev"
                                                            data-swiper-slide-index={
                                                              4
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/blog-15-480x320.jpg"
                                                                    alt="blog-15"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#a371ff"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Alumni
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#d31819"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Spotlight
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    University
                                                                    of Cambridge
                                                                    commits to a
                                                                    major new
                                                                    centre for
                                                                    music
                                                                    performance
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Jan 21,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-1862 post type-post status-publish format-standard has-post-thumbnail hentry category-alumni category-research tag-alumni tag-campus tag-career tag-research swiper-slide-duplicate swiper-slide-duplicate-active"
                                                            data-swiper-slide-index={
                                                              0
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/34815257_183098985711324_7030911.jpg"
                                                                    alt="blog-14"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#a371ff"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Alumni
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#6cbd7e"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Research
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    Autism rates
                                                                    have
                                                                    increased
                                                                    and show
                                                                    differences
                                                                    in ethnic
                                                                    minorities
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Mar 17,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-1745 post type-post status-publish format-standard has-post-thumbnail hentry category-student-life category-student-story tag-campus tag-career tag-health tag-life tag-pandemic swiper-slide-duplicate swiper-slide-duplicate-next"
                                                            data-swiper-slide-index={
                                                              1
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/74616025_157332375614738_4471589.jpg"
                                                                    alt="blog-13"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#77ccfd"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Student
                                                                      life
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#a701ad"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Student
                                                                      story
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    Most
                                                                    students say
                                                                    their mental
                                                                    health
                                                                    suffered in
                                                                    pandemic
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Jan 25,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="swiper-slide post-100 post type-post status-publish format-standard has-post-thumbnail hentry category-career category-research category-spotlight category-student-story tag-campus tag-career tag-digital-learning tag-learning-business swiper-slide-duplicate"
                                                            data-swiper-slide-index={
                                                              2
                                                            }
                                                            style={{
                                                              width:
                                                                "237.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="post-wrapper unicamp-box">
                                                              <div className="post-feature post-thumbnail unicamp-image">
                                                                <a>
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/269327941_965627704309898_224471.jpg"
                                                                    alt="blog-12"
                                                                    width={480}
                                                                  />
                                                                </a>
                                                              </div>
                                                              <div className="post-caption">
                                                                <div className="post-categories">
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#381ec3"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Career
                                                                    </span>
                                                                  </a>
                                                                  <a rel="category tag">
                                                                    <span
                                                                      className="cat-shape"
                                                                      style={{
                                                                        background:
                                                                          "#6cbd7e"
                                                                      }}
                                                                    />
                                                                    <span className="cat-name">
                                                                      Research
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <h3 className="post-title post-title-2-rows">
                                                                  <a href="/posts">
                                                                    Most
                                                                    students
                                                                    pleased with
                                                                    their
                                                                    digital
                                                                    learning
                                                                  </a>
                                                                </h3>
                                                                <div className="post-meta">
                                                                  <div className="inner">
                                                                    <div className="post-meta-author">
                                                                      <a>
                                                                        <span className="meta-value">
                                                                          Owen
                                                                          Christ
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                    <div className="post-date">
                                                                      <span className="meta-value">
                                                                        Jan 23,
                                                                        2021
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <span
                                                          className="swiper-notification"
                                                          aria-live="assertive"
                                                          aria-atomic="true"
                                                        />
                                                      </div>
                                                      <div className="swiper-nav-buttons-wrap">
                                                        <div className="swiper-nav-buttons">
                                                          <div
                                                            className="swiper-nav-button swiper-button-prev"
                                                            tabIndex={0}
                                                            role="button"
                                                            aria-label="Previous slide"
                                                          >
                                                            <i className="nav-button-icon" />
                                                            <span className="nav-button-text">
                                                              Prev
                                                            </span>
                                                          </div>
                                                          <div
                                                            className="swiper-nav-button swiper-button-next"
                                                            tabIndex={0}
                                                            role="button"
                                                            aria-label="Next slide"
                                                          >
                                                            <i className="nav-button-icon" />
                                                            <span className="nav-button-text">
                                                              Next
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="swiper-pagination-container">
                                                      <div className="swiper-pagination-wrap">
                                                        <div className="swiper-pagination-inner">
                                                          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                                                            <div
                                                              className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                                              tabIndex={0}
                                                              role="button"
                                                              aria-label="Go to slide 1"
                                                            />
                                                            <div
                                                              className="swiper-pagination-bullet"
                                                              tabIndex={0}
                                                              role="button"
                                                              aria-label="Go to slide 2"
                                                            />
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
                                  </section>
                                  <div
                                    className="elementor-element elementor-element-a119ace elementor-widget elementor-widget-spacer"
                                    data-id="a119ace"
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
                        className="elementor-section elementor-top-section elementor-element elementor-element-bee3e09 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="bee3e09"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ff1d383"
                              data-id="ff1d383"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-a22a13c elementor-widget elementor-widget-spacer"
                                    data-id="a22a13c"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-361d1ad elementor-section-gap-beside-no elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                    data-id="361d1ad"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-extended">
                                      <div className="elementor-row">
                                        <div
                                          className="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-5affd59 elementor-visible"
                                          data-id="5affd59"
                                          data-element_type="column"
                                          data-settings='{"animation":"unicampFadeInUp"}'
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-2f44584 elementor-widget__width-auto elementor-widget elementor-widget-tm-heading"
                                                data-id="2f44584"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"none"}'
                                                data-widget_type="tm-heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="tm-modern-heading">
                                                    <div className="heading-primary-wrap">
                                                      <h3 className="heading-primary elementor-heading-title">
                                                        VMS News
                                                      </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-dc0f1ca elementor-widget__width-initial elementor-align-center elementor-widget elementor-widget-tm-separator"
                                                data-id="dc0f1ca"
                                                data-element_type="widget"
                                                data-widget_type="tm-separator.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="tm-separator horizontal-line">
                                                    <div className="inner" />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-888b28f"
                                          data-id="888b28f"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-767d1e4 elementor-align-right elementor-mobile-align-left elementor-visible elementor-widget elementor-widget-tm-button"
                                                data-id="767d1e4"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-button.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="tm-button-wrapper">
                                                    <a
                                                      href="/news"
                                                      className="tm-button-link tm-button style-flat tm-button-nm icon-right"
                                                      role="button"
                                                    >
                                                      <div className="button-content-wrapper">
                                                        <span className="button-text">
                                                          View all events
                                                        </span>
                                                        <span className="button-icon">
                                                          <i className="fas fa-long-arrow-right" />{" "}
                                                        </span>
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
                                  </section>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-8f33ec5 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                    data-id="8f33ec5"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-extended">
                                      <div className="elementor-row">
                                        <div
                                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bb8b716"
                                          data-id="bb8b716"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-9776cad unicamp-animation-zoom-in bullets-v-align-below elementor-visible elementor-widget elementor-widget-tm-event-carousel"
                                                data-id="9776cad"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-event-carousel.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div
                                                    className="unicamp-event style-carousel-01 tm-swiper tm-slider-widget"
                                                    data-lg-items={3}
                                                    data-md-items={2}
                                                    data-sm-items="auto-fixed"
                                                    data-lg-gutter={30}
                                                    data-md-gutter=""
                                                    data-sm-gutter=""
                                                    data-loop={1}
                                                    data-simulate-touch={1}
                                                    data-speed={1000}
                                                    data-effect="slide"
                                                    data-active-columns={3}
                                                  >
                                                    <div className="swiper-inner">
                                                      <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                                                        <div
                                                          className="swiper-wrapper"
                                                          style={{
                                                            transform:
                                                              "translate3d(-1070px, 0px, 0px)",
                                                            transitionDuration:
                                                              "0ms"
                                                          }}
                                                        >
                                                          <div
                                                            id="event-171"
                                                            className="swiper-slide post-171 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-charlie event-speaker-emerson event-speaker-lucinda event-speaker-marabel event-speaker-orabelle event-speaker-savanna-walker tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-duplicate"
                                                            data-swiper-slide-index={
                                                              2
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/media-campus-gallery-01-480x298.jpg"
                                                                    alt="event-10"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Aug 20
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    The Role of
                                                                    Conflict in
                                                                    a Political
                                                                    Account of
                                                                    Common Goods
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  10:30 am -
                                                                  11:30 am
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-170"
                                                            className="swiper-slide post-170 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-bellezza event-speaker-charlie event-speaker-emerson event-speaker-lucinda event-speaker-orabelle event-speaker-savanna-walker tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-duplicate"
                                                            data-swiper-slide-index={
                                                              3
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/01/event-09-480x290.jpg"
                                                                    alt="event-09"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Jun 14
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    Ethics in AI
                                                                    Live Event:
                                                                    Machines
                                                                    Judging
                                                                    Humans
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  10:30 am -
                                                                  11:30 am
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-169"
                                                            className="swiper-slide post-169 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-bellezza event-speaker-emerson event-speaker-lucinda event-speaker-marabel event-speaker-orabelle event-speaker-savanna-walker tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-duplicate swiper-slide-prev"
                                                            data-swiper-slide-index={
                                                              4
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/01/event-08-480x290.jpg"
                                                                    alt="event-08"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Jul 16
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    Does
                                                                    Political
                                                                    Augustinianism
                                                                    Help?
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  2:30 pm - 4:00
                                                                  pm
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-173"
                                                            className="swiper-slide post-173 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-bellezza event-speaker-charlie event-speaker-emerson event-speaker-lucinda event-speaker-marabel event-speaker-orabelle tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-visible swiper-slide-active"
                                                            data-swiper-slide-index={
                                                              0
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/74694537_114386303139423_7632526.jpg"
                                                                    alt="event-12"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Apr 19
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    Roadmap to
                                                                    the
                                                                    Sustainable
                                                                    Development
                                                                    Goals
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  2:30 pm - 3:30
                                                                  pm
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-172"
                                                            className="swiper-slide post-172 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-charlie event-speaker-emerson event-speaker-lucinda event-speaker-marabel event-speaker-orabelle event-speaker-savanna-walker tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-visible swiper-slide-next"
                                                            data-swiper-slide-index={
                                                              1
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/CL%20building.jpg"
                                                                    alt="event-11"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Dec 28
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    Research in
                                                                    Distance
                                                                    Education
                                                                    (RIDE)
                                                                    conference
                                                                    2021
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  3:30 pm - 4:30
                                                                  pm
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-171"
                                                            className="swiper-slide post-171 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-charlie event-speaker-emerson event-speaker-lucinda event-speaker-marabel event-speaker-orabelle event-speaker-savanna-walker tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-visible"
                                                            data-swiper-slide-index={
                                                              2
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/media-campus-gallery-01-480x298.jpg"
                                                                    alt="event-10"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Aug 20
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    The Role of
                                                                    Conflict in
                                                                    a Political
                                                                    Account of
                                                                    Common Goods
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  10:30 am -
                                                                  11:30 am
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-170"
                                                            className="swiper-slide post-170 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-bellezza event-speaker-charlie event-speaker-emerson event-speaker-lucinda event-speaker-orabelle event-speaker-savanna-walker tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research"
                                                            data-swiper-slide-index={
                                                              3
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/01/event-09-480x290.jpg"
                                                                    alt="event-09"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Jun 14
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    Ethics in AI
                                                                    Live Event:
                                                                    Machines
                                                                    Judging
                                                                    Humans
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  10:30 am -
                                                                  11:30 am
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-169"
                                                            className="swiper-slide post-169 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-bellezza event-speaker-emerson event-speaker-lucinda event-speaker-marabel event-speaker-orabelle event-speaker-savanna-walker tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-duplicate-prev"
                                                            data-swiper-slide-index={
                                                              4
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/01/event-08-480x290.jpg"
                                                                    alt="event-08"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Jul 16
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    Does
                                                                    Political
                                                                    Augustinianism
                                                                    Help?
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  2:30 pm - 4:00
                                                                  pm
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-173"
                                                            className="swiper-slide post-173 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-bellezza event-speaker-charlie event-speaker-emerson event-speaker-lucinda event-speaker-marabel event-speaker-orabelle tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-duplicate swiper-slide-duplicate-active"
                                                            data-swiper-slide-index={
                                                              0
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/74694537_114386303139423_7632526.jpg"
                                                                    alt="event-12"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Apr 19
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    Roadmap to
                                                                    the
                                                                    Sustainable
                                                                    Development
                                                                    Goals
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  2:30 pm - 3:30
                                                                  pm
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-172"
                                                            className="swiper-slide post-172 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-charlie event-speaker-emerson event-speaker-lucinda event-speaker-marabel event-speaker-orabelle event-speaker-savanna-walker tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-duplicate swiper-slide-duplicate-next"
                                                            data-swiper-slide-index={
                                                              1
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/CL%20building.jpg"
                                                                    alt="event-11"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Dec 28
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    Research in
                                                                    Distance
                                                                    Education
                                                                    (RIDE)
                                                                    conference
                                                                    2021
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  3:30 pm - 4:30
                                                                  pm
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            id="event-171"
                                                            className="swiper-slide post-171 tp_event type-tp_event status-publish has-post-thumbnail hentry event-speaker-charlie event-speaker-emerson event-speaker-lucinda event-speaker-marabel event-speaker-orabelle event-speaker-savanna-walker tp_event_category-reading tp_event_tag-career tp_event_tag-online-learning tp_event_tag-research swiper-slide-duplicate"
                                                            data-swiper-slide-index={
                                                              2
                                                            }
                                                            style={{
                                                              width:
                                                                "326.667px",
                                                              marginRight: 30
                                                            }}
                                                          >
                                                            <div className="unicamp-box">
                                                              <a
                                                                href="/news"
                                                                className="event-image unicamp-image"
                                                              >
                                                                <div className="post-thumbnail">
                                                                  <img
                                                                    src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/home/media-campus-gallery-01-480x298.jpg"
                                                                    alt="event-10"
                                                                    width={480}
                                                                  />{" "}
                                                                </div>
                                                              </a>
                                                              <div className="event-caption">
                                                                <div className="event-start-date">
                                                                  <span>
                                                                    Aug 20
                                                                  </span>
                                                                </div>
                                                                <h3 className="event-title post-title-2-rows">
                                                                  <a
                                                                    href="/news"
                                                                    className="link-in-title"
                                                                  >
                                                                    The Role of
                                                                    Conflict in
                                                                    a Political
                                                                    Account of
                                                                    Common Goods
                                                                  </a>
                                                                </h3>
                                                                <div className="event-time">
                                                                  10:30 am -
                                                                  11:30 am
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <span
                                                          className="swiper-notification"
                                                          aria-live="assertive"
                                                          aria-atomic="true"
                                                        />
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
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-8b3cd29 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="8b3cd29"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-103fc8e"
                              data-id="103fc8e"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-8c6502a elementor-visible elementor-widget elementor-widget-tm-heading"
                                    data-id="8c6502a"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"unicampFadeInUp"}'
                                    data-widget_type="tm-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-modern-heading">
                                        <div className="heading-primary-wrap">
                                          <h3 className="heading-primary elementor-heading-title">
                                            Vincent Mary School Of Science &amp;
                                            Technology
                                          </h3>
                                        </div>
                                        <div className="heading-divider" />
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
                        className="elementor-section elementor-top-section elementor-element elementor-element-c149e1c elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                        data-id="c149e1c"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-de18605"
                              data-id="de18605"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-fd12efc elementor-visible elementor-widget elementor-widget-tm-heading"
                                    data-id="fd12efc"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"unicampFadeInUp"}'
                                    data-widget_type="tm-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="tm-modern-heading">
                                        <div className="heading-primary-wrap">
                                          <h3 className="heading-primary elementor-heading-title">
                                            Get the latest <mark>VMS news</mark>{" "}
                                            delivered to you inbox
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-d05d5be elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch"
                                    data-id="d05d5be"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-extended">
                                      <div className="elementor-row">
                                        <div
                                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f36001b"
                                          data-id="f36001b"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-b087d32 unicamp-mailchimp-form-style-01 unicamp-button-align-stretch elementor-visible elementor-widget elementor-widget-tm-mailchimp-form"
                                                data-id="b087d32"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"unicampFadeInUp"}'
                                                data-widget_type="tm-mailchimp-form.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="unicamp-mailchimp-form">
                                                    {/* Mailchimp for WordPress v4.8.5 - https://wordpress.org/plugins/mailchimp-for-wp/ */}
                                                    <form
                                                      id="mc4wp-form-1"
                                                      className="mc4wp-form mc4wp-form-1259"
                                                      method="post"
                                                      data-id={1259}
                                                      data-name="Subscribe"
                                                    >
                                                      <div className="mc4wp-form-fields">
                                                        <div className="form-item-wrap">
                                                          <div className="form-group form-item-email">
                                                            <input
                                                              type="email"
                                                              name="EMAIL"
                                                              placeholder="Your e-mail"
                                                              required=""
                                                              className="form-input"
                                                            />
                                                          </div>
                                                          <div className="form-submit">
                                                            <button
                                                              className="button-submit"
                                                              type="submit"
                                                            >
                                                              <span className="button-text">
                                                                Subscribe
                                                              </span>
                                                              <span className="button-icon form-icon" />
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <label
                                                        style={{
                                                          display:
                                                            "none !important"
                                                        }}
                                                      >
                                                        Leave this field empty
                                                        if you're human:{" "}
                                                        <input
                                                          type="text"
                                                          name="_mc4wp_honeypot"
                                                          defaultValue=""
                                                          tabIndex={-1}
                                                          autoComplete="off"
                                                        />
                                                      </label>
                                                      <input
                                                        type="hidden"
                                                        name="_mc4wp_timestamp"
                                                        defaultValue={
                                                          1647339208
                                                        }
                                                      />
                                                      <input
                                                        type="hidden"
                                                        name="_mc4wp_form_id"
                                                        defaultValue={1259}
                                                      />
                                                      <input
                                                        type="hidden"
                                                        name="_mc4wp_form_element_id"
                                                        defaultValue="mc4wp-form-1"
                                                      />
                                                      <div className="mc4wp-response" />
                                                    </form>
                                                    {/* / Mailchimp for WordPress Plugin */}
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
              </article>
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
          data-elementor-id={3023}
          className="elementor elementor-3023 elementor-location-footer"
          data-elementor-settings="[]"
        >
          <div className="elementor-section-wrap">
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-3a6df75 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
              data-id="3a6df75"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <div className="elementor-container elementor-column-gap-extended">
                <div className="elementor-row">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-caa34be"
                    data-id="caa34be"
                    data-element_type="column"
                  >
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div
                          className="elementor-element elementor-element-b0cdf68 elementor-widget elementor-widget-spacer"
                          data-id="b0cdf68"
                          data-element_type="widget"
                          data-widget_type="spacer.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-spacer">
                              <div className="elementor-spacer-inner" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-09adf0e elementor-widget elementor-widget-image"
                          data-id="09adf0e"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <a href="/">
                                <img
                                  width={448}
                                  height={136}
                                  src="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/light-logo(1).png"
                                  alt="Main"
                                  className="attachment-full size-full"
                                  sizes="(max-width: 448px) 100vw, 448px"
                                />{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-1de5d34 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                          data-id="1de5d34"
                          data-element_type="section"
                        >
                          <div className="elementor-container elementor-column-gap-extended">
                            <div className="elementor-row">
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3d6276f"
                                data-id="3d6276f"
                                data-element_type="column"
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-element-57e06f2 elementor-widget elementor-widget-tm-heading"
                                      data-id="57e06f2"
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
                                      className="elementor-element elementor-element-141286c unicamp-link-animate-border-02 elementor-widget elementor-widget-tm-heading"
                                      data-id="141286c"
                                      data-element_type="widget"
                                      data-widget_type="tm-heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="tm-modern-heading">
                                          <div className="heading-primary-wrap">
                                            <div className="heading-primary elementor-heading-title">
                                              <a
                                                href="tel:66023004543
                                                                                      "
                                              >
                                                <mark>(66) 02 300 4543</mark>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-54c1de1 elementor-widget elementor-widget-tm-heading"
                                      data-id="54c1de1"
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
                                      className="elementor-element elementor-element-fee7910 elementor-widget elementor-widget-tm-social-networks"
                                      data-id="fee7910"
                                      data-element_type="widget"
                                      data-widget_type="tm-social-networks.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="tm-social-networks style-icons layout-inline">
                                          <ul className="list">
                                            <li className="item elementor-repeater-item-a4ebc41">
                                              <a
                                                className="link hint--bounce hint--top hint--white"
                                                aria-label="Twitter"
                                                href="https://twitter.com/assumptionu?lang=en"
                                                target="_blank"
                                                rel="nofollow"
                                              >
                                                <i className="link-icon fab fa-twitter" />{" "}
                                              </a>
                                            </li>
                                            <li className="item elementor-repeater-item-3a62d63">
                                              <a
                                                className="link hint--bounce hint--top hint--white"
                                                aria-label="Facebook"
                                                href="https://www.facebook.com/vms.au.edu/"
                                                target="_blank"
                                                rel="nofollow"
                                              >
                                                <i className="link-icon fab fa-facebook-f" />{" "}
                                              </a>
                                            </li>
                                            <li className="item elementor-repeater-item-5840c98">
                                              <a
                                                className="link hint--bounce hint--top hint--white"
                                                aria-label="Instagram"
                                                href="https://www.instagram.com/accounts/login/?next=/vms.sc/"
                                                target="_blank"
                                                rel="nofollow"
                                              >
                                                <i className="link-icon fab fa-instagram" />{" "}
                                              </a>
                                            </li>
                                            <li className="item elementor-repeater-item-ecbdfc2">
                                              <a
                                                className="link hint--bounce hint--top hint--white"
                                                aria-label="Youtube Chanel"
                                                href="https://www.youtube.com/channel/UCBArL_dL5XiXCiS5pDtyLpQ"
                                                target="_blank"
                                                rel="nofollow"
                                              >
                                                <i className="link-icon fab fa-youtube" />{" "}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-31e6f9c elementor-widget elementor-widget-spacer"
                                      data-id="31e6f9c"
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
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0b91903"
                                data-id="0b91903"
                                data-element_type="column"
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-element-c2664b4 elementor-widget elementor-widget-tm-heading"
                                      data-id="c2664b4"
                                      data-element_type="widget"
                                      data-widget_type="tm-heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="tm-modern-heading">
                                          <div className="heading-primary-wrap">
                                            <h4 className="heading-primary elementor-heading-title">
                                              Quick Links
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-ac95b6c unicamp-list-layout-block elementor-widget elementor-widget-tm-list"
                                      data-id="ac95b6c"
                                      data-element_type="widget"
                                      data-widget_type="tm-list.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="unicamp-list">
                                          <div className="item elementor-repeater-item-de25e53">
                                            <a
                                              className="link"
                                              href="/staff"
                                            >
                                              <div className="list-header">
                                                <div className="text-wrap">
                                                  <div className="text">
                                                    Staff
                                                  </div>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                          <div className="item elementor-repeater-item-4f48939">
                                            <a
                                              className="link"
                                              href="/news"
                                            >
                                              <div className="list-header">
                                                <div className="text-wrap">
                                                  <div className="text">
                                                    News &amp; Spotlight
                                                  </div>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                          <div className="item elementor-repeater-item-3cfbe35">
                                            <a
                                              className="link"
                                              href="https://admissions.au.edu/"
                                            >
                                              <div className="list-header">
                                                <div className="text-wrap">
                                                  <div className="text">
                                                    Admission
                                                  </div>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-0525c2d elementor-widget elementor-widget-spacer"
                                      data-id="0525c2d"
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
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d93b28e"
                                data-id="d93b28e"
                                data-element_type="column"
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-element-4e7f962 elementor-widget elementor-widget-tm-image-hotspot"
                                      data-id="4e7f962"
                                      data-element_type="widget"
                                      data-widget_type="tm-image-hotspot.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="unicamp-image-hotspot style-">
                                          <div className="wrap_svl_center">
                                            <div className="wrap_svl_center_box">
                                              <div
                                                className="wrap_svl"
                                                id="body_drag_3024"
                                              >
                                                <div className="images_wrap">
                                                  <img
                                                    src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/04/footer-map-transparent-dots-bg.png"
                                                    alt="Hotspot image"
                                                  />
                                                </div>
                                                <div
                                                  className="drag_element tips pins-animation-pulse"
                                                  style={{
                                                    top: "48.66%",
                                                    left: "75.22%"
                                                  }}
                                                >
                                                  <div
                                                    className="point_style ihotspot_tooltop_html"
                                                    data-placement="n"
                                                    data-html='																										<div class="box_view_html">
										<span class="close_ihp">
											<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
											     viewBox="0 0 1000 1000"
											     enable-background="new 0 0 1000 1000" xml:space="preserve">
													<path
														d="M153.7,153.7C57.9,249.5,10,365.3,10,499c0,135.7,47.9,251.5,143.7,347.3l0,0C249.5,942.1,363.3,990,499,990c135.7,0,251.5-47.9,347.3-143.7C942.1,750.5,990,634.7,990,499c0-135.7-47.9-249.5-143.7-345.3l0,0C750.5,57.9,634.7,10,499,10C365.3,10,249.5,57.9,153.7,153.7z M209.6,211.6l2-2C289.4,129.7,387.2,89.8,499,89.8c113.8,0,209.6,39.9,291.4,121.8c79.8,77.8,119.8,175.6,119.8,287.4c0,113.8-39.9,209.6-119.8,291.4C708.6,870.3,612.8,910.2,499,910.2c-111.8,0-209.6-39.9-287.4-119.8C129.8,708.6,89.8,612.8,89.8,499C89.8,387.2,129.8,289.4,209.6,211.6z"/><path
													d="M293.4,331.3c0,12,4,22,12,29.9L443.1,497L305.4,632.7c-8,8-12,18-12,29.9c0,10,4,18,12,26c8,8,18,12,28,12c12,0,20-4,27.9-10L499,552.9l135.7,137.7c8,6,16,10,28,10c12,0,21.9-4,27.9-10c8-8,12-18,12-28c0-12-4-21.9-12-29.9L554.9,497l135.7-135.7c8-8,12-18,12-27.9c0-12-4-22-12-29.9c-6-8-16-12-25.9-12c-12,0-21.9,4-29.9,12L499,441.1L363.3,303.4c-8-8-18-12-29.9-12c-10,0-20,4-28,12C297.4,311.4,293.4,321.4,293.4,331.3z"/>
											</svg>
										</span>
													<div class="tm-image-hotspot-content">
									<h6 class="heading">Assumption University</h6>
				
									<div class="text">88 Moo 8 Bang Na-Trad Km. 26 Bang Sao Thong, Samut Prakan 10570, Thailand</div>							</div>

												</div>
																'
                                                  >
                                                    <img
                                                      src="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/04/hotspot-point-map-marker.png"
                                                      alt="Pin"
                                                      className="pins_image ihotspot_hastooltop"
                                                      style={{
                                                        top: "-17.5px",
                                                        left: "-17.5px"
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-7cdd21a elementor-widget elementor-widget-spacer"
                                      data-id="7cdd21a"
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
                          className="elementor-section elementor-inner-section elementor-element elementor-element-829a1e5 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                          data-id="829a1e5"
                          data-element_type="section"
                        >
                          <div className="elementor-container elementor-column-gap-extended">
                            <div className="elementor-row">
                              <div
                                className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d7bc8c2"
                                data-id="d7bc8c2"
                                data-element_type="column"
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-element-bb859bd elementor-widget elementor-widget-tm-heading"
                                      data-id="bb859bd"
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
  </div>
  {/* /.site */}
  <div className="wooscp-popup wooscp-search">
    <div className="wooscp-popup-inner">
      <div className="wooscp-popup-content">
        <div className="wooscp-popup-content-inner">
          <div className="wooscp-popup-close" />
          <div className="wooscp-search-input">
            <input
              type="search"
              id="wooscp_search_input"
              placeholder="Type any keyword to search..."
            />
          </div>
          <div className="wooscp-search-result" />
        </div>
      </div>
    </div>
  </div>
  <div className="wooscp-popup wooscp-settings">
    <div className="wooscp-popup-inner">
      <div className="wooscp-popup-content">
        <div className="wooscp-popup-content-inner">
          <div className="wooscp-popup-close" />
          Select the fields to be shown. Others will be hidden. Drag and drop to
          rearrange the order.
          <ul className="wooscp-settings-fields">
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="image"
                defaultChecked=""
              />
              <span className="label">Image</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="sku"
                defaultChecked=""
              />
              <span className="label">SKU</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="rating"
                defaultChecked=""
              />
              <span className="label">Rating</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="price"
                defaultChecked=""
              />
              <span className="label">Price</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="stock"
                defaultChecked=""
              />
              <span className="label">Stock</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="availability"
                defaultChecked=""
              />
              <span className="label">Availability</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="add_to_cart"
                defaultChecked=""
              />
              <span className="label">Add to cart</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="description"
                defaultChecked=""
              />
              <span className="label">Description</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="content"
                defaultChecked=""
              />
              <span className="label">Content</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="weight"
                defaultChecked=""
              />
              <span className="label">Weight</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="dimensions"
                defaultChecked=""
              />
              <span className="label">Dimensions</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="additional"
                defaultChecked=""
              />
              <span className="label">Additional information</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="attributes"
                defaultChecked=""
              />
              <span className="label">Attributes</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="custom_attributes"
                defaultChecked=""
              />
              <span className="label">Custom attributes</span>
            </li>
            <li className="wooscp-settings-field-li">
              <input
                type="checkbox"
                className="wooscp-settings-field"
                defaultValue="custom_fields"
                defaultChecked=""
              />
              <span className="label">Custom fields</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div
    id="wooscp-area"
    className="wooscp-area wooscp-bar-bottom wooscp-bar-right wooscp-bar-click-outside-yes wooscp-hide-checkout"
    data-bg-color="#292a30"
    data-btn-color="#ae152d"
    data-count={0}
  >
    <div className="wooscp-inner">
      <div
        className="wooscp-table"
        style={{ backgroundColor: "rgb(41, 42, 48)" }}
      >
        <div className="wooscp-table-inner">
          <a
            href="javascript:void(0);"
            id="wooscp-table-close"
            className="wooscp-table-close hint--left"
            aria-label="Close"
          >
            <span className="wooscp-table-close-icon" />
          </a>
          <div className="wooscp-table-items" />
        </div>
      </div>
      <div
        className="wooscp-bar "
        data-count={0}
        style={{ backgroundColor: "rgb(41, 42, 48)" }}
      >
        <div className="wooscp-bar-notice">
          Click outside to hide the compare bar{" "}
        </div>
        <a
          href="javascript:void(0);"
          className="wooscp-bar-settings hint--top"
          aria-label="Select fields"
        />
        <a
          href="javascript:void(0);"
          className="wooscp-bar-search hint--top"
          aria-label="Add product"
        />
        <div className="wooscp-bar-items" />
        <div
          className="wooscp-bar-btn wooscp-bar-btn-text"
          style={{ backgroundColor: "rgb(174, 21, 45)" }}
        >
          <div className="wooscp-bar-btn-icon-wrapper">
            <div className="wooscp-bar-btn-icon-inner">
              <span />
              <span />
              <span />
            </div>
          </div>
          Compare{" "}
        </div>
      </div>
    </div>
  </div>
  <div id="woosw-area" className="woosw-area">
    <div className="woosw-inner">
      <div className="woosw-content">
        <div className="woosw-content-top">
          Wishlist <span className="woosw-count">0</span>
          <span className="woosw-close" />
        </div>
        <div className="woosw-content-mid" />
        <div className="woosw-content-bot">
          <div className="woosw-content-bot-inner">
            <span className="woosw-page">
              <a href="https://unicamp.thememove.com/main/wishlist/">
                Open wishlist page
              </a>
            </span>
            <span className="woosw-continue" data-url="">
              Continue shopping{" "}
            </span>
          </div>
          <div className="woosw-notice" />
        </div>
      </div>
    </div>
  </div>
  <div id="popup-pre-loader" className="popup-pre-loader">
    <div className="popup-load-inner">
      <div className="popup-loader-wrap">
        <div className="wrap-2">
          <div className="inner">
            <div className="sk-wrap sk-circle">
              <div className="sk-circle1 sk-child" />
              <div className="sk-circle2 sk-child" />
              <div className="sk-circle3 sk-child" />
              <div className="sk-circle4 sk-child" />
              <div className="sk-circle5 sk-child" />
              <div className="sk-circle6 sk-child" />
              <div className="sk-circle7 sk-child" />
              <div className="sk-circle8 sk-child" />
              <div className="sk-circle9 sk-child" />
              <div className="sk-circle10 sk-child" />
              <div className="sk-circle11 sk-child" />
              <div className="sk-circle12 sk-child" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="unicamp-popup popup-user-login"
    id="popup-user-login"
    data-template="template-parts/popup/popup-content-login"
  >
    <div className="popup-overlay" />
    <div className="popup-content">
      <div className="button-close-popup" />
      <div className="popup-content-wrap">
        <div className="popup-content-inner" />
      </div>
    </div>
  </div>
  <div
    className="unicamp-popup popup-user-register"
    id="popup-user-register"
    data-template="template-parts/popup/popup-content-register"
  >
    <div className="popup-overlay" />
    <div className="popup-content">
      <div className="button-close-popup" />
      <div className="popup-content-wrap">
        <div className="popup-content-inner" />
      </div>
    </div>
  </div>
  <div
    className="unicamp-popup popup-lost-password"
    id="popup-user-lost-password"
    data-template="template-parts/popup/popup-content-lost-password"
  >
    <div className="popup-overlay" />
    <div className="popup-content">
      <div className="button-close-popup" />
      <div className="popup-content-wrap">
        <div className="popup-content-inner" />
      </div>
    </div>
  </div>
  <a className="page-scroll-up" id="page-scroll-up">
    <i className="arrow-top fal fa-long-arrow-up" />
    <i className="arrow-bottom fal fa-long-arrow-up" />
  </a>
  <div
    id="page-mobile-main-menu"
    className="page-mobile-main-menu"
    data-background="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/78176451_2725184400877103_6661179704101306368_n.png"
  >
    <div className="inner">
      <div className="page-mobile-menu-header">
        <div className="page-mobile-popup-logo page-mobile-menu-logo">
          <a href="/" rel="home">
            <img
              src="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/dark-logo.png"
              alt="Main"
              width={165}
            />
          </a>
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
            <a href="/">
              <div className="menu-item-wrap"><span className="menu-item-title">Home</span>
              </div>
            </a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-461 level-1">
            <a href="/news">
              <div className="menu-item-wrap"><span className="menu-item-title">News &amp; Spotlight</span>
              </div>
            </a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-695 level-1">
            <a href="https://unicamp.thememove.com/main/admissions/">
              <div className="menu-item-wrap">
                <span className="menu-item-title">Admissions</span>
              </div>
            </a>
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

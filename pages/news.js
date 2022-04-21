import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

export default function News() {
  return (
    <>
    <Head>
    
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="profile" href="https://gmpg.org/xfn/11" />
  <title>VMS – News</title>
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

    
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/jquery/jquery.min.js' id='jquery-core-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-includes/js/jquery/jquery-migrate.min.js' id='jquery-migrate-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/plugins/revslider/public/assets/js/rbtools.min.js' id='tp-tools-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/plugins/revslider/public/assets/js/rs6.min.js' id='revmin-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/js/tutor/general.min.js' id='unicamp-course-general-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/libs/lightGallery/js/lightgallery-all.min.js' id='lightgallery-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/elementor/assets/libs/countTo/jquery.countTo.min.js' id='count-to-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/elementor/assets/js/widgets/widget-counter.js' id='unicamp-widget-counter-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/elementor/assets/js/widgets/group-widget-carousel.js' id='unicamp-group-widget-carousel-js'></Script>
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
                        src="https://raw.githubusercontent.com/u6016901/u6016901.github.io/main/pictures/dark-logo.png"
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
              <li className="level-2 sub tail current">News &amp; Spotlight</li>
            </ul>
          </div>
        </div>
        <div className="page-title-bar-heading container">
          <h1 className="heading"> News &amp; Spotlight </h1>
        </div>
      </div>
    </div>
    <div id="page-content" className="page-content">
      <div className="container">
        <div className="row">
          <div id="page-main-content" className="page-main-content">
            <div className="rich-snippet display-none">
              <h1 className="entry-title">News &amp; Spotlight</h1>{" "}
              <span className="published">March 18, 2021</span>
              <span className="updated" data-time="2021-05-11 3:43">
                2021-05-11 3:43
              </span>
            </div>
            <article
              id="post-1934"
              className="post-1934 page type-page status-publish hentry post-no-thumbnail"
            >
              <h2 className="screen-reader-text">News &amp; Spotlight</h2>
              <div
                data-elementor-type="wp-page"
                data-elementor-id={1934}
                className="elementor elementor-1934"
                data-elementor-settings="[]"
              >
                <div className="elementor-inner">
                  <div className="elementor-section-wrap">
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-49d0704 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch"
                      data-id="49d0704"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-extended">
                        <div className="elementor-row">
                          
                          <div
                            className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-d556684"
                            data-id="d556684"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-ad4aa52 elementor-visible elementor-widget elementor-widget-tm-heading"
                                  data-id="ad4aa52"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="tm-modern-heading">
                                      <div className="heading-primary-wrap">
                                        <h4 className="heading-primary elementor-heading-title">
                                          If you&apos;re a journalist looking for
                                          information about the University, an
                                          expert to interview for a story, or
                                          researching a popular topic, the VMS
                                          team can help.
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-a1afab1 elementor-visible elementor-widget elementor-widget-tm-heading"
                                  data-id="a1afab1"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="tm-modern-heading">
                                      <div className="heading-primary-wrap">
                                        <div className="heading-primary elementor-heading-title">
                                          VMS Public Affairs and Communications
                                          Office is committed to advancing
                                          information and communications related
                                          to the University&apos;s mission of
                                          excellence in teaching, learning, and
                                          research.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-bcf6ad2 elementor-visible elementor-widget elementor-widget-tm-heading"
                                  data-id="bcf6ad2"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="tm-modern-heading">
                                      <div className="heading-primary-wrap">
                                        <div className="heading-primary elementor-heading-title">
                                          VMS photographers are active on campus
                                          and around the world, providing
                                          insight into Science &amp; Technology
                                          faculty and staff, news, and events. A
                                          large selection of these images are
                                          available for download by the members
                                          of the media, faculty, and staff.
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
                      className="elementor-section elementor-top-section elementor-element elementor-element-2f85733 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch"
                      data-id="2f85733"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-extended">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-140e167"
                            data-id="140e167"
                            data-element_type="column"
                            id="section-news"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-dbc930d elementor-visible elementor-widget elementor-widget-tm-heading"
                                  data-id="dbc930d"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="tm-modern-heading">
                                      <div className="heading-primary-wrap">
                                        <h2 className="heading-primary elementor-heading-title">
                                          In The News
                                        </h2>
                                      </div>
                                      <div className="heading-divider" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-f994bfe unicamp-news-style-02 elementor-visible elementor-widget elementor-widget-tm-news"
                                  data-id="f994bfe"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-news.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="unicamp-news">
                                      <div className="item unicamp-box">
                                        <div className="news-image unicamp-image">
                                          <img
                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x312/29417260_445986675834907_2194384.jpg"
                                            alt="news-thumbnail-01"
                                          />
                                          <div className="tm-button-wrapper">
                                            <a className="tm-button style-flat tm-button-nm icon-right">
                                              <div className="button-content-wrapper">
                                                <span className="button-text">
                                                  Learn the full story
                                                </span>
                                                <span className="button-icon">
                                                  <i className="fas fa-long-arrow-right" />
                                                </span>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="news-caption">
                                          <div className="news-sub-title">
                                            Wicked Local Cambridge
                                          </div>
                                          <h3 className="news-title">
                                            <a className="link-in-title">
                                              The Way We Live During The Pademic
                                            </a>
                                          </h3>
                                          <div className="news-date">
                                            July 23, 2020
                                          </div>
                                        </div>
                                      </div>
                                      <div className="item unicamp-box">
                                        <div className="news-image unicamp-image">
                                          <img
                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x312/29716321_191456101467290_2809999.jpg"
                                            alt="news-thumbnail-02"
                                          />
                                          <div className="tm-button-wrapper">
                                            <a className="tm-button style-flat tm-button-nm icon-right">
                                              <div className="button-content-wrapper">
                                                <span className="button-text">
                                                  Learn the full story
                                                </span>
                                                <span className="button-icon">
                                                  <i className="fas fa-long-arrow-right" />
                                                </span>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="news-caption">
                                          <div className="news-sub-title">
                                            The Boston Globe
                                          </div>
                                          <h3 className="news-title">
                                            <a className="link-in-title">
                                              The Way We Live During The Pademic
                                            </a>
                                          </h3>
                                          <div className="news-date">
                                            January 13, 2021
                                          </div>
                                        </div>
                                      </div>
                                      <div className="item unicamp-box">
                                        <div className="news-image unicamp-image">
                                          <img
                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x312/32425373_369981953513986_8553196.jpg"
                                            alt="news-thumbnail-03"
                                          />
                                          <div className="tm-button-wrapper">
                                            <a className="tm-button style-flat tm-button-nm icon-right">
                                              <div className="button-content-wrapper">
                                                <span className="button-text">
                                                  Learn the full story
                                                </span>
                                                <span className="button-icon">
                                                  <i className="fas fa-long-arrow-right" />
                                                </span>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="news-caption">
                                          <div className="news-sub-title">
                                            The New York Times
                                          </div>
                                          <h3 className="news-title">
                                            <a className="link-in-title">
                                              The Way We Live During The Pademic
                                            </a>
                                          </h3>
                                          <div className="news-date">
                                            March 4, 2021
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
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9b80415"
                            data-id="9b80415"
                            data-element_type="column"
                            id="section-press-releases"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-c8d3dc2 elementor-visible elementor-widget elementor-widget-tm-heading"
                                  data-id="c8d3dc2"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="tm-modern-heading">
                                      <div className="heading-primary-wrap">
                                        <h2 className="heading-primary elementor-heading-title">
                                          Spotlight
                                        </h2>
                                      </div>
                                      <div className="heading-divider" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-a87a9c3 unicamp-news-style-01 elementor-visible elementor-widget elementor-widget-tm-news"
                                  data-id="a87a9c3"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-news.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="unicamp-news">
                                      <div className="item unicamp-box">
                                        <div className="news-image unicamp-image">
                                          <img
                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/logo-with-bg-fill.jpg"
                                            alt="logo-with-bg-fill"
                                            width={100}
                                          />{" "}
                                        </div>
                                        <div className="news-caption">
                                          <h3 className="news-title">
                                            <a className="link-in-title">
                                              Student Exchange and Visitor
                                              Program (SEVP) Lawsuit
                                            </a>
                                          </h3>
                                          <div className="news-date">
                                            October 15, 2020
                                          </div>
                                          <div className="tm-button-wrapper">
                                            <a className="tm-button style-text tm-button-nm icon-right">
                                              <div className="button-content-wrapper">
                                                <span className="button-text">
                                                  Learn the full story
                                                </span>
                                                <span className="button-icon">
                                                  <i className="fas fa-long-arrow-right" />
                                                </span>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="item unicamp-box">
                                        <div className="news-image unicamp-image">
                                          <img
                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/logo-with-bg-fill.jpg"
                                            alt="logo-with-bg-fill"
                                            width={100}
                                          />{" "}
                                        </div>
                                        <div className="news-caption">
                                          <h3 className="news-title">
                                            <a className="link-in-title">
                                              Student Exchange and Visitor
                                              Program (SEVP) Lawsuit
                                            </a>
                                          </h3>
                                          <div className="news-date">
                                            November 26, 2020
                                          </div>
                                          <div className="tm-button-wrapper">
                                            <a className="tm-button style-text tm-button-nm icon-right">
                                              <div className="button-content-wrapper">
                                                <span className="button-text">
                                                  Learn the full story
                                                </span>
                                                <span className="button-icon">
                                                  <i className="fas fa-long-arrow-right" />
                                                </span>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="item unicamp-box">
                                        <div className="news-image unicamp-image">
                                          <img
                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/logo-with-bg-fill.jpg"
                                            alt="logo-with-bg-fill"
                                            width={100}
                                          />{" "}
                                        </div>
                                        <div className="news-caption">
                                          <h3 className="news-title">
                                            <a className="link-in-title">
                                              Student Exchange and Visitor
                                              Program (SEVP) Lawsuit
                                            </a>
                                          </h3>
                                          <div className="news-date">
                                            December 14, 2020
                                          </div>
                                          <div className="tm-button-wrapper">
                                            <a className="tm-button style-text tm-button-nm icon-right">
                                              <div className="button-content-wrapper">
                                                <span className="button-text">
                                                  Learn the full story
                                                </span>
                                                <span className="button-icon">
                                                  <i className="fas fa-long-arrow-right" />
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
                      className="elementor-section elementor-top-section elementor-element elementor-element-71104e2 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch"
                      data-id="71104e2"
                      data-element_type="section"
                      id="section-social-media"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-extended">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-281ae1d"
                            data-id="281ae1d"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-7605803 elementor-visible elementor-widget elementor-widget-tm-heading"
                                  data-id={7605803}
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="tm-modern-heading">
                                      <div className="heading-primary-wrap">
                                        <h2 className="heading-primary elementor-heading-title">
                                          Social Media
                                        </h2>
                                      </div>
                                      <div className="heading-divider" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-d04c17f elementor-widget elementor-widget-tm-social-news"
                                  data-id="d04c17f"
                                  data-element_type="widget"
                                  data-widget_type="tm-social-news.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="unicamp-social-news">
                                      <div className="modern-grid">
                                        <div className="grid-item elementor-repeater-item-f644adc style-twitter">
                                          <div className="unicamp-box">
                                            {" "}
                                            <span className="social-brand" />
                                            <div className="social-content">
                                              <h4 className="social-heading">
                                                @VMS{" "}
                                              </h4>
                                              <div className="social-text">
                                                Our Chief People Officer{" "}
                                                <mark>@MRidsdale16</mark> joined{" "}
                                                <mark>@benjaminlaw</mark> and{" "}
                                                <mark>@raejohnston</mark> on{" "}
                                                <mark>@tsushow</mark> aliquam
                                                lorem ante, dapibus in, viverra
                                                r, feugiat a, tellus
                                                https://t.co/uszxz0qicU{" "}
                                              </div>
                                            </div>
                                            <div className="social-footer">
                                              <div className="social-date">
                                                March 19, 2021
                                              </div>
                                              <div className="social-meta">
                                                <div className="social-meta-item social-comments">
                                                  <span className="fal fa-comment" />{" "}
                                                  2{" "}
                                                </div>
                                                <div className="social-meta-item social-likes">
                                                  <span className="fal fa-heart" />{" "}
                                                  10{" "}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="grid-item elementor-repeater-item-654c2bc style-facebook">
                                          <div className="unicamp-box">
                                            {" "}
                                            <span className="social-brand" />
                                            <div className="social-content">
                                              <div className="social-text">
                                                No matter the challenges to
                                                come, we will remain connected
                                                through our core values aliquam
                                                lorem ante, dapibus in, viverra
                                                quis,feugia ...{" "}
                                              </div>
                                            </div>
                                            <div className="social-footer">
                                              <div className="social-date">
                                                March 19, 2021
                                              </div>
                                              <div className="social-meta">
                                                <div className="social-meta-item social-comments">
                                                  <span className="fal fa-comment" />{" "}
                                                  4{" "}
                                                </div>
                                                <div className="social-meta-item social-likes">
                                                  <span className="fal fa-thumbs-up" />{" "}
                                                  65{" "}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="grid-item elementor-repeater-item-58a594e style-twitter">
                                          <div className="unicamp-box">
                                            {" "}
                                            <span className="social-brand" />
                                            <div className="social-content">
                                              <h4 className="social-heading">
                                                @VMS{" "}
                                              </h4>
                                              <div className="social-text">
                                                Our Chief People Officer{" "}
                                                <mark>@MRidsdale16</mark> joined{" "}
                                                <mark>@benjaminlaw</mark> and{" "}
                                                <mark>@raejohnston</mark> on{" "}
                                                <mark>@tsushow</mark> aliquam
                                                lorem ante, dapibus in, viverra
                                                r, feugiat a, tellus
                                                https://t.co/uszxz0qicU{" "}
                                              </div>
                                            </div>
                                            <div className="social-footer">
                                              <div className="social-date">
                                                March 19, 2021
                                              </div>
                                              <div className="social-meta">
                                                <div className="social-meta-item social-comments">
                                                  <span className="fal fa-comment" />{" "}
                                                  6{" "}
                                                </div>
                                                <div className="social-meta-item social-likes">
                                                  <span className="fal fa-heart" />{" "}
                                                  78{" "}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="grid-item elementor-repeater-item-982259a style-facebook">
                                          <div className="unicamp-box">
                                            {" "}
                                            <span className="social-brand" />
                                            <div className="social-content">
                                              <div className="social-text">
                                                No matter the challenges to
                                                come, we will remain connected
                                                through our core values aliquam
                                                lorem ante, dapibus in, viverra
                                                quis,feugia ...{" "}
                                              </div>
                                            </div>
                                            <div className="social-footer">
                                              <div className="social-date">
                                                March 19, 2021
                                              </div>
                                              <div className="social-meta">
                                                <div className="social-meta-item social-comments">
                                                  <span className="fal fa-comment" />{" "}
                                                  5{" "}
                                                </div>
                                                <div className="social-meta-item social-likes">
                                                  <span className="fal fa-thumbs-up" />{" "}
                                                  76{" "}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="grid-item elementor-repeater-item-8c9f9b5 style-twitter">
                                          <div className="unicamp-box">
                                            {" "}
                                            <span className="social-brand" />
                                            <div className="social-content">
                                              <h4 className="social-heading">
                                                @VMS{" "}
                                              </h4>
                                              <div className="social-text">
                                                Our Chief People Officer{" "}
                                                <mark>@MRidsdale16</mark> joined{" "}
                                                <mark>@benjaminlaw</mark> and{" "}
                                                <mark>@raejohnston</mark> on{" "}
                                                <mark>@tsushow</mark> aliquam
                                                lorem ante, dapibus in, viverra
                                                r, feugiat a, tellus
                                                https://t.co/uszxz0qicU{" "}
                                              </div>
                                            </div>
                                            <div className="social-footer">
                                              <div className="social-date">
                                                March 19, 2021
                                              </div>
                                              <div className="social-meta">
                                                <div className="social-meta-item social-comments">
                                                  <span className="fal fa-comment" />{" "}
                                                  8{" "}
                                                </div>
                                                <div className="social-meta-item social-likes">
                                                  <span className="fal fa-heart" />{" "}
                                                  75{" "}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="grid-item elementor-repeater-item-b16d945 style-facebook">
                                          <div className="unicamp-box">
                                            {" "}
                                            <span className="social-brand" />
                                            <div className="social-content">
                                              <div className="social-text">
                                                No matter the challenges to
                                                come, we will remain connected
                                                through our core values aliquam
                                                lorem ante, dapibus in, viverra
                                                quis,feugia ...{" "}
                                              </div>
                                            </div>
                                            <div className="social-footer">
                                              <div className="social-date">
                                                March 19, 2021
                                              </div>
                                              <div className="social-meta">
                                                <div className="social-meta-item social-comments">
                                                  <span className="fal fa-comment" />{" "}
                                                  12{" "}
                                                </div>
                                                <div className="social-meta-item social-likes">
                                                  <span className="fal fa-thumbs-up" />{" "}
                                                  43{" "}
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
                                  className="elementor-element elementor-element-a9af402 elementor-align-center elementor-visible elementor-widget elementor-widget-tm-button"
                                  data-id="a9af402"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-button.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="tm-button-wrapper">
                                      <a
                                        className="tm-button-link tm-button style-flat tm-button-nm"
                                        role="button"
                                      >
                                        <div className="button-content-wrapper">
                                          <span className="button-text">
                                            Social media directory
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
                      className="elementor-section elementor-top-section elementor-element elementor-element-e0c09b8 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch"
                      data-id="e0c09b8"
                      data-element_type="section"
                      id="section-photo-library"
                    >
                      <div className="elementor-container elementor-column-gap-extended">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-696007c"
                            data-id="696007c"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-5b390ff elementor-visible elementor-widget elementor-widget-tm-heading"
                                  data-id="5b390ff"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="tm-modern-heading">
                                      <div className="heading-primary-wrap">
                                        <h2 className="heading-primary elementor-heading-title">
                                          Photo Library
                                        </h2>
                                      </div>
                                      <div className="heading-divider" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-8c25ecb unicamp-tabs-style-01 unicamp-tabs-view-horizontal elementor-visible elementor-widget elementor-widget-tm-tabs"
                                  data-id="8c25ecb"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-tabs.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div
                                      className="unicamp-tabpanel unicamp-tabpanel-horizontal"
                                      role="tablist"
                                    >
                                      <ul className="unicamp-nav-tabs">
                                        <li role="tab" className="active">
                                          <a
                                            href="javascript:void(0);"
                                            className="unicamp-tab-title unicamp-desktop-heading"
                                          >
                                            <div className="nav-tab-heading">
                                              <div className="nav-tab-title">
                                                Campus Photos
                                              </div>
                                            </div>
                                          </a>
                                        </li>
                                        <li role="tab">
                                          <a
                                            href="javascript:void(0);"
                                            className="unicamp-tab-title unicamp-desktop-heading"
                                          >
                                            <div className="nav-tab-heading">
                                              <div className="nav-tab-title">
                                                Athletics Photos
                                              </div>
                                            </div>
                                          </a>
                                        </li>
                                        <li role="tab">
                                          <a
                                            href="javascript:void(0);"
                                            className="unicamp-tab-title unicamp-desktop-heading"
                                          >
                                            <div className="nav-tab-heading">
                                              <div className="nav-tab-title">
                                                Videos
                                              </div>
                                            </div>
                                          </a>
                                        </li>
                                      </ul>
                                      <div className="unicamp-tab-content">
                                        <div className="tab-panel active">
                                          <div className="unicamp-tab-title tab-mobile-heading">
                                            <div className="nav-tab-heading">
                                              <div className="nav-tab-title">
                                                Campus Photos
                                              </div>
                                            </div>
                                          </div>
                                          <div className="tab-content">
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={2014}
                                              className="elementor elementor-2014"
                                              data-elementor-settings="[]"
                                            >
                                              <div className="elementor-section-wrap">
                                                <section
                                                  className="elementor-section elementor-top-section elementor-element elementor-element-c01e9a1 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                                  data-id="c01e9a1"
                                                  data-element_type="section"
                                                >
                                                  <div className="elementor-container elementor-column-gap-extended">
                                                    <div className="elementor-row">
                                                      <div
                                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ff17ff0"
                                                        data-id="ff17ff0"
                                                        data-element_type="column"
                                                      >
                                                        <div className="elementor-column-wrap elementor-element-populated">
                                                          <div className="elementor-widget-wrap">
                                                            <div
                                                              className="elementor-element elementor-element-3d61e60 unicamp-animation-zoom-in elementor-widget elementor-widget-tm-image-gallery"
                                                              data-id="3d61e60"
                                                              data-element_type="widget"
                                                              data-widget_type="tm-image-gallery.default"
                                                            >
                                                              <div className="elementor-widget-container">
                                                                <div
                                                                  className="unicamp-grid-wrapper unicamp-light-gallery"
                                                                  data-grid='{"type":"grid","columns":3,"columnsTablet":2,"columnsMobile":2,"gutter":30,"gutterTablet":20,"gutterMobile":10}'
                                                                >
                                                                  <div className="unicamp-grid lazy-grid">
                                                                    <div className="grid-sizer" />
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="./assets/media-campus-gallery-01-480x298.jpg"
                                                                        data-sub-html="<h4>media-campus-gallery-01</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-campus-gallery-01-480x298.jpg"
                                                                            alt="media-campus-gallery-01"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="./assets/media-campus-gallery-02-480x298.jpg"
                                                                        data-sub-html="<h4>media-campus-gallery-02</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-campus-gallery-02-480x298.jpg"
                                                                            alt="media-campus-gallery-02"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="./assets/media-campus-gallery-03-480x298.jpg"
                                                                        data-sub-html="<h4>media-campus-gallery-03</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-campus-gallery-03-480x298.jpg"
                                                                            alt="media-campus-gallery-03"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="./assets/media-campus-gallery-04-480x298.jpg"
                                                                        data-sub-html="<h4>media-campus-gallery-04</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-campus-gallery-04-480x298.jpg"
                                                                            alt="media-campus-gallery-04"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="./assets/media-campus-gallery-05-alt-480x298.jpg"
                                                                        data-sub-html="<h4>media-campus-gallery-05-alt</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-campus-gallery-05-480x298.jpg"
                                                                            alt="media-campus-gallery-05-alt"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="./assets/media-campus-gallery-06-480x298.jpg"
                                                                        data-sub-html="<h4>media-campus-gallery-06</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-campus-gallery-06-480x298.jpg"
                                                                            alt="media-campus-gallery-06"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
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
                                                      </div>
                                                    </div>
                                                  </div>
                                                </section>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="tab-panel">
                                          <div className="unicamp-tab-title tab-mobile-heading">
                                            <div className="nav-tab-heading">
                                              <div className="nav-tab-title">
                                                Athletics Photos
                                              </div>
                                            </div>
                                          </div>
                                          <div className="tab-content">
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={2085}
                                              className="elementor elementor-2085"
                                              data-elementor-settings="[]"
                                            >
                                              <div className="elementor-section-wrap">
                                                <section
                                                  className="elementor-section elementor-top-section elementor-element elementor-element-0a070f6 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                                  data-id="0a070f6"
                                                  data-element_type="section"
                                                >
                                                  <div className="elementor-container elementor-column-gap-extended">
                                                    <div className="elementor-row">
                                                      <div
                                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1849346"
                                                        data-id={1849346}
                                                        data-element_type="column"
                                                      >
                                                        <div className="elementor-column-wrap elementor-element-populated">
                                                          <div className="elementor-widget-wrap">
                                                            <div
                                                              className="elementor-element elementor-element-f453e5c unicamp-animation-zoom-in elementor-widget elementor-widget-tm-image-gallery"
                                                              data-id="f453e5c"
                                                              data-element_type="widget"
                                                              data-widget_type="tm-image-gallery.default"
                                                            >
                                                              <div className="elementor-widget-container">
                                                                <div
                                                                  className="unicamp-grid-wrapper unicamp-light-gallery"
                                                                  data-grid='{"type":"grid","columns":3,"columnsTablet":2,"columnsMobile":2,"gutter":30,"gutterTablet":20,"gutterMobile":10}'
                                                                >
                                                                  <div className="unicamp-grid lazy-grid">
                                                                    <div className="grid-sizer" />
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/media-athletics-gallery-06.jpg"
                                                                        data-sub-html="<h4>media-athletics-gallery-06</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-athletics-gallery-01-480x2.jpg"
                                                                            alt="media-athletics-gallery-06"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/media-athletics-gallery-05.jpg"
                                                                        data-sub-html="<h4>media-athletics-gallery-05</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-athletics-gallery-02-480x2.jpg"
                                                                            alt="media-athletics-gallery-05"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/media-athletics-gallery-04.jpg"
                                                                        data-sub-html="<h4>media-athletics-gallery-04</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-athletics-gallery-03-480x2.jpg"
                                                                            alt="media-athletics-gallery-04"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/media-athletics-gallery-03.jpg"
                                                                        data-sub-html="<h4>media-athletics-gallery-03</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-athletics-gallery-04-480x2.jpg"
                                                                            alt="media-athletics-gallery-03"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/media-athletics-gallery-02.jpg"
                                                                        data-sub-html="<h4>media-athletics-gallery-02</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-athletics-gallery-05-480x2.jpg"
                                                                            alt="media-athletics-gallery-02"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="grid-item">
                                                                      <a
                                                                        className="unicamp-box zoom"
                                                                        href="https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/03/media-athletics-gallery-01.jpg"
                                                                        data-sub-html="<h4>media-athletics-gallery-01</h4>"
                                                                      >
                                                                        <div className="unicamp-image image">
                                                                          <img
                                                                            src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-athletics-gallery-06-480x2.jpg"
                                                                            alt="media-athletics-gallery-01"
                                                                            width={
                                                                              480
                                                                            }
                                                                          />{" "}
                                                                        </div>
                                                                        <div className="unicamp-overlay">
                                                                          <div>
                                                                            <span className="fal fa-plus" />
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
                                                      </div>
                                                    </div>
                                                  </div>
                                                </section>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="tab-panel">
                                          <div className="unicamp-tab-title tab-mobile-heading">
                                            <div className="nav-tab-heading">
                                              <div className="nav-tab-title">
                                                Videos
                                              </div>
                                            </div>
                                          </div>
                                          <div className="tab-content">
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={2109}
                                              className="elementor elementor-2109"
                                              data-elementor-settings="[]"
                                            >
                                              <div className="elementor-section-wrap">
                                                <section
                                                  className="elementor-section elementor-top-section elementor-element elementor-element-a2e6a11 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                                  data-id="a2e6a11"
                                                  data-element_type="section"
                                                >
                                                  <div className="elementor-container elementor-column-gap-extended">
                                                    <div className="elementor-row">
                                                      <div
                                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-89c7904"
                                                        data-id="89c7904"
                                                        data-element_type="column"
                                                      >
                                                        <div className="elementor-column-wrap elementor-element-populated">
                                                          <div className="elementor-widget-wrap">
                                                            <section
                                                              className="elementor-section elementor-inner-section elementor-element elementor-element-21d52e3 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                                              data-id="21d52e3"
                                                              data-element_type="section"
                                                            >
                                                              <div className="elementor-container elementor-column-gap-extended">
                                                                <div className="elementor-row">
                                                                  <div
                                                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8464202"
                                                                    data-id={
                                                                      8464202
                                                                    }
                                                                    data-element_type="column"
                                                                  >
                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                      <div className="elementor-widget-wrap">
                                                                        <div
                                                                          className="elementor-element elementor-element-2ae67d8 unicamp-animation-zoom-in elementor-align-center unicamp-popup-video-button-size-sm unicamp-popup-video-button-style-01 elementor-widget elementor-widget-tm-popup-video"
                                                                          data-id="2ae67d8"
                                                                          data-element_type="widget"
                                                                          data-widget_type="tm-popup-video.default"
                                                                        >
                                                                          <div className="elementor-widget-container">
                                                                            <div className="tm-popup-video type-poster tm-popup-video-icon-play">
                                                                              <a
                                                                                className="video-link unicamp-box link-secret"
                                                                                href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                                                                              >
                                                                                <div className="video-poster">
                                                                                  <div className="unicamp-image">
                                                                                    <img
                                                                                      src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-video-poster-01.jpg"
                                                                                      alt="media-video-poster-06"
                                                                                      width={
                                                                                        480
                                                                                      }
                                                                                    />{" "}
                                                                                  </div>
                                                                                  <div className="video-overlay" />
                                                                                  <div className="video-button">
                                                                                    <div className="video-button-play">
                                                                                      <div className="video-play video-play-icon">
                                                                                        <span className="icon" />
                                                                                      </div>
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
                                                                  <div
                                                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-42da2ed"
                                                                    data-id="42da2ed"
                                                                    data-element_type="column"
                                                                  >
                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                      <div className="elementor-widget-wrap">
                                                                        <div
                                                                          className="elementor-element elementor-element-06d24ae unicamp-animation-zoom-in unicamp-popup-video-button-size-sm unicamp-popup-video-button-style-01 elementor-widget elementor-widget-tm-popup-video"
                                                                          data-id="06d24ae"
                                                                          data-element_type="widget"
                                                                          data-widget_type="tm-popup-video.default"
                                                                        >
                                                                          <div className="elementor-widget-container">
                                                                            <div className="tm-popup-video type-poster tm-popup-video-icon-play">
                                                                              <a
                                                                                className="video-link unicamp-box link-secret"
                                                                                href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                                                                              >
                                                                                <div className="video-poster">
                                                                                  <div className="unicamp-image">
                                                                                    <img
                                                                                      src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-video-poster-02.jpg"
                                                                                      alt="media-video-poster-05"
                                                                                      width={
                                                                                        480
                                                                                      }
                                                                                    />{" "}
                                                                                  </div>
                                                                                  <div className="video-overlay" />
                                                                                  <div className="video-button">
                                                                                    <div className="video-button-play">
                                                                                      <div className="video-play video-play-icon">
                                                                                        <span className="icon" />
                                                                                      </div>
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
                                                                  <div
                                                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ac68441"
                                                                    data-id="ac68441"
                                                                    data-element_type="column"
                                                                  >
                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                      <div className="elementor-widget-wrap">
                                                                        <div
                                                                          className="elementor-element elementor-element-9ef7c46 unicamp-animation-zoom-in unicamp-popup-video-button-size-sm unicamp-popup-video-button-style-01 elementor-widget elementor-widget-tm-popup-video"
                                                                          data-id="9ef7c46"
                                                                          data-element_type="widget"
                                                                          data-widget_type="tm-popup-video.default"
                                                                        >
                                                                          <div className="elementor-widget-container">
                                                                            <div className="tm-popup-video type-poster tm-popup-video-icon-play">
                                                                              <a
                                                                                className="video-link unicamp-box link-secret"
                                                                                href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                                                                              >
                                                                                <div className="video-poster">
                                                                                  <div className="unicamp-image">
                                                                                    <img
                                                                                      src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-video-poster-03.jpg"
                                                                                      alt="media-video-poster-04"
                                                                                      width={
                                                                                        480
                                                                                      }
                                                                                    />{" "}
                                                                                  </div>
                                                                                  <div className="video-overlay" />
                                                                                  <div className="video-button">
                                                                                    <div className="video-button-play">
                                                                                      <div className="video-play video-play-icon">
                                                                                        <span className="icon" />
                                                                                      </div>
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
                                                              </div>
                                                            </section>
                                                            <section
                                                              className="elementor-section elementor-inner-section elementor-element elementor-element-9a704fa elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                                              data-id="9a704fa"
                                                              data-element_type="section"
                                                            >
                                                              <div className="elementor-container elementor-column-gap-extended">
                                                                <div className="elementor-row">
                                                                  <div
                                                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-68b212e"
                                                                    data-id="68b212e"
                                                                    data-element_type="column"
                                                                  >
                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                      <div className="elementor-widget-wrap">
                                                                        <div
                                                                          className="elementor-element elementor-element-97cc68c unicamp-animation-zoom-in unicamp-popup-video-button-size-sm unicamp-popup-video-button-style-01 elementor-widget elementor-widget-tm-popup-video"
                                                                          data-id="97cc68c"
                                                                          data-element_type="widget"
                                                                          data-widget_type="tm-popup-video.default"
                                                                        >
                                                                          <div className="elementor-widget-container">
                                                                            <div className="tm-popup-video type-poster tm-popup-video-icon-play">
                                                                              <a
                                                                                className="video-link unicamp-box link-secret"
                                                                                href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                                                                              >
                                                                                <div className="video-poster">
                                                                                  <div className="unicamp-image">
                                                                                    <img
                                                                                      src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-video-poster-04.jpg"
                                                                                      alt="media-video-poster-03"
                                                                                      width={
                                                                                        480
                                                                                      }
                                                                                    />{" "}
                                                                                  </div>
                                                                                  <div className="video-overlay" />
                                                                                  <div className="video-button">
                                                                                    <div className="video-button-play">
                                                                                      <div className="video-play video-play-icon">
                                                                                        <span className="icon" />
                                                                                      </div>
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
                                                                  <div
                                                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-820a8ef"
                                                                    data-id="820a8ef"
                                                                    data-element_type="column"
                                                                  >
                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                      <div className="elementor-widget-wrap">
                                                                        <div
                                                                          className="elementor-element elementor-element-3e3d465 unicamp-animation-zoom-in unicamp-popup-video-button-size-sm unicamp-popup-video-button-style-01 elementor-widget elementor-widget-tm-popup-video"
                                                                          data-id="3e3d465"
                                                                          data-element_type="widget"
                                                                          data-widget_type="tm-popup-video.default"
                                                                        >
                                                                          <div className="elementor-widget-container">
                                                                            <div className="tm-popup-video type-poster tm-popup-video-icon-play">
                                                                              <a
                                                                                className="video-link unicamp-box link-secret"
                                                                                href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                                                                              >
                                                                                <div className="video-poster">
                                                                                  <div className="unicamp-image">
                                                                                    <img
                                                                                      src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-video-poster-05.jpg"
                                                                                      alt="media-video-poster-02"
                                                                                      width={
                                                                                        480
                                                                                      }
                                                                                    />{" "}
                                                                                  </div>
                                                                                  <div className="video-overlay" />
                                                                                  <div className="video-button">
                                                                                    <div className="video-button-play">
                                                                                      <div className="video-play video-play-icon">
                                                                                        <span className="icon" />
                                                                                      </div>
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
                                                                  <div
                                                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5e6d71c"
                                                                    data-id="5e6d71c"
                                                                    data-element_type="column"
                                                                  >
                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                      <div className="elementor-widget-wrap">
                                                                        <div
                                                                          className="elementor-element elementor-element-ddb88f7 unicamp-animation-zoom-in unicamp-popup-video-button-size-sm unicamp-popup-video-button-style-01 elementor-widget elementor-widget-tm-popup-video"
                                                                          data-id="ddb88f7"
                                                                          data-element_type="widget"
                                                                          data-widget_type="tm-popup-video.default"
                                                                        >
                                                                          <div className="elementor-widget-container">
                                                                            <div className="tm-popup-video type-poster tm-popup-video-icon-play">
                                                                              <a
                                                                                className="video-link unicamp-box link-secret"
                                                                                href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                                                                              >
                                                                                <div className="video-poster">
                                                                                  <div className="unicamp-image">
                                                                                    <img
                                                                                      src="https://raw.githubusercontent.com/jongning/jongning.github.io/main/pictures/seniorProjectPhoto/News%26Spotlight/480x298/media-video-poster-06.jpg"
                                                                                      alt="media-video-poster-01"
                                                                                      width={
                                                                                        480
                                                                                      }
                                                                                    />{" "}
                                                                                  </div>
                                                                                  <div className="video-overlay" />
                                                                                  <div className="video-button">
                                                                                    <div className="video-button-play">
                                                                                      <div className="video-play video-play-icon">
                                                                                        <span className="icon" />
                                                                                      </div>
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
                      className="elementor-section elementor-top-section elementor-element elementor-element-a2c7c20 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch"
                      data-id="a2c7c20"
                      data-element_type="section"
                      id="section-contact"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-extended">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-96177b6"
                            data-id="96177b6"
                            data-element_type="column"
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div
                                  className="elementor-element elementor-element-8eecf57 elementor-visible elementor-widget elementor-widget-tm-heading"
                                  data-id="8eecf57"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"unicampFadeInUp"}'
                                  data-widget_type="tm-heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="tm-modern-heading">
                                      <div className="heading-primary-wrap">
                                        <h3 className="heading-primary elementor-heading-title">
                                          Vincnet Mary School Of Science &amp;
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
                  </div>
                </div>
              </div>
            </article>
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
                                        <div className="item elementor-repeater-item-882f063">
                                          <a
                                            className="link"
                                            href="/alumni"
                                          >
                                            <div className="list-header">
                                              <div className="text-wrap">
                                                <div className="text">
                                                  Alumni
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                        <div className="item elementor-repeater-item-9052523">
                                          <a className="link" href="/cs">
                                            <div className="list-header">
                                              <div className="text-wrap">
                                                <div className="text">CS</div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                        <div className="item elementor-repeater-item-450b61a">
                                          <a className="link" href="/it">
                                            <div className="list-header">
                                              <div className="text-wrap">
                                                <div className="text">IT</div>
                                              </div>
                                            </div>
                                          </a>
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

  <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/js/main.min.js' id='unicamp-script-js'></Script>
    <Script src='https://unicamp.thememove.com/main/wp-content/themes/unicamp/assets/js/woo/general.min.js' id='unicamp-woo-general-js'></Script>
    <Script id='isw-frontend-js-extra'></Script>

  
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
            <link href="/"/>
              <div className="menu-item-wrap"><span className="menu-item-title">Home</span>
              </div>
            
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-461 level-1">
            <link href="/news"/>
              <div className="menu-item-wrap"><span className="menu-item-title">News &amp; Spotlight</span>
              </div>
            
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-695 level-1">
            <link href="https://unicamp.thememove.com/main/admissions/"/>
              <div className="menu-item-wrap">
                <span className="menu-item-title">Admissions</span>
              </div>
            
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
                <link href="http://isl.scitech.au.edu/"/>
                  <div className="menu-item-wrap">
                    <span className="menu-item-title">
                      Intelligent Systems Research Laboratory
                    </span>
                  </div>
                
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1066">
                <link href="https://portal.scitech.au.edu/idl/"/>
                  <div className="menu-item-wrap">
                    <span className="menu-item-title">
                      Intelligent Data Analytics Research Laboratory
                    </span>
                  </div>
                
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1481">
                <link href="https://portal.scitech.au.edu/dcode/"/>
                  <div className="menu-item-wrap">
                    <span className="menu-item-title">d*code</span>
                  </div>
                
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

import React from "react";
import Head from "next/head";
import Link from "next/link";

function DefaultHeader() {
  return (
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
      <noscript>
        &lt;style&gt;.woocommerce-product-gallery{"{"} opacity: 1 !important; {"}"}
        &lt;/style&gt;
      </noscript>
    </Head>
  );
}

export default DefaultHeader;

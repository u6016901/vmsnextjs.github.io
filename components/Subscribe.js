import React from 'react'

export default function Subscribe() {
  return (
    
                          
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
                        Get the latest <mark>VMS news</mark> delivered to you inbox
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
                                        <button className="button-submit" type="submit">
                                          <span className="button-text">Subscribe</span>
                                          <span className="button-icon form-icon" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <input
                                    type="hidden"
                                    name="_mc4wp_timestamp"
                                    defaultValue={1647339208}
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
                                  <input
                                    type="hidden"
                                    name="_mc4wp_honeypot"
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

  )
}

import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerDetails from "./shared/footerDetails.jsx";
import {
  DesktopMdBreakpoint,
  MobileMdBreakpoint,
} from "./components/WrapperClasses/Breakpoints.jsx";

function Footer() {
  const scrollWithOffset = (el, duration) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const startingTimestamp = performance.now();
    const durationInMs = duration || 1000; // Default duration is 1000ms

    const scroll = () => {
      const elapsed = performance.now() - startingTimestamp;
      const progress = elapsed / durationInMs;

      if (progress < 1) {
        window.scrollTo(0, yCoordinate * progress);
        requestAnimationFrame(scroll);
      } else {
        window.scrollTo(0, yCoordinate);
      }
    };

    scroll();
  };

  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <section id="footer" className="bg-teal">
      <div className="footer-content">
        {/* mobile version */}
        <MobileMdBreakpoint>
          <Row className="d-flex justify-content-center pb-2 d-md-none">
            {footerDetails.LogoImage}
            <p className="pt-2">{footerDetails.supportingText}</p>
            <div className="Email">
              {footerDetails.EmailIcon}
              {"  "}
              <a
                href="mailto: info@saathealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-weight-bold"
              >
                {footerDetails.Email}
              </a>
            </div>
            <div className="Phone mt-3">
              {footerDetails.PhoneIcon}
              {"  "}
              <a
                href={`tel:${footerDetails.Phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-weight-bold"
              >
                {footerDetails.Phone}
              </a>
            </div>
            <Col xs={12} md={12} className="mt-3">
              <div className="d-flex">
                {footerDetails.socialIcons.map((social, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Nav.Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="common-footer-social"
                      >
                        {social.icon}
                      </Nav.Link>
                    </React.Fragment>
                  );
                })}
              </div>
            </Col>
            <Col xs={12} md={12} className="pt-2">
              <Row className="d-flex flex-column align-items-center justify-content-center">
                {footerDetails.footerTabsMobile.map((tab) => {
                  return (
                    <Col key={tab.id} className="text-uppercase py-1">
                      <Link
                        to={tab.to}
                        smooth="true"
                        onClick={() =>
                          scrollWithOffset(document.getElementById("contactus"))
                        }
                      >
                        {tab.title}
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </MobileMdBreakpoint>
        {/* For desktop version */}
        <DesktopMdBreakpoint>
          <Row className="d-none d-md-flex justify-content-center align-items-start">
            <Row className="d-flex justify-content-center align-items-start">
              <Col xs={12} md={4} xl={6} className="pt-4 pt-md-5">
                {footerDetails.LogoImage}
                <p className="pt-2">{footerDetails.supportingText}</p>
                <div className="Email">
                  {footerDetails.EmailIcon}
                  {"  "}
                  <a
                    href="mailto: info@saathealth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    {footerDetails.Email}
                  </a>
                </div>
                <div className="Phone mt-3">
                  {footerDetails.PhoneIcon}
                  {"  "}
                  <a
                    href={`tel:${footerDetails.Phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    {footerDetails.Phone}
                  </a>
                </div>

                <Row>
                  <Col xs={12} className="mt-4 px-2">
                    <div className="d-flex">
                      {footerDetails.socialIcons.map((social, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Nav.Link
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="common-footer-social"
                            >
                              {social.icon}
                            </Nav.Link>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={8} xl={6} className="pt-2 pt-md-5 px-0">
                <Row className="d-flex justify-content-end">
                  {footerDetails.footerTabs.map((FooterTab) => {
                    return (
                      <Col
                        xs={4}
                        key={FooterTab.id}
                        className={FooterTab.justifyContent}
                      >
                        <div>
                          <h5 className="text-uppercase">
                            <Link to={FooterTab.to} smooth="true">
                              {FooterTab.title}
                            </Link>
                          </h5>
                          {FooterTab.tabs.map((tab) => {
                            return (
                              <p key={tab.id} className="text-uppercase py-1">
                                <Link
                                  to={tab.to}
                                  smooth="true"
                                  scroll={(el) =>
                                    scrollWithOffset(el, tab.subTitle)
                                  }
                                >
                                  {tab.subTitle}
                                </Link>
                              </p>
                            );
                          })}
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Row>
        </DesktopMdBreakpoint>
      </div>
      <h6 className="mt-3">
        Copyright© {getYear()} Mehnaaz. All Rights Reserved.
        {/* <div>Designed and developed by Hayley Mahaney and Jai Kaushil</div> */}
      </h6>
    </section>
  );
}

export default Footer;

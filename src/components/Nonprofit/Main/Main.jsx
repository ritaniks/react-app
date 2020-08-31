import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Hero from './parts/Hero';
import Reviews from './parts/Reviews';
import NonProfitOrganization from './parts/NonProfitOrganization';
import WaveAnimation from './parts/WaveAnimation';
import ImageResize from './parts/ImageResize';
import {
  brands,
  grantor,
  customizeVoc,
  eSignatures,
  timeEntry,
  customizable,
  mobile,
  teamImg,
} from './parts/imageHelper';

import useWindowSize from '../../hooks/useWindowSize';

import css from './Main.module.scss';

const Main = () => {
  const size = useWindowSize();
  return (
    <main>
      <WaveAnimation />
      <Hero size={size} />
      <Container>
        <div className={`mx-auto text-center mb-2 pt-3 ${css.title}`}>
          <h3 className={`mb-md-3 ${css.titleH3}`}>
            Over 14,800 Customers Trust TimeLedger
          </h3>
        </div>
        <Row className="align-items-md-end">
          {brands.map((brand, index) => (
            <Col xs={12} lg={4} key={index}>
              <ImageResize path={brand.img} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className={size.width < 768 ? 'py-4' : 'py-6'}>
        <Container>
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Labor automatically allocated across grants/funding sources
            </h2>
            Users can enter their time by grant or funding source.
          </div>
          <Row className="d-flex justify-content-center">
            <ImageResize path={grantor[0]} />
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className={`sectionbg ${size.width < 768 ? 'py-4' : 'py-6'}`}
      >
        <Container>
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 text-primary ${css.titleH2}`}>
              Non-Profit Organization, NPO Contracts Profitability Report
            </h2>
            With automatic Fringe Pool disbursement by project and user
            resource.
          </div>
          {/* <NonProfitOrganization /> */}
          <NonProfitOrganization />
        </Container>
      </Container>

      <Container fluid className={size.width < 768 ? 'py-4' : 'py-6'}>
        <Container>
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Customizable vocabulary
            </h2>
            Get fast user adoption by using your terms for users, clients,
            grants, and funding sources.
          </div>
          <Row className="d-flex justify-content-center">
            <ImageResize path={customizeVoc[0]} />
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className={`sectionbg ${size.width < 768 ? 'py-4' : 'py-6'}`}
      >
        <Container>
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Users can quickly confirm timesheets by E-Signature
            </h2>
            Allow users to upload their signature so they can easily be added to
            their approved timesheets.
          </div>
          <Row className="d-flex justify-content-center">
            <ImageResize path={eSignatures[0]} />
          </Row>
        </Container>
      </Container>

      <Container fluid className={size.width < 768 ? 'py-4' : 'py-6'}>
        <Container>
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Add a time entry in seconds
            </h2>
            Your users learn to make time and expense entries in 5 minutes.
          </div>
          <Row className="d-flex justify-content-center">
            <ImageResize path={timeEntry[0]} />
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className={`sectionbg ${size.width < 768 ? 'py-4' : 'py-6'}`}
      >
        <Container>
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Comply with labor laws using our customizable timesheet
              attestation
            </h2>
          </div>
          <Row className="d-flex justify-content-center">
            <ImageResize path={customizable[0]} />
          </Row>
        </Container>
      </Container>

      <Container fluid className={size.width < 768 ? 'py-4' : 'py-6'}>
        <Container>
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Easily access TimeLedger <br /> from any mobile device
            </h2>
            TimeLedger has a simple mobile app that can be used on any device
            (iPhone, Android Phones, iPads, and other tablets) to allow your
            people to enter time and expense entries anywhere.
          </div>
          <Row className="d-flex justify-content-center">
            <ImageResize path={mobile[0]} />
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className={`sectionbg ${size.width < 768 ? 'py-4' : 'py-6'}`}
      >
        <Container>
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>Testimonials</h2>
          </div>
          <Reviews brands={brands} />
        </Container>
      </Container>

      {/* Blue section */}
      <Container
        fluid
        className={`bg-primary ${size.width < 768 ? 'py-4' : 'py-6'}`}
      >
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <ImageResize path={teamImg[0]} />
            </Col>
            <Col xs={12} md={6} className="text-white">
              <h2 className={`mb-md-3 text-white ${css.titleH2}`}>
                Free up your managers&apos; time for more important tasks
              </h2>
              <ul className={`mb-4 ${css.liP}`}>
                <li>
                  TimeLedger helps free up your managers by automating
                  management of employee productivity
                </li>
                <li>
                  Set unlimited time and monetary budget alerts for each grant
                  or funding source.
                </li>
                <li>
                  Optionally break out funding alerts between labor and
                  expenses.
                </li>
                <li>
                  Get automated alerts sent for breaks and meals to comply with
                  applicable labor laws.
                </li>
                <li>
                  Managers can instantly get a real-time view of “who’s working
                  on what”
                </li>
                <li>
                  Analyze historical trends with TimeLedger’s dashboard
                  summaries.
                </li>
              </ul>
              <Button
                variant="light"
                size="lg"
                className={`px-5 ${size.width < 1200 && 'btn-block'}`}
              >
                Chat with us
              </Button>
              <span className="p-2 p-lg-3 d-flex d-xl-inline justify-content-center">
                or
              </span>
              <Button
                variant="warning"
                size="lg"
                className={size.width < 1200 && 'btn-block'}
              >
                <a href="https://www.timeledger.com/free-trial-landing">
                  Start your Free Trial Now
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default Main;

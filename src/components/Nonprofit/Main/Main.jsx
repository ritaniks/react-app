import React from 'react';
import PropTypes from 'prop-types';

import Hero from './parts/Hero';
import Reviews from './parts/Reviews';
import NonProfitOrganization from './parts/NonProfitOrganization';
import AddTimeEntry from './parts/AddTimeEntry';
import ImageResize from './parts/ImageResize';
import {
  brands,
  grantor,
  customizeVoc,
  eSignatures,
  customizable,
  mobile,
  teamImg,
} from './parts/imageHelper';

import useWindowSize from '../../hooks/useWindowSize';

import css from './Main.module.scss';

const Main = ({ handleClick }) => {
  const size = useWindowSize();

  return (
    <main>
      <Hero size={size} />
      <div className={`container mx-auto`}>
        <div className={`mx-auto text-center mb-2 pt-5 ${css.title}`}>
          <h3 className={`mb-md-3 ${css.titleH3}`}>
            Over 14,800 Customers Trust TimeLedger
          </h3>
        </div>
        <div className="row align-items-md-end">
          {brands.map((brand, index) => (
            <div key={index} className="col-10 col-lg-4 px-5 pb-1">
              <ImageResize path={brand.img} />
            </div>
          ))}
        </div>
      </div>

      {/* Labor automatically */}
      <div className={`container-fluid ${size.width < 768 ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto">
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Labor automatically allocated across grants/funding sources
            </h2>
            Users can enter their time by grant or funding source.
          </div>
          <div className="d-flex justify-content-center m-0 row">
            <ImageResize path={grantor[0]} />
          </div>
        </div>
      </div>

      {/* Non-Profit Organization */}
      <div
        className={`container-fluid sectionbg ${
          size.width < 768 ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto">
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 text-primary ${css.titleH2}`}>
              Non-Profit Organization, NPO Contracts Profitability Report
            </h2>
            With automatic Fringe Pool disbursement by project and user
            resource.
          </div>
          <NonProfitOrganization />
        </div>
      </div>

      {/* Customizable vocabulary */}
      <div className={`container-fluid  ${size.width < 768 ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto">
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Customizable vocabulary
            </h2>
            Get fast user adoption by using your terms for users, clients,
            grants, and funding sources.
          </div>
          <div className="d-flex justify-content-center m-0 row">
            <ImageResize path={customizeVoc[0]} />
          </div>
        </div>
      </div>

      {/* Users can quickly confirm */}
      <div
        className={`container-fluid sectionbg ${
          size.width < 768 ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto">
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Users can quickly confirm timesheets by E-Signature
            </h2>
            Allow users to upload their signature so they can easily be added to
            their approved timesheets.
          </div>
          <div className="d-flex justify-content-center m-0 row">
            <ImageResize path={eSignatures[0]} />
          </div>
        </div>
      </div>

      {/* Add a time entry in seconds */}
      <div className={`container-fluid  ${size.width < 768 ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto">
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Add a time entry in seconds
            </h2>
            Your users learn to make time and expense entries in 5 minutes.
          </div>
          <AddTimeEntry />
        </div>
      </div>

      {/* Comply with labor laws using our */}
      <div
        className={`container-fluid sectionbg ${
          size.width < 768 ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto">
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Comply with labor laws using our customizable timesheet
              attestation
            </h2>
          </div>
          <div className="d-flex justify-content-center m-0 row">
            <ImageResize path={customizable[0]} />
          </div>
        </div>
      </div>

      {/*  Easily access TimeLedger from any mobile device */}
      <div className={`container-fluid  ${size.width < 768 ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto">
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>
              Easily access TimeLedger <br /> from any mobile device
            </h2>
            TimeLedger has a simple mobile app that can be used on any device
            (iPhone, Android Phones, iPads, and other tablets) to allow your
            people to enter time and expense entries anywhere.
          </div>
          <div className="d-flex justify-content-center m-0 row">
            <ImageResize path={mobile[0]} />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div
        className={`container-fluid sectionbg ${
          size.width < 768 ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto">
          <div className={`mx-auto text-center mb-4 ${css.title}`}>
            <h2 className={`mb-md-3 ${css.titleH2}`}>Testimonials</h2>
          </div>
          <Reviews brands={brands} />
        </div>
      </div>

      {/* Blue section */}
      <div className="container-fluid bg-primary ">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-12 col-md-6">
              <picture>
                <source media="(min-width: 1200px)" srcSet={teamImg[1]} />
                <source media="(min-width: 992px)" srcSet={teamImg[3]} />
                <source media="(min-width: 768px)" srcSet={teamImg[2]} />
                <source media="(max-width: 767px)" srcSet={teamImg[0]} />
                <img
                  src={teamImg[0]}
                  alt={teamImg[0]}
                  style={{ width: ' 100%' }}
                />
              </picture>
            </div>
            <div
              className={`col-12 col-md-6 text-white ${
                size.width < 768 ? 'py-4' : 'py-6'
              }`}
            >
              <h2 className={`mb-md-3 text-white ${css.titleH2}`}>
                Free up your managers&apos; time for more important tasks
              </h2>
              <ul className={`mb-4 ${css.liP}`}>
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
              <button
                type="button"
                onClick={handleClick}
                className={`btn btn-light btn-lg px-5 ${
                  size.width < 1200 && 'btn-block'
                }`}
              >
                Chat with us
              </button>
              <span className="p-2 p-lg-3 d-flex d-xl-inline justify-content-center">
                or
              </span>
              <button
                type="button"
                className={`btn btn-warning btn-lg ${
                  size.width < 1200 && 'btn-block'
                }`}
              >
                <a href="https://www.timeledger.com/free-trial-landing">
                  Start your Free Trial Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Main;

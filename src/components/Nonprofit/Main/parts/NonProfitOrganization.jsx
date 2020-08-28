/*eslint-disable*/
import React, { useState, useEffect } from 'react';

import { Tab, Nav, Col, Row } from 'react-bootstrap';
import ImageResize from './ImageResize';
import { nonProfitOrg } from './imageHelper';

import css from './NonProfitOrganization.module.scss';

const reportArr = [
  { name: 'Detailed', img: nonProfitOrg[0] },
  { name: 'Detailed / Collapsed Fringe Rows', img: nonProfitOrg[1] },
  { name: 'Summary', img: nonProfitOrg[2] },
  { name: 'Summary / Collapsed Fringe Rows', img: nonProfitOrg[3] },
];

const NonProfitOrganization = () => {
  const [switcher, setSwitcher] = useState(reportArr[0].name);

  useEffect(() => {
    let timerId;

    // reportArr.map(el => {
    //   timerId = setInterval(() => {
    //     // console.log(el.name, 'el.name');
    //     setSwitcher(el.name);
    //   }, 4000);
    // });
    reportArr.map(el => {
      timerId = setTimeout(() => {
        console.log(el.name, 'el.name');
        // setSwitcher(el.name);
      }, 4000);
    });

    return () => {
      // setSwitcher();
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={reportArr[0].name}
      >
        <Row>
          <Col sm={5}>
            <Nav variant="pills" className={`${css.border} flex-column`}>
              {reportArr.map((el, index) => (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={el.name}>{el.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              {reportArr.map((el, index) => (
                <Tab.Pane key={index} eventKey={el.name}>
                  <ImageResize path={reportArr[index].img} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default NonProfitOrganization;

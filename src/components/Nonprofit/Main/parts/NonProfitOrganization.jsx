import React, { useState } from 'react';

import { Tab, Nav, Col, Row, Button } from 'react-bootstrap';
// import css from './NonProfitOrganization.module.scss';
import { nonProfitOrg } from './imageHelper';

const reportArr = [
  { name: 'Detailed' },
  { name: 'Detailed / Collapsed Fringe Rows' },
  { name: 'Summary' },
  { name: 'Summary / Collapsed Fringe Rows', img: [] },
];

const NonProfitOrganization = () => {
  console.log(nonProfitOrg[0][0], 'd');
  return (
    <>
      <img src={nonProfitOrg[3][1]} />
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={reportArr[0].name}
      >
        <Row>
          <Col sm={7}>
            <Tab.Content>
              {reportArr.map((el, index) => (
                <Tab.Pane key={index} eventKey={el.name}>
                  (index={index}) {el.name}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
          <Col sm={5}>
            <Nav variant="pills" className="flex-column">
              {reportArr.map((el, index) => (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={el.name}>{el.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default NonProfitOrganization;

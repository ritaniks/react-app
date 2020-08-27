/*eslint-disable*/
import React from 'react';

import { Tab, Nav, Col, Row } from 'react-bootstrap';
import ImageResize from './ImageResize';
import { nonProfitOrg } from './imageHelper';

// import css from './NonProfitOrganization.module.scss';

const reportArr = [
  { name: 'Detailed', img: [nonProfitOrg[0]] },
  { name: 'Detailed / Collapsed Fringe Rows', img: [nonProfitOrg[1]] },
  { name: 'Summary', img: [nonProfitOrg[2]] },
  { name: 'Summary / Collapsed Fringe Rows', img: [nonProfitOrg[3]] },
];

const NonProfitOrganization = () => {
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
                  <ImageResize path={reportArr[index].img} />
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

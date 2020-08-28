/*eslint-disable*/
import React, { useState, useEffect } from 'react';

import { Tab, Nav, Col, Row, Collapse, Fade } from 'react-bootstrap';
import ImageResize from './ImageResize';
import { nonProfitOrg } from './imageHelper';

import css from './NonProfitOrganization.module.scss';

const reportArr = [
  { id: 0, name: 'Detailed', img: nonProfitOrg[0] },
  { id: 1, name: 'Detailed / Collapsed Fringe Rows', img: nonProfitOrg[1] },
  { id: 2, name: 'Summary', img: nonProfitOrg[2] },
  { id: 3, name: 'Summary / Collapsed Fringe Rows', img: nonProfitOrg[3] },
];

const NonProfitOrganization = () => {
  const [switcher, setSwitcher] = useState(reportArr[0].name);
  // const [index, setIndex] = useState(0);
  // const [index2, setIndex2] = useState(false);

  // const changer = () => {
  //   setTimeout(() => {
  //     if (index2) {
  //       setSwitcher(reportArr[index2].name);
  //       setIndex2(false);
  //     } else {
  //       setSwitcher(reportArr[index].name);
  //     }

  //     if (index >= reportArr.length - 1) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //   }, 2000);
  // };

  // useEffect(() => {
  //   console.log(index, 'index');
  //   setSwitcher(reportArr[index].name);
  //   changer();
  // }, [index]);

  // useEffect(() => {
  //   let timerId;
  //   for (let i = 0; i < reportArr.length; i++) {
  //     timerId = setInterval(() => {
  //       i++;
  // if (i >= reportArr.length) {
  //   i = 0;
  // }
  //       // setIndex(i);
  //       setSwitcher(reportArr[i].name);
  //       // console.log(reportArr[i].name);
  //     }, 1000);

  //     break;
  //   }
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []);

  const handleClick = e => {
    const clickBtn = e.target.outerText;
    setSwitcher(clickBtn);
    // console.dir(e.target, 'e.target');
    // // setIndex(e.target);
    // console.dir(e.target.id, '3');
    // reportArr.find((el, i) => {
    //   if (el.name === e.target.outerText) {
    //     // console.log(el.name, '2');

    //     console.log(i, 'index2');
    //     setIndex2(i);
    //     return;
    //   }
    // });

    // console.dir(ind, 'e.target.');
  };

  return (
    <>
      <Tab.Container id="left-tabs-example" activeKey={switcher}>
        <Row>
          <Col sm={5}>
            <Nav variant="pills" className={`${css.border} flex-column`}>
              {reportArr.map((el, index) => (
                <Nav.Item key={el.id} onClick={handleClick}>
                  <Nav.Link eventKey={el.name}>{el.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              {reportArr.map((el, index) => (
                <Collapse key={el.id} in={true}>
                  <Tab.Pane eventKey={el.name}>
                    <ImageResize path={reportArr[index].img} />
                  </Tab.Pane>
                </Collapse>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default NonProfitOrganization;

"use client";
import React from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../globals.css";
import CadCliente from "../CadCliente/";
import CadColabourador from "../CadColaborador";

const BsTabs = () => {
  return (
    <div className="bstab">
      <Container className="py-2">
        <Row className="justify-content-center">
          <Tabs
            justify
            variant="pills"
            defaultActiveKey="tab-1"
            className="mb-1 p-0"
          >
            <Tab eventKey="tab-1" title="Cliente">
              <CadCliente />
            </Tab>
            <Tab eventKey="tab-2" title="Colaborador">
              <CadColabourador />
            </Tab>
            <Tab eventKey="tab-3" title="Tab 3">
              Tab 3 content...
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default BsTabs;

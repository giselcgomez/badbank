import React, { useContext } from 'react';
import Card from './context';
import { Container, Col, Row } from 'react-bootstrap';
import { Route } from "react-router-dom";

function ErrorPage() {

  return (
    <Container fluid="md" className="m-4">
    <Row>
      <Col  md={{ span: 4, offset: 4}}>
            <Card
              header="YOU ARE LOST!!!"
              bgcolor="secondary"
              body={
                <>
                  <h6>This page doesn't exists!</h6>
                  <br/>
                  <div className="text-center">
                  <a href="/" target="_blank" rel="noreferrer">
                  <button className="btn btn-success">Go to Home</button>
                 </a>

                  </div>
                </>
              }
            />
        </Col>
      </Row>
    </Container>    



  )
}

export default ErrorPage ;
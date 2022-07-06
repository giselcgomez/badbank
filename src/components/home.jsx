import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Row, Image} from 'react-bootstrap';
import bankImage from '../bank.png';

function Home(){
    return (     
        <Container>
            <Row>
                <Col lg={4}>
                    <Card className="mt-5">
                        <Image
                            src = {bankImage}
                            className='card-img-top'
                            alt="bank"
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>WELCOME TO THE BANK!</Card.Title>
                            <Card.Text as='div'>
                            <br />
                            <h6><em>Caution: This is a highly insecure application, but it helped me learning!</em></h6>
                            <br />
                            <h4>You can move around using the navigation bar.</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      );  
  }
export default Home;
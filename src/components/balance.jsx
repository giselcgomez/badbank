import React from 'react';
import { UserContext } from './context';
import Card from './context';
import { Container, Col, Row } from 'react-bootstrap';

function Balance() {
    const [status, setStatus]     = React.useState('');
    const ctx                     = React.useContext(UserContext);

  return (
    <Container fluid="md" className="m-4">
    <Row>
      <Col  md={{ span: 4, offset: 4}}>
              <Card
              bgcolor="secondary"
              header="BALANCE"
              status={status}
              body={
                  <div>
                  <h6>Welcome, {ctx.users[ctx.users.length-1].name}!</h6>
                  <br/>
                  <h5>ACCOUNT BALANCE:  ${ctx.users[ctx.users.length-1].balance}</h5>
                </div>
              }
                />
                </Col>
                </Row>
             </Container>    
  );
}

export default Balance;
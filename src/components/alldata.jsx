import React from 'react';
import { UserContext } from './context';
import { Container, Col, Row } from 'react-bootstrap';

function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <Container fluid="md" className="m-4">
    <Row>
       <Col  md={{ span: 4, offset: 4}}>
              <>
                <table id="bank">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PASSWORD</th>
                      <th>BALANCE</th>
                      <th>AUTHENTICADED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ctx.users.map((user, i) => 
                      <tr key={i}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.balance}</td>
                        <td>{user.isLogged }</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </>
        </Col>
      </Row>
    </Container>  


  );  
}

export default AllData;

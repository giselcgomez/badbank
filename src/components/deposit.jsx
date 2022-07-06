import React from 'react';
import { UserContext } from './context';
import Card from './context';
import { Container, Col, Row } from 'react-bootstrap';

function Deposit(){
  const ctx                     = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.users[0].balance);
  const [disabled, setDisabled] = React.useState(true);

  const validate = amount => {
    if (!amount) {
      setStatus('Please enter a value');
      return false;
    }
    if (amount <= 0) {
      setStatus('Cannot deposit 0 or negative amounts');
      return false;
    }
    if (isNaN(amount)) {
      setStatus('Only numbers permitted');
      return false;
    }
    return true;
  }

  const makeDeposit = amount => {
    if (!validate(amount)) return;
    setBalance(Number(balance) + Number(amount));
    setShow(false);
    setStatus('');
    ctx.users[ctx.users.length-1].balance += Number(amount);
  }

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  React.useEffect(() => {
    !deposit ? setDisabled(true) : setDisabled(false);
  }, [deposit]);

  return (

    <Container fluid="md" className="m-4">
     <Row>
        <Col  md={{ span: 4, offset: 4}}>
          <Card
            header="DEPOSIT"
            bgcolor="secondary"
            status={status}
            body={show ? (
              <>
                <h6>Welcome, {ctx.users[ctx.users.length-1].name}!</h6>
                <br />
                <h6>ACCOUNT BALANCE: ${ctx.users[ctx.users.length-1].balance}</h6>

                <br/>
                AMOUNT
                <br/>
                <input 
                    type="deposit" 
                    className="form-control" 
                    id="deposit" 
                    placeholder="0" 
                    value={deposit}
                    onChange={e => setDeposit(e.currentTarget.value)}
                />
                <br/><hr />
                <div className="text-center">
                    <button
                      type="submit" 
                      className="btn btn-light" 
                      onClick={() => makeDeposit(deposit)} 
                      disabled={disabled}>
                        Deposit
                    </button>
                </div>
                <br/>
              </>
            ):(
              <>
                <h5>THANK YOU! Your transaction was successfull</h5>
                <br/>
                <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-light"
                      onClick={clearForm}>
                        Another deposit
                    </button>
                </div>
                <br/>
              </>
            )}
          />
        </Col>
      </Row>
    </Container>    
  )
}
export default Deposit;
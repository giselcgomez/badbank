import React from 'react';
import { UserContext } from './context';
import Card from './context';
import { Container, Col, Row } from 'react-bootstrap';

function Withdraw(){
  const ctx                           = React.useContext(UserContext);
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [balance, setBalance]         = React.useState(ctx.users[0].balance);
  const [disabled, setDisabled]       = React.useState(true);
  const [withdrawal, setWithdrawal]   = React.useState('');

  const validate = amount => {
    if (!amount) {
      setStatus('Please enter a value');
      return false;
    }
    if (amount <= 0) {
      setStatus('Try Again: Not allowed negative amounts');
      return false;
    }
    if (isNaN(amount)) {
      setStatus('INVALID ENTRY: Only numbers please');
      return false;
    }
    if(amount > balance){
      setStatus('OVERDRAFT ACCOUNT, TRY AGAIN');
      return false;
    }
    return true;
  }

  const withdraw = amount => {
    if (!validate(amount)) return;
    setBalance(Number(balance) - Number(amount));
    setShow(false);
    setStatus('');
    ctx.users[ctx.users.length-1].balance -= Number(amount);
  }

  function clearForm(){
    setWithdrawal('');
    setShow(true);
  }

  React.useEffect(() => {
    !withdrawal ? setDisabled(true) : setDisabled(false);
  }, [withdrawal]);

  return (
    <Container fluid="md" className="m-4">
    <Row>
       <Col  md={{ span: 4, offset: 4}}>
            <Card
              header="WITHDRAW"
              bgcolor="secondary"
              status={status}
              body={show ? (
                <>
                  <h6>Welcome, {ctx.users[ctx.users.length-1].name}!</h6>
                  <br/>
                  <h6>ACCOUNT BALANCE: ${ctx.users[ctx.users.length-1].balance}</h6>
                  <br/>
                  AMOUNT
                  <br/>
                  <input  
                    className="form-control" 
                    id="withdrawal" 
                    placeholder="0" 
                    value={withdrawal}
                    onChange={e => setWithdrawal(e.currentTarget.value)}
                  />
                  <br/>
                  <div className="text-center">
                    <button
                      type="submit" 
                      className="btn btn-light" 
                      onClick={() => withdraw(withdrawal)} 
                      disabled={disabled}>
                        Withdraw
                    </button>
                  </div>
                  <br/>
                </>
              ):(
                <>
                  <h5>Withdrawal completed successfully</h5>
                  <br/>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-light"
                      onClick={clearForm}>
                        Make another withdrawal
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

export default Withdraw;
import React from 'react';
import Card from './context';
import { UserContext } from './context';
import { Container, Col, Row } from 'react-bootstrap';


function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  const ctx = React.useContext(UserContext);

  function validate(field, label){
      if (!field) {
        setStatus('Error: this field is empty: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }

      if (
        label === "email" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(field)
      ) {
        const errorMessage = "Error: Email Invalid format!";
        setStatus(errorMessage);
        return false;
      }

      if (password.length < 8 && password.length > 0) {
        setStatus('Error: Password must contain 8 or more characters!');
        return false;
      }

      let isValidUser = findUser(email);
      if (isValidUser) {
        const errorMessage = "Error: User was NOT added. The user already exists! Please correct the contents and try again";
        setStatus(errorMessage);
        return false;
      }   

      function findUser(email) {
      let isValid = false;
      ctx.users.forEach((user) => {
          if (user.email === email) {
              isValid = true;
          }
      });
        return isValid;
      
      }

      setStatus();
      return true;
  }





  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (

    <Container fluid="md" className="m-4">
      <Row>
        <Col  md={{ span: 4, offset: 2 }}>
                <Card
                  bgcolor="secondary"
                  header="CREATE ACCOUNT"
                  status={status}
                  body={show ? (
                          <>
                          Name<br/>
                          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                          Email address<br/>
                          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                          Password<br/>
                          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                          <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                          </>
                        ):(
                          <>
                          <h5>Success</h5>
                          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                          </>
                        )}
                />
          </Col>
       </Row>
    </Container>            
  )
}



export default CreateAccount ;
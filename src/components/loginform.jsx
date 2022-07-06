import React, { useContext } from 'react';
import { useState } from 'react';
import Card from './context';
import { UserContext } from './context';
import { Container, Col, Row } from 'react-bootstrap';
import { Alert } from 'react-alert';

function LoginForm(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const ctx                     = React.useContext(UserContext);

    const { useEffect }            = React;

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
         return false;
        }
        if (
            label === "email" &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(field)
          ) {
            const errorMessage = "Error: Invalid Email format ";
            setStatus(errorMessage);
           return false;
          }
        return true;
      
    };
  

    function handleLogin(){
        console.log(email,password);
        if (!validate(email, "email")) return;
        if (!validate(password, "password")) return;
        let isValidUser = findUser(email, password);
      
        if (isValidUser) {
            setShow(false);
            setIsAuthenticated(true);
            alert("Thank you! You have successfully login!" );
          } else {
            console.log("details dont match");
            setIsAuthenticated(false);
            alert("You entered the wrong user name or password. Try again!")
          }
     };    

    function findUser(email, password) {
        let isValid = false;
        ctx.users.forEach((user) => {
            if (user.email === email && user.password === password) {
                user.isLogged = "true";
                user.setIsAuthenticated = "true";
                setName(user.name);
                isValid = true;
                alert(user.name);
            }
        });
           return isValid;
         
        }

    useEffect(() => {
        let isMounted = true;
        if (status !== "") {
            setTimeout(() => {
                if (isMounted) setStatus("");
            }, 3000);
        }
        return () => isMounted = false;
    }, [status]);
        


   const handleLogout = () => {
       setIsAuthenticated(false);
       setName('');
       setEmail('');
       setPassword('');
       setShow(true);
       console.log("Logout");
     };
    
  
  
    return (
      <Container fluid="md" className="m-4">
        <Row>
          <Col  md={{ span: 4, offset: 4 }}>
                  <Card
                   
                   bgcolor="secondary"
                    header="LOGIN ACCOUNT"
                    status={status}

                    body={show ? (
                            <>
                            Email address<br/>
                            <input 
                                type="input" 
                                 className="form-control" 
                                 id="email" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={e => setEmail(e.currentTarget.value)}/>
                            <br/>

                            Password<br/>
                            <input 
                                 type="password" 
                                 className="form-control" 
                                 id="password" 
                                 placeholder="Enter password" 
                                 value={password} 
                                 onChange={e => setPassword(e.currentTarget.value)}/>
                            <br/>

                            <button 
                                type="submit" 
                                className="btn btn-light" 
                                onClick={handleLogin}>Login
                            </button>

                            </>
                          ):(
                            <>
                            <h5>Thank you for login today! </h5>
                            </>
                          )}
                  />
            </Col>
         </Row>
      </Container>            
    );
  }
export default LoginForm;
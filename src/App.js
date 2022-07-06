import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { Nav, Navbar } from 'react-bootstrap';
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Tippy from '@tippyjs/react';
import { UserContext } from './components/context';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Balance from './components/balance';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import LoginForm from './components/loginform';
import AllData from './components/alldata';
import ErrorPage from './components/ErrorPage';

const HomeTooltip = () => {
    return <span style={{ color: 'gray'}}>Welcome to the Bank!</span>
}
const CreateAccountTooltip = () => {
  return <span style={{ color: 'gray'}}>Create an Account with Us!</span>
}
const BalanceTooltip = () => {
  return <span style={{ color: 'gray'}}>Consult your Balance!</span>
}
const DepositTooltip = () => {
  return <span style={{ color: 'gray'}}>Make your Deposits!</span>
}
const WithdrawTooltip = () => {
  return <span style={{ color: 'gray'}}>Withdraw Money!</span>
}
const LoginTooltip = () => {
  return <span style={{ color: 'gray'}}>Login to Your Account</span>
}
const AllDataTooltip = () => {
  return <span style={{ color: 'gray'}}>See All your Transactions!</span>
}

function App() {
    return (
      <div className="App">

      <Router>
        <div>
          <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>BAD BANK by GISEL GOMEZ</Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse className="right-aligned">
                <Nav>
                  <Tippy theme={'light'} content = {<HomeTooltip></HomeTooltip>}>
                    <Nav.Link  as={Link} to="/">Home</Nav.Link>
                  </Tippy>

                  <Tippy theme={'light'} content = {<CreateAccountTooltip></CreateAccountTooltip>}>
                    <Nav.Link  as={Link} to="/createaccount">Create an Account</Nav.Link>
                  </Tippy>

                  <Tippy theme={'light'} content = {<BalanceTooltip></BalanceTooltip>}>
                    <Nav.Link as={Link} to="/balance">Balance</Nav.Link>
                  </Tippy>

                  <Tippy theme={'light'} content = {<DepositTooltip></DepositTooltip>}>
                    <Nav.Link  as={Link} to="/deposit">Deposit</Nav.Link>
                  </Tippy>

                  <Tippy theme={'light'} content = {<WithdrawTooltip></WithdrawTooltip>}>
                    <Nav.Link as={Link} to="/withdraw">Withdraw</Nav.Link>
                  </Tippy>

                  <Tippy theme={'light'} content = {<LoginTooltip></LoginTooltip>}>
                     <Nav.Link as={Link} to="/loginform">Login</Nav.Link>
                  </Tippy>

                  <Tippy theme={'light'} content = {<AllDataTooltip></AllDataTooltip>}>
                     <Nav.Link as={Link} to="/alldata">All Data</Nav.Link>
                  </Tippy>

                </Nav>
              </Navbar.Collapse>
            </Navbar>
           </div> 
              
            <div>
            <UserContext.Provider value={{users:[{name:'admin',email:'admin@admin.com',password:'12345678',balance:100, isLogged:'false'}]}}>
                <Routes>
                  <Route path="/" element={<Home /> } />
                  <Route path="/createaccount" element={<CreateAccount />} />
                  <Route path="/balance" element={<Balance />} />
                  <Route path="/deposit" element={<Deposit />} />
                  <Route path="/withdraw" element={<Withdraw />} />
                  <Route path="/loginform" element={<LoginForm />} />
                  <Route path="/alldata" element={<AllData />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </UserContext.Provider>   
             </div>
        </Router>




    </div>
  );
}
export default App;
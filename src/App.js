import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {Button, Col, Container, Row} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify'
import Nav from './components/Navbar';
import Course from './components/Courses';
import AllCourse from './components/AllCourses';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import home from './components/home';

const App = () => {
  const btn = () => {
    toast.warn("Do you wanna taste it!!!!!",
      {position: 'top-center'}
    );
  };
  return (
    <div>
      <home />
      <Router>
        <ToastContainer />
        <Container>
            <Header />
            <Row>
              <Col md='4'>
                    <Menu />
              </Col>

              <Col md='8'>
                  <Routes>
                    <Route path='/' Component={home} exact/>
                    <Route path='/all-courses' Component={AllCourse} />
                  </Routes>
              </Col>
            </Row>
        </Container>
      </Router>
    </div>

  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from './NavBar'
import Home from '../pages/Home'
import JobList from '../pages/JobList'
import AddNewJob from '../pages/AddNewJob'
import JobPosting from '../pages/JobPosting'
import ApplicantList from '../pages/ApplicantList'
import Applicant from '../pages/Applicant'
import NotFound from '../pages/NotFound'

import Container from 'react-bootstrap/Container'

import '../lib/styles/App.css';

const App = () => {
  return (
    <Router>
        <NavBar />
      <Container>
        <div id="page-body">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/jobs" component={JobList} />
            <Route path="/job/:id" component={JobPosting} />
            <Route path="/job" component={AddNewJob} />
            <Route path="/applicants" component={ApplicantList} />
            <Route path="/applicant/:id" component={Applicant} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import Delete from './components/delete';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/create">Edit</Nav.Link>
            <Nav.Link href="/create">Delete</Nav.Link>


          </Nav>
          </Navbar>
          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} />
            <Route path='/read' component={Read} />
            <Route path='/read' component={Edit} />

            <Route path='/read' component={Delete} />

          </Switch>
      </div>
      </BrowserRouter>
      );
    }
  }
export default App;


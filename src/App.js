import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import './App.css';

import {Route} from 'react-router-dom'
import MoviesPage from './components/pages/MoviesPage'
import NewMoviePage from './components/pages/NewMoviePage'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/pages/HomePage'
class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>
          <Container text>
            <Route path={'/'} component={HomePage} exact></Route>
            <Route path={'/movies'} component={MoviesPage} exact></Route>
            <Route path={'/movies/new'} component={NewMoviePage} exact ></Route>
            <Route path={'/movie/:_id'} component={NewMoviePage} exact ></Route>

          </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;

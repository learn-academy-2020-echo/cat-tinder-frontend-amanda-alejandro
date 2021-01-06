import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import CatEdit from './pages/CatEdit.js'
import CatIndex from './pages/CatIndex.js'
import CatNew from './pages/CatNew.js'
import CatShow from './pages/CatShow.js'
import NotFound from './pages/NotFound.js'



class App extends Component{
  render(){
      return (
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/catindex' component={ CatIndex } />
            <Route path='/catshow' component={ CatShow } />
            <Route path='/catnew' component={ CatNew } />
            <Route path='/catedit' component={ CatEdit } />
            <Route component={ NotFound } />
          </Switch>
          <Footer />
        </Router>
        );
        }
      }
export default App;

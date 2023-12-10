import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <News pagesize={6}/>
      </div>
    )
  }
}
//230a226b99dd42dea358e64ea7909a5b

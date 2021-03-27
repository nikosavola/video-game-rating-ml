import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import Score from './components/Score'
import Genres from './components/Genres'
import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      Predicting Video Game Rating from Genres using Multilayer Perceptron
    </header>

    <Button variant="primary" size="xxl">
      flat button
    </Button>

    <Genres />
    <Score />

  </div>
)

export default App

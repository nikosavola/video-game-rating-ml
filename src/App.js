import React from 'react'
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

    <p>
      A multilayer-perceptron-based machine learning model was trained with
      Steam data to predict a numeric rating for a video game based on its
      classified genres (user tags from Steam).
      See report
      {' '}
      <a href="https://github.com/NikoDaGreat/video-game-rating-ml/blob/main/training/report.pdf">here</a>
      {' '}
      for more detailed explanation.
    </p>
    <p>
      Here you can predict ratings using the model by selecting genre tags.
    </p>

    <Genres />
    <Score />

  </div>
)

export default App

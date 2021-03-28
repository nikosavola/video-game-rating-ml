import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import * as tf from '@tensorflow/tfjs'

const Score = () => {
  const genresSelected = useSelector((state) => state.genres)
  const [model, setModel] = useState()
  const [score, setScore] = useState(0.0)

  // Load TensorFlow model on first render
  useEffect(async () => {
    const newModel = await tf.loadLayersModel('https://raw.githubusercontent.com/NikoDaGreat/video-game-rating-ml/main/public/model/model.json')
    setModel(newModel)
  }, [])

  const handlePredict = (event) => {
    event.preventDefault()

    const vector = Array(378).fill(0)
    const indices = genresSelected
    indices.forEach((index) => {
      vector.splice(index, 1, 1)
    })

    const tensor = tf.tensor2d(vector, [1, 378], 'int32')
    const prediction = model.predict(tensor)
    setScore((prediction.dataSync()[0] * 100).toFixed(2))
  }

  return (
    <>
      <p className="score">
        Rating:
        {' '}
        <span className="latex">
          {score}
          {' '}
          %
        </span>
      </p>
      <Button className="predict" variant="primary" size="xxl" onClick={handlePredict}>
        Predict 🚀
      </Button>
    </>
  )
}

export default Score

import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import * as tf from '@tensorflow/tfjs'

const Score = () => {
  const [model, setModel] = useState()
  const [score, setScore] = useState(0.0)

  // Load TensorFlow model on first render
  useEffect(async () => {
    const newModel = await tf.loadLayersModel('https://raw.githubusercontent.com/NikoDaGreat/video-game-rating-ml/main/public/model/model.json')
    setModel(newModel)
  }, [])

  const handlePredict = (event) => {
    event.preventDefault()

    const vector = Array(378).fill(0) // tf.zeros([1, 378])
    const list = [0, 3]
    list.forEach((index) => {
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
        {score}
        {' '}
        %
      </p>
      <Button variant="primary" size="xxl" onClick={handlePredict}>
        Predict
      </Button>
    </>
  )
}

export default Score

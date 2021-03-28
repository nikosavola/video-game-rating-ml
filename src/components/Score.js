import React from 'react'
import Button from 'react-bootstrap/Button'
// import './Score.css'

const Score = () => {
  const score = 0.84 * 100

  return (
    <>
      <p className="score">
        Rating:
        {' '}
        {score}
        {' '}
        %
      </p>
      <Button variant="primary" size="xxl">
        Predict
      </Button>
    </>
  )
}

export default Score

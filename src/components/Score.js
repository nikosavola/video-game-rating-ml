import React from 'react'
// import './Score.css'

const Score = () => {
  const score = 0.84 * 100

  return (
    <p className="score">
      Rating:
      {' '}
      {score}
      {' '}
      %
    </p>
  )
}

export default Score

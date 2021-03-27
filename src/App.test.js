import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  render(<App />)
  const linkElement = screen.getByText(/Predicting Video Game Rating from Genres using Multilayer Perceptron/i)
  expect(linkElement).toBeInTheDocument()
})

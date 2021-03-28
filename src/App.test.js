import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

describe('UI', () => {
  const setup = () => {
    render(<Provider store={store}><App /></Provider>)
  }

  test('renders header', () => {
    setup()
    const linkElement = screen.getByText(/predicting/i)
    expect(linkElement).toBeInTheDocument()
  })

  describe('Search', () => {
    test('empty filtering does nothing', () => {
      setup()
      const input = screen.getByPlaceholderText('Search')
      fireEvent.change(input, { target: { value: '' } })
      const linkElement = screen.getByText(/action/i)
      expect(linkElement).toBeVisible()
    })

    test('filtering works', () => {
      setup()
      const input = screen.getByPlaceholderText('Search')
      fireEvent.change(input, { target: { value: 'action' } })
      const linkElement = screen.getByText(/platformer/i)
      // expect(screen.getByText('div.react-bootstrap-table').to.not.contain('platformer'))
      expect(linkElement).not.toBeVisible()
    })
  })
})

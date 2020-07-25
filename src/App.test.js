import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import data from './data/data'

describe('App', () => {
  it('should render first page on load (pink bg, hello text)', () => {
    const { getByText } = render(<App />)
    const text = getByText(data[0].text)
    expect(text).toBeInTheDocument()
  })
})

it('should render second page after click (yellow bg, whaddup text)', () => {
  const { getByText } = render(<App />)
  const text = getByText(data[0].text)
  fireEvent.click(text)
  expect(getByText('What\'s up?')).toBeInTheDocument(); 
})

it('should render first page after clicking the last page', () => {
  const { getByText } = render(<App />) 

  data.forEach(item => {
    const text = getByText(item.text)
    expect(text).toBeInTheDocument()
    fireEvent.click(text)
  })
  expect(getByText(data[0].text)).toBeInTheDocument()
})

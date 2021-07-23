import {render, screen} from '@testing-library/react'
import Board from './Board.js'

test('loads a single board tile', () => {
  render(<Board/>)
  expect(screen.getByTestId('tile-1')).toHaveTextContent('1')
})

test('loads two board tiles', () => {
  render(<Board/>)
  expect(screen.getByTestId('tile-1')).toHaveTextContent('1')
  expect(screen.getByTestId('tile-2')).toHaveTextContent('2')
})
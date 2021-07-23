import {render, screen} from '@testing-library/react'
import Dice from './Dice.js'

test('checks that the roll function is called when the dice button is clicked', () => {
  const mockOnClick = jest.fn(()=> 4)
  render(<Dice />)
  const dice = screen.getByTestId('dice')
  console.log(dice)
  dice.click();
  expect(mockOnClick.mock.calls.length).toBe(1)
})

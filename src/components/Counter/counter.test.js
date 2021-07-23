import {render, screen} from '@testing-library/react'
import Counter from './Counter.js'

test('checks that the counter has the correct css', () => {
  render(<Counter currentPosition = "0"/>)
  

})

import { Minus, Plus } from '@phosphor-icons/react'
import { NumberPickerContainer } from './styles'

export function NumberPicker({ number, setNumber }) {
  function handleAddNumber() {
    setNumber(number + 1)
  }

  function handleSubtractNumber() {
    if (number > 0) {
      setNumber(number - 1)
    }
  }

  return (
    <NumberPickerContainer>
      <button onClick={handleSubtractNumber}>
        <Minus />
      </button>

      <span>{number < 10 ? `0${number}` : number}</span>

      <button onClick={handleAddNumber}>
        <Plus />
      </button>
    </NumberPickerContainer>
  )
}

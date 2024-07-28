import {Button, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, activeValueBtn} = props
  const {value, displayText} = details

  const active = activeValueBtn === value

  const updateDirection = () => {
    changeDirection(value)
  }

  return (
    <ListItem>
      <Button type="button" onClick={updateDirection} active={active}>
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem

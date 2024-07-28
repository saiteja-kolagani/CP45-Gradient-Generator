// Style your elements here
import styled from 'styled-components'

export const Button = styled.button`
  width: 80px;
  padding-block: 8px;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : 0.5)};
`
export const ListItem = styled.li`
  margin: 8px;
`

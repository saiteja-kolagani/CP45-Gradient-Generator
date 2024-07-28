import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  Heading,
  Paragraph,
  UnorderedListContainer,
  InputContainer,
  InputField,
  Label,
  InputFieldContainer,
  GenButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    genObject: {color1: '#8ae323', color2: '#014f7b', directionValue: 'top'},
    directionValue: gradientDirectionsList[0].value,
    activeValueBtn: 'top',
  }

  changeDirection = value => {
    this.setState({
      directionValue: value,
      activeValueBtn: value,
    })
  }

  onChangeColor1 = event => {
    this.setState({
      color1: event.target.value,
    })
  }

  onChangeColor2 = event => {
    this.setState({
      color2: event.target.value,
    })
  }

  onClickGenBtn = () => {
    const {color1, color2, directionValue} = this.state
    this.setState({
      genObject: {color1, color2, directionValue},
    })
  }

  render() {
    const {color1, color2, genObject, activeValueBtn} = this.state
    return (
      <MainContainer genObject={genObject} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderedListContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              details={each}
              changeDirection={this.changeDirection}
              activeValueBtn={activeValueBtn}
            />
          ))}
        </UnorderedListContainer>
        <Paragraph>Pick the Colors</Paragraph>
        <InputContainer>
          <InputFieldContainer>
            <Label>{color1}</Label>
            <br />
            <InputField
              type="color"
              id="input-color-1"
              value={color1}
              onChange={this.onChangeColor1}
            />
          </InputFieldContainer>
          <InputFieldContainer>
            <Label>{color2}</Label>
            <br />
            <InputField
              type="color"
              id="input-color-2"
              value={color2}
              onChange={this.onChangeColor2}
            />
          </InputFieldContainer>
        </InputContainer>
        <GenButton type="button" onClick={this.onClickGenBtn}>
          Generate
        </GenButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator

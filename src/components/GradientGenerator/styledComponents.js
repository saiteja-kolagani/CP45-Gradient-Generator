import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 40px;
  background-image: linear-gradient(
    to ${props => props.genObject.directionValue},
    ${props => props.genObject.color1},
    ${props => props.genObject.color2}
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 600;
`

export const Paragraph = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
`
export const UnorderedListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
`
export const InputContainer = styled.div`
  padding: 20px;
  display: flex;
`
export const InputField = styled.input`
  width: 80px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-top: 10px;
`
export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
`
export const InputFieldContainer = styled.div`
  text-align: center;
  margin: 15px;
`
export const GenButton = styled.button`
  background-color: #00c9b7;
  cursor: pointer;
  width: 100px;
  padding-block: 8px;
  font-size: 14px;
  outline: none;
  border: none;
`

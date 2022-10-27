import styled from 'styled-components'
export const CartComponent = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  span {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    position: absolute;
    position: absolute;
    top: -0.5rem;
    right: -0.5219rem;
    border-radius: 100%;
    height: 1.25rem;
    width: 1.25rem;
    line-height: 130%;
    font-size: 0.8125rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

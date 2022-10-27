import styled from 'styled-components'

export const ProductCardMain = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 1rem;
`

export const ProductCardContainer = styled.section`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 3.375rem;

  h2 {
    color: ${(props) => props.theme['base-title']};
  }
`

export const ProductImg = styled.img`
  position: absolute;
  top: -1.25rem;
`
export const ProductFlag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  display: block;
  border-radius: 100px;
  margin: 0 auto;
  width: 5.0625rem;
  height: 1.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  text-transform: uppercase;
  font-weight: 700;
`

export const ProductName = styled.h2`
  margin-top: 1rem;
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`

export const ProductDescription = styled.label`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  font-family: 'Roboto', sans-serif;
  line-height: 130%;
  font-size: 0.875rem;
  line-height: 130%;
  padding: 0 1.25rem;
  text-align: center;
  margin-top: 0.5rem;
`
export const ProductContainerBuy = styled.div`
  position: absolute;
  bottom: 27px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
`

export const ProductPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
  padding: 8px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`
export const ProductQuantity = styled.div`
  /* justify-content: space-between;
  grid-template-columns: 35% 35% 30%;
  padding: 0 1rem; 
  align-items: center; */

  .qtd-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 2.375rem;
    background: #e6e5e5;
    border-radius: 6px;
    padding: 11px 5px;
    input {
      width: 100%;
      background: transparent;
      border: none;
      text-align: center;
    }
    span {
      cursor: pointer;
    }
  }
`
export const ProductBuyButton = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem;
  border-radius: 0.375rem;
  justify-content: center;
  width: 2.375rem;
  height: 2.3125rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

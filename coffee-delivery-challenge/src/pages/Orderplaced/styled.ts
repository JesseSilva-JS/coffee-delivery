import styled from 'styled-components'

export const OrderPlacedContainer = styled.main`
  gap: 2rem;
  margin: 0 auto;
`
export const OrderPlacedArea = styled.section`
  padding: 2rem 10rem;
  h2 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
  }
  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const OrderPlacedContent = styled.section`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 49% 49%;
  gap: 4rem;
  .contentLeft {
    height: 270px;
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, #dbac2c, #8047f8) border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
    padding: 2.5rem;
    display: grid;
    gap: 2rem;

    > div {
      display: flex;
      gap: 1rem;
      align-items: center;
      section {
        p {
          font-size: 14px;
          span {
            font-weight: bold;
          }
        }
      }
    }
  }
`

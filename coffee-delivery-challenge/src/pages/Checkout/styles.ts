import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  gap: 2rem;
  margin: 0 auto;
`
export const CheckoutArea = styled.div`
  padding: 2rem 10rem;
  main {
    display: flex;
    gap: 2rem;
  }
`

export const CheckoutAreaContainer = styled.div`
  margin-top: 0.9375rem;
  width: 100%;

  section.container-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    width: 40rem;
    border-radius: 6px;
  }
  section.container-right {
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    width: 40rem;
    border-radius: 0.375rem 2.75rem;
    background: ${(props) => props.theme['base-card']};
    width: 100%;
    section {
      width: 100%;
    }
  }
  h2 {
    margin-top: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 1rem;
  }
`

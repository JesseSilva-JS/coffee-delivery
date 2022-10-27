import styled from 'styled-components'

export const FormPaymentContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  margin-top: 16px;
  padding: 2.5rem;
  border-radius: 0.375rem;
  header {
    display: flex;
    gap: 0.5rem;
    align-items: start;
    margin-bottom: 2rem;
    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }

  section {
    display: flex;
    gap: 2%;
    button {
      background: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme['base-button']};
      font-weight: normal;
      font-size: 0.75rem;
      padding: 1rem;
      color: ${(props) => props.theme['base-label']};
      border-radius: 4px;
      text-transform: uppercase;
      width: 11.1669rem;
      height: 3.1875rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.75rem;
      cursor: pointer;

      &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['base-label']};
      }

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
        font-size: 1rem;
      }
    }
  }
`

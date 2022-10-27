import styled from 'styled-components'

const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  font-weight: normal;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['base-label']};
  border-radius: 4px;
  margin-bottom: 1rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['base-label']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 1rem;
  }
`
export const AndressFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
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
  .section-three {
    display: grid;
    gap: 1%;
    grid-template-columns: 40% 59%;
  }
  .section-four {
    display: grid;
    gap: 1%;
    grid-template-columns: 40% 40% 18%;
  }
`
export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`
export const RuaInput = styled(BaseInput)`
  width: 100%;
`
export const NumeroInput = styled(BaseInput)`
  width: 100%;
`
export const Complemento = styled(BaseInput)`
  width: 100%;
`
export const BairroInput = styled(BaseInput)`
  width: 100%;
`
export const CidadeInput = styled(BaseInput)`
  width: 100%;
`
export const UfInput = styled(BaseInput)`
  width: 100%;
`

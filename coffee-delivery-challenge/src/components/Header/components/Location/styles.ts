import styled from 'styled-components'

export const LocationComponent = styled.div`
  padding: 0.5rem;
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  gap: 0.25rem;
`

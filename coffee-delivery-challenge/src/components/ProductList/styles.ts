import styled from 'styled-components'

export const ProductListContainer = styled.section`
  margin: 0 auto;
  padding: 2rem 10rem 8rem;
  h2 {
    color: ${(props) => props.theme['base-title']};
  }
`

import styled from 'styled-components'

export const SummaryCartForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 31.125rem;
  position: relative;

  .summaryTop {
    height: 20rem;
    overflow-y: auto;

    .productShelf {
      display: grid;
      grid-template-columns: 20% 58% 18%;
      gap: 2%;
      border-bottom: 0.0625rem solid ${(props) => props.theme['base-button']};
      margin-bottom: 1.4375rem;
      padding-bottom: 1.25rem;
    }
  }

  .summaryBottom {
    position: absolute;
    bottom: 0;
    table {
      width: 100%;
      tr {
        height: 2rem;
        td {
          &:nth-child(2) {
            text-align: right;
          }
        }
        &:nth-child(3) {
          font-weight: bold;
        }
      }
    }

    a {
      background: ${(props) => props.theme['yellow-dark']};
      width: 100%;
      border: none;
      border-radius: 6px;
      padding: 0.75rem 0;
      margin-top: 1.5rem;
      color: ${(props) => props.theme.white};
      text-decoration: none;
      display: block;
      text-align: center;
    }
  }
`

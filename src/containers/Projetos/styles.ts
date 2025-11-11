import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  padding: 0 16px;

  & > li {
    padding: 16px;
    background-color: ${(props) => props.theme.corDeFundo};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin-bottom: 16px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
  }

  span {
    text-align: start;
    height: 28px;
    width: 80px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 24px;
    padding: 0 12px;

    & > li {
      margin-bottom: 16px;
    }
`

import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: auto;
  border-radius: 4px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoBotaoHover};
    transform: translateY(-2px);
  }
`

interface LinguagemProps {
  cor: string
  $larguraFixa?: boolean
}

export const Linguagem = styled.span<LinguagemProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 4px 12px;
  background-color: ${(props) => props.cor};
  color: white;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  text-align: center;
  min-width: ${({ $larguraFixa }) => ($larguraFixa ? '60px' : 'fit-content')};
  box-sizing: border-box;
`

export const Descricao = styled.p`
  color: ${(props) => props.theme.corPrincipal};
  font-size: 14px;
  line-height: 1.5;
  margin: 8px 0;
  padding: 12px;
  background-color: ${(props) => props.theme.corDeFundo};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.corDaBorda};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  /* Melhora a legibilidade no tema escuro */
  @media (prefers-color-scheme: dark) {
    background-color: ${(props) => props.theme.corDeFundo};
    color: ${(props) => props.theme.corPrincipal};
    border-color: ${(props) => props.theme.corDaBorda};
  }
`

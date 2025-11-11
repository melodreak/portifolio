import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 20px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  margin-bottom: 15px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
    position: static;
    margin-top: 20px;
    svg {
      height: 28px;
      width: 28px;
      margin: 0 4px;
    }
  }
`

export const Contato = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
  flex-wrap: wrap;
  width: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.theme.corPrincipal};
    transition: all 0.3s ease;
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.corDeFundo};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-3px);
      background-color: ${(props) => props.theme.corDeFundoBotao};
    }

    position: relative;
    overflow: visible;

    svg {
      width: 100%;
      height: 100%;
      color: ${(props) => props.theme.corPrincipal};
      filter: ${(props) =>
        props.theme.corDeFundo === '#1a1a1a' ||
        props.theme.corDeFundo === '#121212'
          ? 'drop-shadow(0 0 2px #4fc3f7) drop-shadow(0 0 4px #4fc3f7) drop-shadow(0 0 6px #4fc3f7)'
          : 'none'};
      transition: all 0.3s ease;
      z-index: 1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${(props) => props.theme.corPrincipal};
      border-radius: 50%;
      z-index: 0;
      opacity: 0.3;
      transform: scale(0.8);
      transition: all 0.3s ease;
    }

    &:hover {
      svg {
        filter: ${(props) =>
          props.theme.corDeFundo === '#1a1a1a' ||
          props.theme.corDeFundo === '#121212'
            ? 'drop-shadow(0 0 4px #4fc3f7) drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 12px #4fc3f7)'
            : 'brightness(1.2)'};
      }

      &::before {
        opacity: 0.5;
        transform: scale(1);
        background: radial-gradient(circle, #4fc3f7 0%, transparent 70%);
      }
    }
  }

  @media (max-width: 768px) {
    gap: 8px;
    margin: 12px 0;

    a {
      width: 38px;
      height: 38px;
      padding: 8px;
      margin: 0 4px;

      position: relative;
      overflow: visible;

      svg {
        filter: ${(props) =>
          props.theme.corDeFundo === '#1a1a1a' ||
          props.theme.corDeFundo === '#121212'
            ? 'drop-shadow(0 0 2px #4fc3f7) drop-shadow(0 0 4px #4fc3f7)'
            : 'none'};
        z-index: 1;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle, #4fc3f7 0%, transparent 70%);
        border-radius: 50%;
        z-index: 0;
        opacity: 0.3;
        transform: scale(0.9);
        transition: all 0.3s ease;
      }

      &:hover {
        svg {
          filter: ${(props) =>
            props.theme.corDeFundo === '#1a1a1a' ||
            props.theme.corDeFundo === '#121212'
              ? 'drop-shadow(0 0 4px #4fc3f7) drop-shadow(0 0 8px #4fc3f7)'
              : 'brightness(1.2)'};
        }

        &::before {
          opacity: 0.6;
          transform: scale(1.1);
        }
      }

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
`

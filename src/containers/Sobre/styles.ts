import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`

export const StatsContainer = styled.div`
  min-height: 157px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`

export const StatsImage = styled.img`
  height: 157px;
  border-radius: 4px;
  
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`

export const ErrorMessage = styled.p`
  color: #f8f8f8;
  text-align: center;
  padding: 16px;
  background: #2d2d2d;
  border-radius: 4px;
  font-size: 14px;
`

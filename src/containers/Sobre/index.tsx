import { useState } from 'react'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao, StatsContainer, StatsImage, ErrorMessage } from './styles'

const Sobre = () => {
  const [statsError, setStatsError] = useState(false)
  const [langsError, setLangsError] = useState(false)

  return (
    <section>
      <Titulo fontSize={16}>Sobre</Titulo>
      <Paragrafo tipo="secundario">
        Olá meu nome é José Melo, estou no caminho para me tornar um desenvolvedor
        FullStack. Com foco em solução de problemas e criatividade, engajado em
        solucionar e oferecer métodos mais práticos...
      </Paragrafo>
      <GithubSecao>
        <StatsContainer>
          {!statsError ? (
            <StatsImage
              src="https://github-readme-stats.vercel.app/api?username=melodreak&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
              onError={() => setStatsError(true)}
              alt="Estatísticas do GitHub"
              loading="lazy"
            />
          ) : (
            <ErrorMessage>Estatísticas não disponíveis no momento</ErrorMessage>
          )}
        </StatsContainer>
        
        <StatsContainer>
          {!langsError ? (
            <StatsImage
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=melodreak&layout=compact&langs_count=7&theme=dracula"
              onError={() => setLangsError(true)}
              alt="Linguagens mais usadas"
              loading="lazy"
            />
          ) : (
            <ErrorMessage>Linguagens não disponíveis</ErrorMessage>
          )}
        </StatsContainer>
      </GithubSecao>
    </section>
  )
}

export default Sobre

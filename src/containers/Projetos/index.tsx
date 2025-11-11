import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

type Repositorio = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
}

const Projetos = () => {
  const [repositorios, setRepositorios] = useState<Repositorio[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const buscarRepositorios = async () => {
      try {
        console.log('Iniciando busca por repositórios...')
        const url =
          'https://api.github.com/users/melodreak/repos?sort=updated&per_page=15'
        console.log('URL da requisição:', url)

        const response = await fetch(url, {
          headers: {
            Accept: 'application/vnd.github.v3+json'
          }
        })

        console.log('Resposta recebida. Status:', response.status)

        if (!response.ok) {
          const errorText = await response.text()
          console.error('Erro na resposta:', errorText)
          throw new Error(
            `Erro na requisição: ${response.status} - ${errorText}`
          )
        }

        const data = await response.json()
        console.log('Dados recebidos:', data)

        const reposMapeados = data.map((repo: any) => {
          let linguagem = repo.language || 'Várias linguagens'

          let descricao = repo.description

          if (
            !descricao ||
            (typeof descricao === 'string' && descricao.trim() === '')
          ) {
            const nomeFormatado = repo.name
              .split('-')
              .map(
                (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
              )
              .join(' ')

            descricao = `${nomeFormatado} - Projeto ${linguagem || 'de programação'}`
          } else if (typeof descricao === 'string') {
            descricao = descricao.trim()
          }

          console.log('Processando repositório:', {
            id: repo.id,
            name: repo.name,
            description: descricao,
            descriptionType: typeof descricao,
            language: linguagem,
            isFork: repo.fork,
            html_url: repo.html_url
          })

          return {
            id: repo.id,
            name: repo.name || 'Projeto sem nome',
            description: descricao,
            html_url: repo.html_url || '#',
            language: linguagem
          }
        })

        console.log('Repositórios mapeados:', reposMapeados)

        const reposExibicao = reposMapeados

        setRepositorios(reposExibicao)
        setErro(null)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
        setErro(
          'Não foi possível carregar os repositórios do GitHub. Exibindo projetos de exemplo.'
        )

        const projetosExemplo = [
          {
            id: 1,
            name: 'Meu Portfólio',
            description:
              'Meu portfólio profissional criado com React e TypeScript',
            html_url: 'https://github.com/melodreak/portifolio',
            language: 'TypeScript'
          },
          {
            id: 2,
            name: 'Lista de Tarefas',
            description: 'Aplicativo de lista de tarefas com React',
            html_url: 'https://github.com/melodreak/lista-tarefas',
            language: 'JavaScript'
          },
          {
            id: 3,
            name: 'E-commerce',
            description: 'Loja virtual completa com carrinho de compras',
            html_url: 'https://github.com/melodreak/ecommerce',
            language: 'TypeScript'
          },
          {
            id: 4,
            name: 'Blog Pessoal',
            description: 'Meu blog pessoal criado com Next.js',
            html_url: 'https://github.com/melodreak/blog-pessoal',
            language: 'JavaScript'
          },
          {
            id: 5,
            name: 'API Rest',
            description: 'API RESTful para sistema de gerenciamento',
            html_url: 'https://github.com/melodreak/api-rest',
            language: 'Node.js'
          },
          {
            id: 6,
            name: 'App de Notícias',
            description: 'Aplicativo de notícias em tempo real',
            html_url: 'https://github.com/melodreak/app-noticias',
            language: 'React Native'
          },
          {
            id: 7,
            name: 'Sistema de Agendamento',
            description: 'Sistema completo para agendamento de serviços',
            html_url: 'https://github.com/melodreak/agendamento',
            language: 'TypeScript'
          },
          {
            id: 8,
            name: 'Dashboard Financeiro',
            description:
              'Painel de controle financeiro com gráficos interativos',
            html_url: 'https://github.com/melodreak/dashboard-financeiro',
            language: 'JavaScript'
          },
          {
            id: 9,
            name: 'Rede Social',
            description: 'Plataforma de rede social com autenticação',
            html_url: 'https://github.com/melodreak/rede-social',
            language: 'TypeScript'
          },
          {
            id: 10,
            name: 'Jogo da Memória',
            description: 'Jogo da memória com temas personalizáveis',
            html_url: 'https://github.com/melodreak/jogo-memoria',
            language: 'JavaScript'
          },
          {
            id: 11,
            name: 'Aplicativo de Clima',
            description: 'Previsão do tempo em tempo real',
            html_url: 'https://github.com/melodreak/app-clima',
            language: 'React Native'
          },
          {
            id: 12,
            name: 'Sistema de Chat',
            description: 'Chat em tempo real com WebSocket',
            html_url: 'https://github.com/melodreak/chat-app',
            language: 'Node.js'
          },
          {
            id: 13,
            name: 'Plataforma de Cursos',
            description: 'E-learning com vídeos e exercícios',
            html_url: 'https://github.com/melodreak/plataforma-cursos',
            language: 'TypeScript'
          },
          {
            id: 14,
            name: 'App de Receitas',
            description: 'Coleção de receitas com busca por ingredientes',
            html_url: 'https://github.com/melodreak/app-receitas',
            language: 'React Native'
          },
          {
            id: 15,
            name: 'Sistema de Blog',
            description: 'CMS para criação e gerenciamento de posts',
            html_url: 'https://github.com/melodreak/sistema-blog',
            language: 'JavaScript'
          }
        ]

        setRepositorios(projetosExemplo)
      } finally {
        setCarregando(false)
      }
    }

    buscarRepositorios()
  }, [])

  if (carregando) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        Carregando projetos...
      </div>
    )
  }

  return (
    <section style={{ padding: '20px', maxWidth: '1024px', margin: '0 auto' }}>
      <Titulo fontSize={24}>Meus Projetos</Titulo>
      {erro && (
        <div
          style={{
            color: '#ff6b6b',
            backgroundColor: '#fff5f5',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            border: '1px solid #ffd6d6'
          }}
        >
          {erro}
        </div>
      )}

      <Lista>
        {repositorios.map((repo) => (
          <li key={repo.id} style={{ listStyle: 'none' }}>
            <Projeto
              titulo={repo.name}
              descricao={repo.description || 'Descrição não disponível'}
              url={repo.html_url}
              linguagem={repo.language || 'Desconhecida'}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos

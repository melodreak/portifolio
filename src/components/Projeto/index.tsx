import Titulo from '../Titulo'
import { Card, LinkBotao, Linguagem, Descricao } from './styles'

const coresLinguagens: { [key: string]: string } = {
  HTML: '#FF5733',
  CSS: '#9B59B6',
  JavaScript: '#F1C40F',
  TypeScript: '#3498DB',
  SCSS: '#FF69B4',
  Sass: '#FF69B4',
  Less: '#1F618D',
  Vue: '#41B883',
  'Vue.js': '#41B883',
  'Várias linguagens': '#7F8C8D'
}

type ProjetoProps = {
  titulo: string
  descricao: string
  url: string
  linguagem?: string
}

const Projeto = ({ titulo, descricao, url, linguagem }: ProjetoProps) => {
  const formatarTitulo = (nome: string) => {
    return nome
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const corLinguagem = linguagem
    ? coresLinguagens[linguagem] || '#7F8C8D'
    : '#7F8C8D'

  // Verificar se a linguagem deve ter largura fixa (apenas para HTML e CSS)
  const larguraFixa = linguagem === 'HTML' || linguagem === 'CSS';

  return (
    <Card>
      <Titulo>{formatarTitulo(titulo)}</Titulo>

      <Descricao>{descricao}</Descricao>

      {linguagem && (
        <Linguagem 
          cor={corLinguagem}
          $larguraFixa={larguraFixa}
        >
          {linguagem}
        </Linguagem>
      )}

      <LinkBotao href={url} target="_blank" rel="noopener noreferrer">
        Ver no GitHub
      </LinkBotao>
    </Card>
  )
}

export default Projeto

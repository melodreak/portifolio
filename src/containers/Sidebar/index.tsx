import Titulo from '../../components/Titulo'
import { Avatar } from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>José Melo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        dreakfall
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Aluno de FullStack
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

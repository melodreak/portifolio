import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}> Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab tempora
      impedit fugit odit ducimus vitae dicta. Nam corrupti ducimus reiciendis ex
      incidunt officiis iusto ipsum consequatur fugiat. Quibusdam, illo sint.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=melodreak&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=melodreak&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
);

export default Sobre;

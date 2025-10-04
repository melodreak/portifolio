import { P } from "./styles";

export type Props = {
  children: string;
  tipo?: "principal" | "secundario";
};

const Paragrafo = ({ children, tipo = "principal" }: Props) => (
  <P>{children}</P>
);

export default Paragrafo;

import { Container, Profile } from "./styles";

import { Input } from "../../components/Input";

export function Header() {
  return(
    <Container>
      <span>RocketMovies</span>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>Patrick Franco</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/patrickxfranco.png" alt="Avatar do usuário" />
      </Profile>
    </Container>
  );
}
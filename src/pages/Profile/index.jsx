import { Container } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { FiArrowLeft, FiCamera } from "react-icons/fi"

export function Profile() {
  return(
    <Container>
      <header>
        <Link icon={FiArrowLeft} title="Voltar" />
      </header>
      <main>
        <div id="avatar">
          <img src="https://github.com/patrickxfranco.png" alt="Avatar do usuário" />
          <label htmlFor="input-picture">
            <FiCamera size={20} />
            <input type="file" id="input-picture" />
          </label>
        </div>
        <form>
          <Input value="Patrick Franco" type="text" id="input-name" />
          <Input value="patrick@email.com" type="email" id="input-email" />
          <Input placeholder="Senha atual" type="password" id="input-password" />
          <Input placeholder="Nova senha" type="password" id="input-newPassword" />
          <Button type="submit" title="Salvar" />
        </form>
      </main>
    </Container>
  );
}
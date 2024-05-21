import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Link } from "../../components/Link";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

import { FiArrowLeft } from "react-icons/fi"

export function New() {
  return(
    <Container>
      <Header />
      <main>
        <Link icon={FiArrowLeft} title="Voltar" />
        <h1>Novo filme</h1>
        <div className="title-note">
          <Input placeholder="Título" />
          <Input placeholder="Sua nota(de 0 a 5)" />
        </div>
        <Textarea placeholder="Observações" />
        <h2>Marcadores</h2>
        <div id="editable-markers">
          <Marker value="Ação" />
          <Marker value="Ação" />
          <Marker value="Ação" />
          <Marker value="Ação" />
          <Marker isNew placeholder="Nova tag" />
        </div>
        <div id="buttons-end">
          <Button title="Excluir filme" id="button-delete" />
          <Button title="Salvar alterações" id="button-save" />
        </div>
      </main>
    </Container>
  );
}
import { Container, Form, Background } from './styles'

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'

export function SignUp() {
  return(
    <Container>
      <Background />
      <div id="left">
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h1>Criar conta</h1>
        <Form>
          <Input icon={FiUser} placeholder="Nome" type="text" id="input-name" />
          <Input icon={FiMail} placeholder="E-mail" type="email" id="input-email" />
          <Input icon={FiLock} placeholder="Senha" type="password" id="input-password" />
          <Button title="Cadastrar" type="submit" />
        </Form>
        <Link icon={FiArrowLeft} title="Criar conta" adress="https://www.rocketseat.com.br" target="blank"/>
      </div>
    </Container>
  );
}
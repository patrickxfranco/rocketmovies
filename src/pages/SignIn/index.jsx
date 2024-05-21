import { Container, Form, Background } from './styles'

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'

export function SignIn() {
  return(
    <Container>
      <div id="left">
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h1>Faça seu login</h1>
        <Form>
          <Input icon={FiMail} placeholder="E-mail" type="email" id="input-email" />
          <Input icon={FiLock} placeholder="Senha" type="password" id="input-password" />
          <Button title="Entrar" type="submit" />
        </Form>
        <Link title="Criar conta" adress="https://www.rocketseat.com.br" target="blank"/>
      </div>
      <Background />
    </Container>
  );
}
import { Container } from "./styles";

export function Link({ icon: Icon, title, adress, ...rest }) {
  return(
    <Container href={adress} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
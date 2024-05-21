import { Container } from "./styles";

import { FiStar } from "react-icons/fi";

export function Stars() {
  return(
    <Container>
      <FiStar size={20} />
      <FiStar size={20} />
      <FiStar size={20} />
      <FiStar size={20} />
      <FiStar size={20} />
    </Container>
  );
}
/* eslint-disable quotes */
// eslint-disable-next-line quotes
import { Container, Footer, Overlay } from "./styles";

import Button from "../Button";

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1> Título do modal</h1>
        <p> Corpo do modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

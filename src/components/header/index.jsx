import { Container, Nav } from "./styles";

import { Form } from "../Form";

export const Header = () => {
  return (
    <Container>
      <Nav>
        <h1>
          <span>Tech</span>
          <span>Blog</span>
        </h1>
        <Form />
      </Nav>
    </Container>
  );
};

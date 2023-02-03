import { Container } from "./styles";

import { Card } from "../card";

export const Cards = ({ blogNews }) => {
  return (
    <Container>
      {blogNews.map((blogNew) => {
        return (
          <Card
            key={blogNew.id}
            title={blogNew.title}
            date={blogNew.date}
            news={blogNew.news}
          />
        );
      })}
    </Container>
  );
};

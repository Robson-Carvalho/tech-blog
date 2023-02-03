import { Container, Info, Content } from "./styles";

import heartIcon from "../../assets/heart.svg";

export const Card = ({ title, date, news }) => {
  return (
    <Container>
      <Info>
        <span>{date}</span>
        <img src={heartIcon} alt="" />
      </Info>
      <Content>
        <h3>{title}</h3>
        <span>{news}</span>
      </Content>
    </Container>
  );
};

import { useState } from "react";
import { Header } from "../../components/header";
import { Cards } from "../../components/cards";

import { Container } from "./styles";

export const Home = () => {
  const posts = [
    {
      id: crypto.randomUUID(),
      title: "Agora é oficial: o Windows 11 está vindo",
      news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
      date: "02 de jul, 2021",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Tim Berners-Lee vai leiloar código-fonte da web",
      news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
      date: "02 de jul, 2021",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Tem Firefox novo no pedaço e você vai querer migrar",
      news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
      date: "02 de jul, 2021",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "John MCAfee, criador do antivírus McAfee, morre",
      news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero.",
      date: "02 de jul, 2021",
      isFavorite: false,
    },
  ];

  const [search, setSearch] = useState(posts);

  const searchNews = (search) => {
    const lowerText = search.toLowerCase();

    const postSearch = posts.filter((post, index) => {
      if (post.title.toLowerCase().includes(lowerText) === true) {
        return posts[index];
      }
      return;
    });

    setSearch(postSearch);
  };

  return (
    <Container>
      <Header searchNews={searchNews} />
      <Cards blogNews={search} />
    </Container>
  );
};

import { Container, Nav } from "./styles";
import { useState } from "react";
import searchIcon from "../../assets/search.svg";

export const Header = ({ searchNews }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    searchNews(search);
    // setSearch("");
  };

  const handleSearch = ({ target: { value } }) => {
    setSearch(value);
    searchNews(value);
  };

  return (
    <Container>
      <Nav>
        <h1>
          <span>Tech</span>
          <span>Blog</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <button type="submit">
            <img src={searchIcon} alt="Search icon" />
          </button>
          <input
            type="text"
            placeholder="Pesquisar no blog"
            onChange={handleSearch}
            value={search}
          />
        </form>
      </Nav>
    </Container>
  );
};

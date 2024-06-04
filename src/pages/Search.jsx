import React, { useState } from "react";
import styled from "styled-components";
import Searchbar from "../components/searchSection/Searchbar";
import Searchlist from "../components/searchSection/Searchlist";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContainer searchQuery={searchQuery}>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchQuery && <Searchlist searchQuery={searchQuery} />}
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  margin-bottom: ${({ searchQuery }) => (searchQuery ? "100px" : "500px")};
`;

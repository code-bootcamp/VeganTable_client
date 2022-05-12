import * as Search from "./styles";

export default function SearchBar01() {
  return (
    <Search.Container>
      <img src="/img/searchBar/icon-search.svg" alt="검색" />
      <input type="text" placeholder="원하는 레시피가 있나요?" />
    </Search.Container>
  );
}

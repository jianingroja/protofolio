import styled from "styled-components";

const Sort = ({ handleSort, handleAll }) => {
  return (
    <StyledSort>
      <ul>
        <li>
          <a onClick={(e) => handleAll(e)} href="#">
            All
          </a>
        </li>
        <li>
          <a onClick={(e) => handleSort("html/css", e)} href="#">
            Html/Css
          </a>
        </li>
        <li>
          <a onClick={(e) => handleSort("javascript", e)} href="#">
            JavaScript
          </a>
        </li>
        <li>
          <a onClick={(e) => handleSort("react", e)} href="#">
            React
          </a>
        </li>
      </ul>
    </StyledSort>
  );
};

const StyledSort = styled.div`
  padding: 2rem 3rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  li {
    list-style: none;
    border-bottom: 1px solid gray;
  }
  a {
    width: 100%;
    padding: 0rem 3rem;
    text-decoration: none;
    color: #795c5c;
    &:hover {
      cursor: pointer;
      background-color: #946969;
      color: white;
    }
    @media screen and (max-width: 768px) {
      padding: 1rem;
    }
  }
`;

export default Sort;

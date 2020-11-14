import styled from "styled-components";

const Project = ({ title, image, url }) => {
  return (
    <StyledProject>
      <img src={image} alt="image" />

      <a href={url} target="blank">
        {title}
      </a>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  border-bottom: 0.5px solid rosybrown;
  padding-bottom: 1rem;
  margin: 3rem 5%;
  flex: 40% 1;
  img {
    width: 100%;
    margin-bottom: 2rem;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    text-align: center;
    color: #916363;
    /* font-family: "Oswald", sans-serif; */
    font-weight: light;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export default Project;

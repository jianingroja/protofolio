import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 5rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Image = styled.div`
  flex: 0.5;
  max-width: 30%;
  overflow: hidden;
  margin-right: 2rem;
  img {
    width: 100%;
    height: auto;
    max-height: 60vh;
    object-fit: contain;
    object-position: center;

    margin-bottom: 5rem;
    border-radius: 30px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Info = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

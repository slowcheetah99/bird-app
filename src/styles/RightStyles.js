import styled from "styled-components";

export const RightWrapper = styled.div`
  width: 30%;
  height: 100vh;
  padding: 2rem;
  position: relative;
`;

export const Search = styled.div`
  width: 90%;
  height: 8vh;

  input {
    width: 100%;
    border: 2px solid #ddd;
    outline: none;
    height: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: 20px;
  }
`;

export const Headline = styled.div`
  margin-top: 2rem;
  border: 2px solid #eee;
  border-radius: 20px;
  padding: 1rem;

  div.meta {
    display: flex;
    width: 100%;
    justify-content: space-between;

    button {
      height: fit-content;
      padding: 0.5rem 1.25rem;
      border-radius: 20px;
      font-size: 0.75rem;
      border: 2px solid #000;
      outline: none;
      background-color: #fff;
    }
  }

  div.profile {
    display: flex;
    column-gap: 10px;
  }

  div.profile--img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    overflow: hidden;

    img{
      width: 100%:
      height: 100%:
      object-fit: cover;
      object-position: center;
    }
  }

  div.meta-text {
    h4 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
  p.post {
    font-size: 0.85rem;
  }

  p.post-blue {
    font-size: 0.85rem;
    color: dodgerblue;
    font-weight: 600;
  }
`;

export const Trending = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  border: 2px solid #eee;

  div.post {
    width: 100%;

    & .post-text {
      width: 65%;

      span {
        font-size: 0.8rem;
        color: gray;
      }
      h4 {
        font-size: 0.9rem;
      }
      p {
        font-size: 0.8rem;
        font-weight: 600;
        color: gray;
      }
    }
  }
`;

export const RightFooter = styled.div`
  position: fixed;
  bottom: 0;
  right: 2%;
  width: 27.5%;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
  border: 2px solid gray;

  div {
    flex: 0.3;
    display: flex;
    column-gap: 10px;
    font-size: 1.35rem;
  }
`;

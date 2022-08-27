import styled from "styled-components";

export const CenterWrapper = styled.div`
  width: 50%;
  height: 100vh;
  border-right: 1px solid #000;
  padding-inline: 2rem;
  margin-left: 20vw;
`;

export const CenterHeader = styled.header`
  width: 100%;
  height: 5vh;
  display: flex;
  column-gap: 30px;
  padding-block: 2rem;
  align-items: center;

  a {
    display: block;
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
`;

export const CenterBody = styled.div``;

export const Meta = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div.profile {
    display: flex;
    flex: 0.4;
    column-gap: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    div:first-child {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;
    }

    h5 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  div.more {
    display: flex;
    span {
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color: #000;
      &:not(:last-child) {
        margin-right: 4px;
      }
    }
  }
`;

export const Post = styled.div`
  width: 100%;
  height: 75vh;
  margin-block: 1rem;

  div.post-image {
    width: 100%;
    height: 55%;
    background-color: dodgerblue;
    margin-top: 1rem;
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export const PostMeta = styled.div`
  div.post-info--internal {
    width: 100%;
    padding-block: 10px;
    margin-block: 10px;
    font-size: 0.9rem;
    display: flex;
    column-gap: 3px;
    align-items: center;
    border-bottom: 1px solid #000;
  }

  div.post-info--external {
    width: 100%;
    padding-block: 10px;
    margin-block: 10px;
    font-size: 0.9rem;
    display: flex;
    column-gap: 20px;
    border-bottom: 1px solid #000;

    strong {
      margin-right: 3px;
    }
  }

  div.post-info-icons {
    width: 100%;
    padding-block: 10px;
    margin-block: 10px;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #000;

    div {
      display: flex;
      align-items: center;
      column-gap: 5px;
    }
    svg {
      color: #000;
      font-size: 1.25rem;
      cursor: pointer;
    }
    svg.liked * {
      fill: crimson;
      color: crimson;
      overflow: hidden;
    }
  }
`;

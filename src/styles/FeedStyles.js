import styled from "styled-components";
import { Link } from "react-router-dom";

export const FeedWrapper = styled.section`
  display: flex;
`;

export const SidebarWrapper = styled.aside`
  width: 15%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-block: 1%;
  row-gap: 15px;
  padding-right: 2%;
  border-right: 1px solid gray;

  .feather {
    background: dodgerblue;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    margin-right: -1rem;
    svg {
      font-size: 2rem;
      color: #fff;
    }
  }
`;

export const Nav = styled(Link)`
  svg {
    font-size: 2rem;
    color: #000;
    text-decoration: none;
  }
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid #000;
  background-color: dodgerblue;
  margin-right: -0.25rem;
`;

export const TweetWrapper = styled.div`
  width: 100%;
  height: 20vh;

  div.header{
    width 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  div.tweet{
    display: flex;
    column-gap: 10px;
    align-items: center;
    padding: 1rem;

    input{
      flex: 0.7;
      height: 2rem;
      padding: 1rem;
      outline: none;
      border: none;
      transition: all .4s ease;
      background-color: transparent;
    }
    input:focus{
      border-bottom: 2px solid gray;
    }
  }

  div.tweet-icons{
    display: flex;
    align-items: center;
    padding: 1rem;

    .icons{
      flex: 0.5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline: 4rem;

      svg{
        font-size: 1.5rem;
        color: dodgerblue;
      }
    }
  }

  div.tweet-submit{
    flex: 0.5;
    text-align: right;
  }
`;

export const CenterWrapper = styled.div`
  width: 50%;
  height: 100vh;
  border-right: 1px solid gray;
  margin-left: 15%;
`;

export const TweetSubmit = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: dodgerblue;
  color: #fff;
  font-weight: 700;
`;

export const TweetContainer = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  border-block: 1px solid gray;
  color: #000;
  display: block;

  div.tweet-header {
    display: flex;
    align-items: center;

    div.user-profile {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
      overflow: hidden;
    }

    .user-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    div.user-meta {
      width: 80%;
      display: flex;
      column-gap: 15px;
      margin-top: -2rem;

      span {
        font-size: 0.85rem;
        color: gray;
      }
    }
  }

  .tweet-body {
    margin-left: calc(1rem + 3rem + 2.5px);
    margin-right: 1rem;
    margin-top: -1.75rem;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  div.tweet-meta {
    display: flex;
    padding-inline: 4.02rem;
    justify-content: space-between;
    font-size: 0.95rem;

    div {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }

    div.tip {
      svg {
        transform: rotate(12deg);
      }
    }
  }
`;

import styled from "styled-components";
import { AiOutlineTwitter as Twitter } from "react-icons/ai";
import { Link } from "react-router-dom";
export const SidebarWrapper = styled.aside`
  width: 20vw;
  height: 100vh;
  border-right: 1px solid #000;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-top: 1rem;
  color: dodgerblue;
  position: fixed;
  left: 0;
  top: 0;
`;
export const SidebarHead = styled.div`
  width: 100%;
  height: 5vh;
`;

export const Logo = styled(Twitter)`
  font-size: 2rem;
`;

export const SidebarNav = styled.nav`
  width: 100%;
  height: 60vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const NavEl = styled(Link)`
  display: flex;
  width: 92.5%;
  margin-block: 0.5rem;
  padding: 0.2rem;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #000;
  column-gap: 1rem;
  align-items: center;
  border-radius: 4px;

  svg {
    font-size: 1.5rem;
  }

  span {
    font-size: 0.95rem;
  }
`;

export const Tweet = styled.button`
  width: 92.5%;
  background-color: dodgerblue;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
  padding-block: 0.75rem;
  border: none;
  outline: none;
  border-radius: 40px;
`;

export const Profile = styled.div`
  width: 100%;
  left: 0;
  height: 5vh;
  padding-left: 1rem;
  display: flex;
  position: absolute;
  bottom: 0%;
  box-sizing: border-box;
  padding-block: 3rem;
  align-items: center;

  div.profile {
    flex: 0.8;
    display: flex;
    p:first-child {
      font-size: 0.95rem;
      font-weight: 800;
      color: #000;
    }
    p {
      font-size: 0.85rem;
      color: #000;
    }
  }

  div.more {
    flex: 0.2;
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

export const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: dodgerblue;
  margin-right: 0.5rem;
`;

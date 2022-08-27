import styled from "styled-components";
import { AiOutlineTwitter as Twitter } from "react-icons/ai";
import { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;
export const Container = styled.div`
  width: 100%;
  height: fit-content;

  & div.dashboard {
    display: flex;
    height: 100%;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Banner = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Interaction = styled.div`
  width: 50%;
  height: 100%;

  p.tos {
    font-size: 0.65rem;
    color: gray;
    margin-left: 2rem;
    width: 45%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    span {
      color: dodgerblue;
    }
  }
`;

export const Logo = styled(Twitter)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 30rem;
  z-index: 2;

  ${(props) =>
    props.small &&
    css`
      font-size: 4rem;
      position: relative;
      top: 0;
      left: 0;
      margin-inline: auto;
      width: auto;
      margin-top: 1.5rem;
      color: dodgerblue;
    `}

  ${(props) =>
    props.neutral &&
    css`
      font-size: 3rem;
    `}
`;

export const Content = styled.section`
  padding-inline: 2rem;
  margin-top: -2rem;

  p {
    position: relative;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      content: "";
      width: 45%;
      height: 2px;
      background-color: gray;
    }
    &::before {
      left: 0%;
    }

    &::after {
      right: 0%;
    }
  }
`;

export const Headline = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const SubheadLine = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Cta = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  text-align: center;
  flex-direction: column;
  row-gap: 10px;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      align-items: center;
    `}
`;

const Button = styled.button`
  font-size: 0.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding-block: 0.75rem;
  border-radius: 40px;
  border: 2px solid #000;
  outline: none;

  svg {
    font-size: 1.25rem;
    ${(props) =>
      props.center &&
      css`
        width: fit-content;
        vertical-align: middle;
        margin-right: 10px;
      `}
  }
`;

export const Google = styled(Button)`
  font-weight: 400;
`;

export const Apple = styled(Button)`
  font-weight: 600;
`;

export const Email = styled(Button)`
  font-weight: 600;
  color: #fff;
  border: none;
  outline: none;
  background-color: dodgerblue;
`;

export const SignIn = styled.section`
  width: 45%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const Sign = styled(Button)`
  border: 2px solid gray;
  background-color: transparent;
  color: dodgerblue;
  font-weight: 600;
`;

export const Footer = styled.footer`
  height: 2vh;
  margin-block: 1rem;
`;

export const FooterText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-block: 0.5rem;
`;

export const FooterLink = styled(Link)`
  color: gray;
  font-size: 0.75rem;
  text-decoration: none;
`;

export const FooterCopy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding-bottom: 1rem;
`;

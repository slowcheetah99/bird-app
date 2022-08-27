import styled from "styled-components";
import { AiOutlineClose as Close } from "react-icons/ai";

export const FormOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 3;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  div.checkbox-div {
    display: flex;
    align-items: center;
    column-gap: 0 !important;

    input {
      width: 1.25rem;
      height: 1.25rem;
    }

    span {
      width: fit-content;
      font-size: 0.9rem;
      margin-left: 10px;
    }
  }
`;
export const Form = styled.form`
  height: 90%;
  width: 90vh;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 20px;
  z-index: 4;
  display: flex;
  align-items: center;
  row-gap: 10px;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 1rem;
  position: relative;

  button {
    margin-bottom: 1rem;
  }

  & * {
    width: 75%;
  }

  p.or {
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

  p.form-footer {
    margin-top: 2rem;
    font-size: 0.85rem;

    span {
      color: dodgerblue;
      font-weight: 700;
    }
  }
`;

export const Input = styled.input`
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid gray;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CloseForm = styled(Close)`
  position: absolute;
  top: 2.5%;
  left: -30%;
`;

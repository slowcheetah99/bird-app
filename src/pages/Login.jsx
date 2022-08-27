import Layout from "../layouts/layout";
import { FormOverlay, Form, Input } from "../styles/LoginStyles";
import { useState } from "react";
import { Logo, Cta, Google, Apple } from "../styles/Globals";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { AiFillApple as AppleIcon } from "react-icons/ai";
import { CloseForm } from "../styles/LoginStyles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const slideIn = {
  in: {
    x: "0%",
  },
  out: {
    x: "-100%",
  },
};

const slideOut = {
  in: {
    x: "0%",
  },
  out: {
    x: "100%",
  },
};
export default function Login() {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState("");
  const [next, setNext] = useState(false);
  const handleNext = (e) => {
    e.preventDefault();
    if (text) {
      setPassword("");
      setNext(true);
      return;
    }
    setTextError("Please fill out this field");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password) {
      //do validation
      window.location.pathname = "/";
    }
    setTextError("Please fill out this field");
    return;
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setNext((prevState) => !prevState);
  };

  return (
    <Layout>
      {visible && (
        <FormOverlay>
          <Form>
            <CloseForm />
            <Cta fullWidth="true">
              <Logo
                small="true"
                neutral="true"
                style={{ marginLeft: "12.5rem" }}
              />
              <h2
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                Sign in to Twitter
              </h2>
              <Google center={true}>
                <div>
                  <GoogleIcon />
                  <span>Continue with Google</span>
                </div>
              </Google>
              <Apple center={true}>
                <div>
                  <AppleIcon />
                  <span>Continue with Apple</span>
                </div>
              </Apple>
              <p className="or">or</p>
              {next ? (
                <motion.div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "1rem",
                  }}
                  initial="out"
                  animate="in"
                  variants={slideOut}
                >
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    autoComplete="false"
                  />
                  {textError && <p>{textError}</p>}
                  <Apple onClick={handlePrev}>Prev</Apple>
                  <Apple onClick={handleSubmit} type="submit">
                    Submit
                  </Apple>
                </motion.div>
              ) : (
                <motion.div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "1rem",
                  }}
                  initial="out"
                  animate="in"
                  variants={slideIn}
                >
                  <Input
                    type="text"
                    placeholder="Phone, email or username"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                  {textError && <p>{textError}</p>}
                  <Apple onClick={handleNext}>Next</Apple>
                </motion.div>
              )}
              <Apple center={true}>Forgot password?</Apple>

              <p className="form-footer">
                Don't have an account?{" "}
                <Link to="/register">
                  <span>Sign up</span>
                </Link>
              </p>
            </Cta>
          </Form>
        </FormOverlay>
      )}
    </Layout>
  );
}

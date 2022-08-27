import Layout from "../layouts/layout";
import { FormOverlay, Form, Input } from "../styles/LoginStyles";
import { useState } from "react";
import { Logo, Cta, Google, Apple } from "../styles/Globals";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { AiFillApple as AppleIcon } from "react-icons/ai";
import { CloseForm } from "../styles/LoginStyles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Alert from "../components/bytes/Alert";
import { useBirdContext } from "../helpers/hooks/useBirdContext";
import { faker } from "@faker-js/faker";

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
export default function Register() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState("");
  const [next, setNext] = useState(false);
  const [showText, setShowText] = useState(false);
  const { visible, users, dispatch } = useBirdContext();
  const emailTest =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passTest =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
  const handleNext = (e) => {
    e.preventDefault();
    if (text) {
      const passed = emailTest.test(text);
      if (!passed) {
        setTextError("Please enter a valid email address");
        setTimeout(() => {
          setTextError("");
        }, 5000);
        return;
      }
      setNext(true);
      return;
    }
    setTextError("Please fill out this field");
    setTimeout(() => {
      setTextError("");
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password) {
      //do validation
      const strongPass = passTest.test(password);
      if (!strongPass) {
        setTextError(
          "Password must be strong, have an uppercase and lowercase letter, a number and a special character"
        );
        setTimeout(() => {
          setTextError("");
        }, 5000);
        return;
      }
      let user = {
        userId: faker.datatype.uuid(),
        image: faker.internet.avatar(),
        name: faker.name.fullName(),
        email: text,
        password,
        username: faker.internet.userName(),
        about: faker.lorem.paragraph(),
        slug: faker.lorem.slug(),
        createdAt: Date.now(),
      };
      localStorage.setItem("BIRD_APP_USERS", JSON.stringify([...users, user]));
      dispatch({ type: "CREATE_USER", payload: user });
      window.location.pathname = "/";
      return;
    }
    setTextError("Please fill out this field");
    setTimeout(() => {
      setTextError("");
    }, 5000);
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
                Sign up for Twitter
              </h2>
              <Google center={true}>
                <div>
                  <GoogleIcon />
                  <span>Sign up with Google</span>
                </div>
              </Google>
              <Apple center={true}>
                <div>
                  <AppleIcon />
                  <span>Sign up with Apple</span>
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
                    type={showText ? "password" : "text"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="false"
                    value={password}
                    minLength={8}
                    maxLength={16}
                  />
                  <div className="checkbox-div">
                    <input
                      type="checkbox"
                      onChange={() => setShowText((state) => !state)}
                    />
                    <span>Show password</span>
                  </div>
                  {textError && (
                    <div>
                      <p
                        style={{
                          color: "crimson",
                          fontSize: "0.9rem",
                          textAlign: "left",
                          width: "100%",
                          marginInline: "auto",
                        }}
                      >
                        {textError}
                      </p>
                      {/* {setTimeout(() => {
                        <Alert error={textError} />;
                      }, 5000)} */}
                    </div>
                  )}
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
                  {textError && (
                    <div>
                      <p style={{ color: "crimson", fontSize: "0.9rem" }}>
                        {textError}
                      </p>
                      {/* {setTimeout(() => {
                        <Alert error={textError} />;
                      }, 5000)} */}
                    </div>
                  )}
                  <Apple onClick={handleNext}>Next</Apple>
                </motion.div>
              )}

              <p className="form-footer">
                Already have an account?{" "}
                <Link to="/login">
                  <span>Sign in</span>
                </Link>
              </p>
            </Cta>
          </Form>
        </FormOverlay>
      )}
    </Layout>
  );
}

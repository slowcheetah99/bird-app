import {
  Wrapper,
  Body,
  Banner,
  Interaction,
  BannerImg,
  Logo,
  Content,
  Headline,
  SubheadLine,
  Cta,
  Google,
  Apple,
  Email,
  SignIn,
  Sign,
  Footer,
  FooterText,
  FooterLink,
  FooterCopy,
} from "../styles/Globals";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { AiFillApple as AppleIcon } from "react-icons/ai";
import banner from "../assets/banner.png";
export default function Layout({ children }) {
  return (
    <Wrapper>
      <Body>
        <Banner>
          <BannerImg src={banner} alt="twitter-banner" />
          <Logo />
        </Banner>
        <Interaction>
          <Logo small={true} />
          <Content>
            <Headline>Happening now</Headline>
            <SubheadLine>Join Twitter today.</SubheadLine>
            <Cta>
              <Google>
                <GoogleIcon />
                <span>Sign up with Google</span>
              </Google>
              <Apple>
                <AppleIcon />
                <span>Sign up with Apple</span>
              </Apple>
              <p>or</p>
              <Email>Sign up with phone or email</Email>
            </Cta>
          </Content>
          <p className="tos">
            By signing up, you agree to the <span>Terms of Service</span>, and{" "}
            <span>Privacy Policy</span>, including <span>Cookie Use</span>
          </p>

          <SignIn>
            <h4>Already have an account?</h4>
            <Sign>Sign in</Sign>
          </SignIn>
        </Interaction>
        {children}
      </Body>
      <Footer>
        <FooterText>
          <FooterLink to="/">About</FooterLink>
          <FooterLink to="/">Help Center</FooterLink>
          <FooterLink to="/">Terms of Service</FooterLink>
          <FooterLink to="/">Privacy Policy</FooterLink>
          <FooterLink to="/">Cookie Policy</FooterLink>
          <FooterLink to="/">Accessibility</FooterLink>
          <FooterLink to="/">Ads Info</FooterLink>
          <FooterLink to="/">Blog</FooterLink>
          <FooterLink to="/">Status</FooterLink>
          <FooterLink to="/">Careers</FooterLink>
          <FooterLink to="/">Brand Resources</FooterLink>
          <FooterLink to="/">Advertising</FooterLink>
          <FooterLink to="/">Marketing</FooterLink>
          <FooterLink to="/">Twitter for Business</FooterLink>
          <FooterLink to="/">Developers</FooterLink>
        </FooterText>
        <FooterCopy>
          <FooterLink to="/">Directory</FooterLink>
          <FooterLink to="/">Settings</FooterLink>
          <FooterLink to="/">&copy; 2022 Twitter, Inc.</FooterLink>
        </FooterCopy>
      </Footer>
    </Wrapper>
  );
}

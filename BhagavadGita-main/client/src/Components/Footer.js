import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper
      className="footer relative overflow-hidden flex flex-col justify-center items-center"
      id="footer"
    >
      <div className="footer-container px-10">
        <div className="wrapper grid sm:grid-cols-3 gap-2">
          <div className="logo p-5">
            <div className="mb-5">
              <a href="/">
                <img src="/images/logo2.png" alt="logo" />
              </a>
            </div>
            <div className="heading">
              <p className="lg:text-base">
                Created with ❤️ by Neha Pal – Full Stack Developer and student at VIT Bhopal. 
                This platform merges timeless Bhagavad Gita teachings with modern web technology.
              </p>
            </div>
          </div>

          <div className="footer-link lg:mx-10 md:mx-5 p-5 flex flex-col">
            <div className="mb-2">
              <h1 className="text-xl font-bold">USEFUL LINKS</h1>
            </div>
            <ul>
              <li onClick={scrollToTop}>
                <Link to="/" className="flex items-center">
                  <span className="link-icon"><BiChevronRight /></span>
                  <span>Home</span>
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/about" className="flex items-center">
                  <span className="link-icon"><BiChevronRight /></span>
                  <span>About</span>
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/contact" className="flex items-center">
                  <span className="link-icon"><BiChevronRight /></span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-link p-5 flex flex-col">
            <div className="mb-2">
              <h1 className="text-xl font-bold">CONNECT WITH ME</h1>
            </div>
            <ul>
              <li>
                <a href="https://www.instagram.com/nehaahen" target="_blank" rel="noreferrer" className="flex items-center">
                  <span className="link-icon"><AiFillInstagram /></span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/neha-pal-student" target="_blank" rel="noreferrer" className="flex items-center">
                  <span className="link-icon"><AiFillLinkedin /></span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Nehahahah" target="_blank" rel="noreferrer" className="flex items-center">
                  <span className="link-icon"><AiFillGithub /></span>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom w-full flex flex-col justify-center items-center">
          <div className="mb-10 w-full">
            <div className="footer-bottom-line"></div>
          </div>
          <span className="flex justify-center items-center flex-wrap text-sm text-white text-center">
            <span className="mb-1">© {new Date().getFullYear()} All rights reserved |</span>
            <span className="mb-1 ml-1">
              Made with 💜 by <strong>Neha Pal</strong> |
              <a href="mailto:11a.neha.pal@gmail.com" className="ml-1">11a.neha.pal@gmail.com</a> |
              📞 +91 6359091146
            </span>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  position: relative;
  width: 100vw;
  background-color: rgb(30, 30, 37);

  .footer-container {
    padding: 25px 0;
    max-width: 1000px;

    .logo .heading {
      max-width: 30rem;
      color: #BCB4BF;
    }

    .footer-link h1 {
      color: white;
    }

    ul li {
      cursor: pointer;
      margin-bottom: 13px;
      color: #BCB4BF;

      .link-icon {
        font-size: 1.2rem;
        font-weight: 700;
        margin-right: 0.2rem;
        color: ${({ theme }) => theme.colors.orange};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.orange};
        text-decoration: underline;
      }

      a {
        font-size: 1rem;
      }
    }

    .footer-bottom {
      color: white;

      .footer-bottom-line {
        border-top: 1px solid #BCB4BF;
      }

      a {
        color: ${({ theme }) => theme.colors.orange};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .footer-container {
      min-width: 100%;
    }
  }
`;

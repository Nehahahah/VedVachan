import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";
import VerseOfTheDay from "./VerseOfTheDay";
import { Link } from "react-scroll";
import { Button } from "../Styles/Button";

const HeroSection = () => {
  const { slok } = useGlobalContext();

  return (
    <>
      <Wrapper className="relative hero-section">
        <div className="custom-container">
          <div className="flex justify-center items-center">
            <div className="relative hero-section-bg flex flex-col justify-center items-center">
              <div className="hero-section-data flex flex-col justify-center items-center text-center">
                <h1 className="text-white text-6xl md:text-7xl font-bold">
                  🕉 VedVachan
                </h1>
                <h2 className="text-amber-400 text-2xl md:text-3xl mt-2">
                  Sacred Words. Eternal Wisdom.
                </h2>
                <p className="mt-4 text-white text-lg max-w-xl">
                  Discover the divine teachings of the Bhagavad Gita in a serene, modern way — whenever, wherever.
                </p>
                <Button className="btn mt-6">
                  <Link to="chapters" smooth={true} duration={500}>
                    Explore
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-section-image absolute w-screen h-screen">
          <div className="hero-container">
            <div className="wrapper"></div>
          </div>
        </div>
      </Wrapper>

      <VerseOfTheDay
        id={slok?.[0]?.id || ""}
        desc={slok?.[0]?.translations || ""}
        chapter={slok?.[0]?.chapter_number || ""}
        verse={slok?.[0]?.verse_number || ""}
      />
    </>
  );
};

export default HeroSection;

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: transparent;
  background-color: rgb(250, 247, 237);

  .custom-container {
    width: auto;
    max-height: 100%;
    z-index: 2;
  }

  .hero-section-bg {
    position: relative;
    width: 100%;
    height: 90vh;
    border-radius: 10px;
    overflow: hidden;

    .hero-section-data {
      z-index: 2;
      width: 100%;

      h1 {
        margin-bottom: 1rem;
        font-family: "Birthstone Bounce", cursive;
        font-weight: 700;
      }

      h2 {
        margin-bottom: 1rem;
        font-weight: 600;
      }

      p {
        font-size: 1.2rem;
        max-width: 600px;
        line-height: 1.6;
        color: white;
      }

      .btn {
        background-color: ${({ theme }) => theme.colors.orange};
        width: 140px;
        border-radius: 25px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.05);
        }

        a {
          font-size: 1rem;
        }
      }
    }
  }

  .hero-section-image {
    position: absolute;
    height: 100vh;
    top: 0%;
    left: 0;
    overflow: hidden;

    .hero-container {
      position: relative;
      width: 110vw;
      height: 100vh;
      background: url("/images/bg5.jpg");
      transform-origin: 0% 0%;
      transform: translate3d(-42.7px, -32.1204px, 0px) scale(1.1, 1.1);
      background-repeat: no-repeat;
      background-size: cover;
      animation: zoom-in linear 12s;

      .wrapper {
        width: 100vw;
        height: 100vh;
      }
    }
  }

  @keyframes zoom-in {
    0% {
      transform: translate3d(0, 0, 0) scale(1, 1);
    }
    100% {
      transform: translate3d(-42.7px, -32.1204px, 0px) scale(1.1, 1.1);
    }
  }

  @media (min-width: 900px) {
    .custom-container {
      margin: 0px 80px;
    }

    h1 {
      font-size: 7rem;
    }

    h2 {
      font-size: 4rem;
    }
  }

  @media (max-width: 900px) {
    .custom-container {
      margin: 0px 20px;
    }

    .hero-section-image .hero-container {
      background-position: 80% 0%;
    }

    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 3rem;
    }

    .hero-section-bg {
      background-position: 75% 50%;
    }
  }

  @media (max-width: 768px) {
    .hero-section-bg {
      height: 100vh;
    }

    .hero-section-bg .hero-section-data .btn a {
      font-size: 1.5rem;
    }
  }
`;

import React, { Suspense } from 'react'
import HeroSection from '../Components/HeroSection'
import About from './About'
import Contact from './Contact'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import Border from '../Components/Border'

const Chapters = React.lazy(() => import("../Components/Chapters"))

const HomePage = () => {
  return (
    <Wrapper className='relative w-screen overflow-hidden'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* 🕉 VedVachan Hero Section */}
      <HeroSection />

      <Border />

      {/* 📜 Bhagavad Gita Chapters */}
      <Suspense fallback={<div className="text-center py-10 text-lg">Loading chapters...</div>}>
        <Chapters />
      </Suspense>

      <Border />

      {/* 🙏 About VedVachan */}
      <About />

      <Border />

      {/* 📬 Contact */}
      <Contact />
    </Wrapper>
  )
}

export default HomePage;

const Wrapper = styled.div`
  background-color: #fdfbf7;
`

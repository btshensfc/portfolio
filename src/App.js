import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Techniques from './components/Techniques';

const InfiniteScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const contentHeight = contentRef.current?.offsetHeight / 2; // Since we'll duplicate content

    const handleScroll = () => {
      if (!isScrolling.current && scrollContainer) {
        // When scrolled halfway (to the duplicate content), reset to top
        if (scrollContainer.scrollTop >= contentHeight) {
          isScrolling.current = true;
          scrollContainer.scrollTop = scrollContainer.scrollTop - contentHeight;
          isScrolling.current = false;
        }
        // When scrolling up past the start
        else if (scrollContainer.scrollTop <= 0) {
          isScrolling.current = true;
          scrollContainer.scrollTop = contentHeight;
          isScrolling.current = false;
        }
      }
    };

    scrollContainer?.addEventListener('scroll', handleScroll);
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={scrollRef}
      height="100vh"
      overflowY="auto"
      position="relative"
      css={{
        '&::-webkit-scrollbar': { display: 'none' },
        scrollBehavior: 'smooth'
      }}
    >
      <Box ref={contentRef}>
        {/* Original content */}
        {children}
        {/* Duplicated content for seamless looping */}
        {React.Children.map(children, child => 
          React.cloneElement(child, { key: `dupe-${child.key}` })
        )}
      </Box>
    </Box>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <InfiniteScrollContainer>
            <Hero key="hero" />
            <About key="about" />
            <Contact key="contact" />
          </InfiniteScrollContainer>
        } />
        <Route path="/techniques" element={<Techniques />} />
      </Routes>
    </Router>
  );
}

export default App;
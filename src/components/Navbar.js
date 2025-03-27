import React from 'react';

import { Flex, Box, Text, Link, chakra } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <chakra.nav
      p={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
      position="sticky"
      top={0}
      bg="white"
      zIndex="sticky"
    >
      <Text fontSize="xl" fontWeight="bold">
        Briant Shen
      </Text>
      <Flex gap={6}>
        <Link href="#projects" _hover={{ color: 'blue.600' }}>
          Projects
        </Link>
        <Link href="#about" _hover={{ color: 'blue.600' }}>
          About
        </Link>
        <Link 
          href="resume.pdf" 
          target="_blank" 
          download="BriantShen_Resume.pdf"
          rel="noopener noreferrer"
          _hover={{ color: 'blue.600' }}
        >
          Resume
        </Link>
        <Link href="#contact" _hover={{ color: 'blue.600' }}>
          Contact
        </Link>
      </Flex>
    </chakra.nav>
  );
}
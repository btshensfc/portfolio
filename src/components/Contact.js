// Contact.js
import React from 'react';
import { Box, Heading, Text, Link, Flex } from '@chakra-ui/react';

export default function Contact() {
  return (
    <Box 
      as="section"
      id="contact"
      textAlign="center"
      p={20}
      margin="50px"
      bgGradient="linear(to-br, purple.100, white)"
      borderRadius="xl"
      boxShadow="md"
      mx="auto"
      maxW="3xl"
    >
      <Heading as="h2" fontSize="3xl" fontWeight="bold" mb={4}>
        Let's Connect
      </Heading>
      <Flex justify="center" gap={6}>
        <Link 
          href="mailto:shen.briant@gmail.com" 
          color="blue.500"
          fontWeight="medium"
          _hover={{ textDecoration: 'underline' }}
        >
          Email
        </Link>
        <Link 
          href="https://linkedin.com/in/yourprofile" 
          color="blue.500"
          fontWeight="medium"
          _hover={{ textDecoration: 'underline' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link 
          href="https://github.com/yourusername" 
          color="blue.500"
          fontWeight="medium"
          _hover={{ textDecoration: 'underline' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </Flex>
    </Box>
  );
}
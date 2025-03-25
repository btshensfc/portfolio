// About.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Box 
      as="section"
      id="about"
      textAlign="center"
      p={20}
      margin="50px"
      bgGradient="linear(to-br, teal.100, white)"
      borderRadius="xl"
      boxShadow="md"
      mx="auto"
      maxW="3xl"
    >
      <Heading as="h2" fontSize="3xl" fontWeight="bold" mb={4}>
        About Me
      </Heading>
      <Text fontSize="lg">
        I'm a junior software engineer focused on front-end development using React and Tailwind CSS.
        Currently building production-ready features for an eCommerce platform with real users.
        Passionate about user experience, clean code, and UI polish.
      </Text>
    </Box>
  );
}
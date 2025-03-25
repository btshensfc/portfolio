import React from 'react';
import { Box, Heading, Text, Button, chakra } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box 
      as="section"
      textAlign="center"
      p={20}
      margin="50px"
      bgGradient="linear(to-br, blue.100, white)"
      borderRadius="xl"
      boxShadow="md"
      mx="auto"
      maxW="3xl"
    >
      <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={4}>
        Hi, I'm Briant Shen
      </Heading>
      <Text fontSize="lg" mb={6}>
        Front-End Developer | React & UI Enthusiast
      </Text>
      <Button
        onClick={() => navigate('/techniques')} // Changed to use navigate
        bg="blue.500"
        color="white"
        px={6}
        py={2}
        borderRadius="xl"
        boxShadow="md"
        _hover={{ bg: 'blue.600' }}
      >
        View My Work
      </Button>
    </Box>
  );
}
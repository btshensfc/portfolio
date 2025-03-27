import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box 
      as="section"
      width="100%"
      overflowX="hidden"
    >
      <Flex
        width="100%"
        minH="60vh"  // Changed from 100vh to auto
        px={[4, 6, 8, 10]}
        py={[8, 12, 16]}  // Adjusted vertical padding
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="100%"
        margin="0 auto"
        bgGradient="linear(to-br, blue.100, white)"
      >
        {/* Text Content - Left Side */}
        <Box 
          flex={1} 
          width="100%"
          maxW={{ md: "50%" }}
          pr={{ md: 8 }}
        >
          <Heading as="h1" fontSize={["6xl", "6xl"]} fontWeight="bold" mb={10}>
            Hi, I'm Briant Shen
          </Heading>
          <Heading 
            as="h2"  
            color="gray.700"  
            fontSize={["3xl", "4xl"]} 
            fontWeight="normal" 
            mb={4}
          >
            If you're reading this, then you've clicked on my profile!
          </Heading>
          <Text 
            fontSize={["lg", "xl"]} 
            mb={6}
            color="gray.600"  
            opacity={0.9}     
          >
            A passionate Full-Stack Developer 🚀 specializing in React and Spring MVC, with experience in
            building production-ready features for eCommerce platforms with real users. Focused on crafting 
            exceptional user experiences with clean code, sturdy backend architecture, and polished UI interfaces.
          </Text>
          
          {/* Buttons */}
          <Flex gap={4} mt={8} wrap="wrap">
            <Button
              onClick={() => navigate('/techniques')}
              bg="blue.500"
              color="white"
              px={6}
              mb={2}  // Added margin for wrapping
              _hover={{ bg: 'blue.600' }}
            >
              View My Work
            </Button>
            <Button
              as="a"
              href="/resume.pdf"
              download="BriantShen_Resume.pdf"
              bg="gray.100"
              color="gray.800"
              px={6}
              mb={2}  // Added margin for wrapping
              _hover={{ bg: 'gray.200' }}
            >
              Download Resume
            </Button>
          </Flex>
        </Box>

        {/* Image/Illustration - Right Side */}
        <Box 
          flex={1}
          width="100%"
          maxW={{ md: "50%" }}
          pl={{ md: 8 }}
          mt={[8, 0]}  // Added top margin on mobile
        >
          {/* Your illustration/image would go here */}
        </Box>
      </Flex>
    </Box>
  );
}
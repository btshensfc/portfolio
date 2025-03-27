import React from 'react';
import { Box, Flex, Heading, Text, Image, VStack, HStack, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiCircle } from 'react-icons/fi';
// List of your SVG files (assuming they're in public/icons/)
const techStack = [
  { name: 'AWS', file: 'amazonwebservices.svg' },
  { name: 'Bootstrap', file: 'bootstrap.svg' },
  { name: 'Gradle', file: 'gradle.svg' },
  { name: 'HTML5', file: 'html5.svg' },
  { name: 'JavaScript', file: 'javascript.svg' },
  { name: 'MySQL', file: 'mysql.svg' },
  { name: 'PHP', file: 'php.svg' },
  { name: 'React', file: 'react.svg' },
  { name: 'Vue', file: 'vuedotjs.svg' }
];

export default function About() {
  const navigate = useNavigate();

  return (
    <Box as="section" width="100%" overflowX="hidden">
      <Flex
        width="100%"
        minH="60vh"
        px={[4, 6, 8, 10]}
        py={[8, 12, 16]}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="100%"
        margin="0 auto"
        bgGradient="linear(to-br, blue.100, white)"
      >
        <Box flex={1} width="100%" maxW={{ md: "50%" }} pl={{ md: 8 }} mt={[8, 0]}>
          {/* Your illustration/image would go here */}
        </Box>

        {/* Tech Stack SVGs - Replacing Buttons */}
        <Box flex={1} width="100%" maxW={{ md: "50%" }} pr={{ md: 8 }}>
          <Heading as="h1" fontSize={["6xl", "6xl"]} fontWeight="bold" mb={10}>
            What do I do? 
          </Heading>
          
          <Text fontSize={["lg", "xl"]} mb={10} color="gray.600" opacity={0.9}>
            Here are some of technologies I work with:
          </Text>
          
          <Flex 
            wrap="wrap" 
            gap={6} 
            mt={8}
            justify={{ base: "center", md: "flex-start" }}
          >
            {techStack.map((tech) => (
              <Box
                key={tech.name}
                as="figure"
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{ transform: 'scale(1.1)', filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(1541%) hue-rotate(193deg) brightness(98%) contrast(101%)' }}
                cursor="pointer"
                width="60px"
              >
                <Image 
                  src={tech.file} 
                  alt={`${tech.name} icon`}
                  height="40px"
                  width="40px"
                  objectFit="contain"
                  mx="auto"
                  filter="grayscale(30%)"
                  _hover={{ filter: 'none' }}
                />
                <Text fontSize="sm" mt={2} color="gray.600">
                  {tech.name}
                </Text>
              </Box>
            ))}
          </Flex>
          <VStack align="flex-start" spacing={3} mt={8}>
            {[
              "Created responsive and intuitive front end design with React",
              "Developed enterprise web applications using Grails MVC framework with GORM for robust domain modeling and Groovy-powered controllers", 
              "Built RESTful Grails backends serving React/Vue frontends, implementing service layers and transactional business logic",
              "Building production-ready features"
            ].map((item) => (
              <HStack key={item} spacing={3}>
                <Icon as={FiCircle} boxSize={3} color="blue.500" />
                <Text>{item}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>

      </Flex>
    </Box>
  );
}
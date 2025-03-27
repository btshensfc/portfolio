import React from 'react';
import { Box, Flex, Heading, Image, HStack, VStack, Text, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiCircle } from 'react-icons/fi';
export default function EducationExperiences() {
  const navigate = useNavigate();

  return (
    <Box 
      as="section"
      width="100%"
      overflowX="hidden"
      id="educationExperience"
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
            Education
        </Heading>
        <Box h="1px" bg="gray.200" my={4} />

        <HStack align="flex-start" spacing={8}>
            {/* Image on the left */}
            <Box>
            <Image
                src="USF.png"
                alt="University of San Francisco"
                height="350px"
                width="350px"
                objectFit="contain"
            />
            </Box>
            
            {/* Text content on the right */}
            <VStack align="flex-start" spacing={4}>
            <Heading as="h5" size="xl">
                University of San Francisco
            </Heading>

            <Box>
                <Text fontSize="lg" fontWeight="semibold">
                    Bachelor's of Science in Computer Science
                </Text>
                <Text fontSize="md">
                    August 2018 - May 2024
                </Text>
                <HStack spacing={3}>
                    <Icon as={FiCircle} boxSize={3} color="blue.500" />
                    <Text>Studied Web Security, Operating Systems, and other web-based engineering subjects</Text>
              </HStack>
              <HStack spacing={3}>
                    <Icon as={FiCircle} boxSize={3} color="blue.500" />
                    <Text>Participated in group coding projects, honing my skills for the workpace</Text>
              </HStack>
            </Box>
            </VStack>
        </HStack>

        <Heading as="h1" fontSize={["6xl", "6xl"]} fontWeight="bold" mb={10} pt="8">
            Work
        </Heading>

        <Box h="1px" bg="gray.200" my={4} />
        <HStack align="flex-start" spacing={8}>
            {/* Image on the left */}
            <Box>
            <Image
                src="WS.png"
                alt="Wayne State C&IT"
                height="350px"
                width="350px"
                objectFit="contain"
                pr="5"
            />
            </Box>
            
            {/* Text content on the right */}
            <VStack align="flex-start" spacing={4}>
            <Heading as="h5" size="xl">
                Wayne State C&IT
            </Heading>

            <Box>
                <Text fontSize="lg" fontWeight="semibold">
                    Software Developer I
                </Text>
                <Text fontSize="md">
                    August 2024 - Janurary 2025
                </Text>
                <HStack spacing={3}>
                    <Icon as={FiCircle} boxSize={3} color="blue.500" />
                    <Text>Added several new features that drastically improved student QOL on the University's flagship application for tracking the academic trajectory of students.</Text>
              </HStack>
              <HStack spacing={3}>
                    <Icon as={FiCircle} boxSize={3} color="blue.500" />
                    <Text>Revamped legacy PhP systems to fit modern standards with new features based on customer feedback</Text>
              </HStack>
            </Box>
            </VStack>
        </HStack>
        <HStack align="flex-start" spacing={8}>
            {/* Image on the left */}
            <Box>
            <Image
                src="tq.ico"
                alt="Teachque"
                height="350px"
                width="350px"
                objectFit="contain"
                pr="5"
            />
            </Box>
            
            {/* Text content on the right */}
            <VStack align="flex-start" spacing={4}>
            <Heading as="h5" size="xl">
                Teachque
            </Heading>

            <Box>
                <Text fontSize="lg" fontWeight="semibold">
                    Founding Engineer
                </Text>
                <Text fontSize="md">
                    March 2025 - Current
                </Text>
                <HStack spacing={3}>
                    <Icon as={FiCircle} boxSize={3} color="blue.500" />
                    <Text>Architected a full-stack e-commerce platform (Grails/MySQL) with Stripe payments</Text>
              </HStack>
              <HStack spacing={3}>
                    <Icon as={FiCircle} boxSize={3} color="blue.500" />
                    <Text>Deployed secure AWS cloud infrastructure (EC2/S3/HTTPS) for scalability.</Text>
              </HStack>
              <HStack spacing={3}>
                    <Icon as={FiCircle} boxSize={3} color="blue.500" />
                    <Text>Designed intuitive UI/UX for seamless product browsing and checkout.</Text>
              </HStack>

            </Box>
            </VStack>
        </HStack>



        </Box>
        {/* Image/Illustration - Right Side */}
        <Box 
          flex={1}
          width="100%"
          maxW={{ md: "50%" }}
          pl={{ md: 8 }}
          mt={[8, 0]}  // Added top margin on mobile
        >
            <Image
                src="undraw_building-blocks_h5jb.svg"
                alt="edu/work image"
                objectFit="contain"
            />
        </Box>
      </Flex>
    </Box>
  );
}
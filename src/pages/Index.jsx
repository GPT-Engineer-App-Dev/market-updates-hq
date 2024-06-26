import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#f3f2ef">
      {/* Header */}
      <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">World</Link>
            <Link href="#">Business</Link>
            <Link href="#">Tech</Link>
            <Link href="#">Markets</Link>
            <Link href="#">Opinion</Link>
            <Link href="#">Life & Arts</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Top Stories */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Top Stories</Heading>
            <Divider />
            <VStack spacing={4} align="stretch">
              <Box>
                <Heading as="h3" size="sm">Top Story 1</Heading>
                <Text>Summary of the top story 1...</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm">Top Story 2</Heading>
                <Text>Summary of the top story 2...</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm">Top Story 3</Heading>
                <Text>Summary of the top story 3...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Latest News */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Latest News</Heading>
            <Divider />
            <VStack spacing={4} align="stretch">
              <Box>
                <Heading as="h3" size="sm">Latest News 1</Heading>
                <Text>Summary of the latest news 1...</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm">Latest News 2</Heading>
                <Text>Summary of the latest news 2...</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm">Latest News 3</Heading>
                <Text>Summary of the latest news 3...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Featured Articles */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Featured Articles</Heading>
            <Divider />
            <VStack spacing={4} align="stretch">
              <Box>
                <Heading as="h3" size="sm">Featured Article 1</Heading>
                <Text>Summary of the featured article 1...</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm">Featured Article 2</Heading>
                <Text>Summary of the featured article 2...</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm">Featured Article 3</Heading>
                <Text>Summary of the featured article 3...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200">
        <Flex justify="space-between" align="center">
          <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
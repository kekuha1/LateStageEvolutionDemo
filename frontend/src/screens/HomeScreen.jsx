import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { GiCaveman } from "react-icons/gi";
import { Link as ReactLink } from "react-router-dom";

const HomeScreen = () => (
  <Box
    maxW="8xl"
    mx="auto"
    px={{ base: "0", lg: "12" }}
    py={{ base: "0", lg: "12" }}
    minH="6xl"
  >
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      spacing={{ base: "0", lg: "20" }}
    >
      <Box
        width={{ lg: "sm" }}
        transform={{ base: "translateY(-50%)", lg: "none" }}
        bg={{
          base: useColorModeValue("blue.50", "blue.900"),
          lg: "transparent",
        }}
        mx={{ base: "6", md: "8", lg: "0" }}
        px={{ base: "6", md: "8", lg: "0" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack spacing={{ base: "8", lg: "10" }}>
          <Stack spacing={{ base: "2", lg: "4" }}>
            <Flex>
              <Icon as={GiCaveman} h="12" w="12" color="blue.500" />
              <Text fontSize="4xl" fontWeight="bold">
                Late Stage Evolution
              </Text>
            </Flex>

            <Heading
              fontWeight="normal"
              size={{ base: "md", md: "lg" }}
              color="gray.400"
            >
              <span style={{ fontWeight: "bold" }}>
                Welcome to Late Stage Evolution
              </span>{" "}
              a thought-provoking blog where we explore the ongoing
              transformations in our rapidly evolving world. Delve into
              discussions on technology, culture, science, and the myriad ways
              our society is advancing towards its next phase. Join us as we
              navigate the complexities of late-stage evolution and ponder the
              future that awaits us.
            </Heading>

            <Heading
              fontWeight="normal"
              size={{ base: "md", md: "lg" }}
              color="gray.400"
            >
              Let's get started...
            </Heading>
          </Stack>
          <HStack>
            <Link
              as={ReactLink}
              to="/blog/all"
              color="blue.500"
              fontWeight="bold"
              fontSize="xl"
            >
              Explore our Blog
            </Link>
            <Icon color="blue.500" as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="/images/evolution.jpg"
          alt="Lovely Image"
          maxH="1000px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
      </Flex>
    </Stack>
  </Box>
);

export default HomeScreen;

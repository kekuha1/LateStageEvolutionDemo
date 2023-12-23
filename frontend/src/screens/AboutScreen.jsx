import React from "react";
import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const AboutScreen = () => {
  return (
    <Box
      maxW="8xl"
      mx="auto"
      px={{ base: "0", lg: "12" }}
      py={{ base: "0", lg: "12" }}
      minH="6xl"
    >
      <VStack spacing={4} align="center">
        <Heading
          fontWeight="normal"
          size={{ base: "md", md: "lg" }}
          color="gray.400"
        >
          <span style={{ fontWeight: "bold" }}>
            Welcome to Late Stage Evolution!
          </span>{" "}
        </Heading>
        <Text>
          a blog that serves as a sanctuary for introspection and growth in the
          ever-evolving journey of life. In this digital haven, we explore the
          intricate tapestry of personal topics, delving deep into the realms of
          mental and physical health, dispensing invaluable career advice, and
          dissecting the nuances of everyday occurrences.
        </Text>
        <Text>
          Embark on a transformative exploration of your well-being as we embark
          on a profound journey through the intricacies of mental and physical
          health. "Late Stage Evolution" is not just a blog; it's a
          compassionate guide, offering insights, coping mechanisms, and
          narratives that shed light on the labyrinth of the human mind and
          body. From personal anecdotes to expert perspectives, we foster a
          mindset that embraces vulnerability, fostering understanding and
          resilience.
        </Text>
        <Text>
          In the dynamic landscape of the modern career, "Late Stage Evolution"
          stands as a beacon of guidance. Whether you're a seasoned
          professional, a budding entrepreneur, or someone in search of purpose,
          our blog is your compass. Uncover career advice that transcends the
          mundane, steering you towards fulfillment and success. From strategic
          planning to embracing innovation, we decode the secrets to a
          meaningful professional journey.
        </Text>
        <Text>
          Whether you're seeking inspiration, guidance, or simply a moment of
          reflection, "Late Stage Evolution" invites you to embark on a journey
          of self-discovery and growth. Our blog transcends the digital realm to
          become a companion in your late-stage evolution, offering a tapestry
          of insights, advice, and stories that resonate with the depth and
          complexity of the human experience. Welcome to a community where
          personal evolution is not just a concept but a shared reality.
        </Text>
        <Image
          src="/images/struggle.jpg"
          alt="Struggle"
          maxH="750px"
          maxW="750px"
          objectFit="cover"
          flex="1"
        />
      </VStack>
    </Box>
  );
};

export default AboutScreen;

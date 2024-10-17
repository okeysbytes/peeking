import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Card = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the
    // instructions. You should be able to implement the
    // component with the elements imported above.
    // Feel free to import other UI components from
    // Chakra UI if you wish to.
  return (
    <VStack
      w="100%"
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      align="stretch"
      spacing={4}
      _hover={{
        boxShadow: "lg",
        textDecoration: "none",
      }}
    >
      <Image src={imageSrc} alt={title} />
      <VStack align="start" px={4} py={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>
      <HStack px={4} pb={4} justify="space-between" w="20">
        <Text fontSize="sm" color="gray.500">
          Read More
        </Text>
        {/* <FontAwesomeIcon icon={faArrowRight} color="gray" /> */}
      </HStack>
    </VStack>
  );
};
export default Card;
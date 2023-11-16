import { Heading, HStack, Image, Text, VStack, withDefaultSize } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Card.css';

const Card = ({ title, description, imageSrc }) => {
  return (
     <VStack as="h5" className="bg">
      <Image src={imageSrc} className="image" />
      <div className="title">
     <Heading as="h1" size="md">{title}</Heading>
    <Text fontSize="lg" fontWeight="light"  className="text">{description}</Text>
    </div>
    <HStack className="more">
    <Text fontSize="lg">See more</Text>
    <FontAwesomeIcon icon={faArrowRight} size="1x"/>
    </HStack>
    
    </VStack>
  );
};

export default Card;

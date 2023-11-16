import React, { useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const headerRef = useRef();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      const scrollDirection = scrollY > prevScrollY ? "down" : "up";
      const headerElement = headerRef.current;

      if (scrollDirection === "down") {
        headerElement.style.transform = "translateY(-200px)";
      } else {
        headerElement.style.transform = "translateY(0)";
      }

      setPrevScrollY(scrollY);
      setIsScrollingUp(scrollDirection === "up");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto"  ref={headerRef} transitionProperty="transform" transitionDuration="0.3s" transitionTimingFunction="ease-in-out" className={isScrollingUp ? "visible" : "hidden"}>
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
             <HStack>
            <a href="mailto: hello@example.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
            <a href="https://github.com">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://medium.com">
              <FontAwesomeIcon icon={faMedium} size="2x"/>
            </a>
            <a href="https://stackoverflow.com">
              <FontAwesomeIcon icon={faStackOverflow} size="2x"/>
            </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              
                <a href="projects-section">Projects</a> 
              
              
                 
             
              <a href="contactme-section">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Language as WebsiteIcon,
  Email,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { portfolioData } from '@/lib/data';

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const controls = useAnimation();
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const text = `Hi, I'm ${portfolioData.name}`;
    let index = 0;
    
    const typeWriter = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      } else {
        setIsTyping(false);
      }
    };

    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    {
      icon: <LinkedIn />,
      url: portfolioData.contact.linkedin,
      label: 'LinkedIn',
      color: '#0077B5',
    },
    {
      icon: <GitHub />,
      url: portfolioData.contact.github,
      label: 'GitHub',
      color: '#333',
    },
    {
      icon: <WebsiteIcon />,
      url: portfolioData.contact.portfolio,
      label: 'Portfolio',
      color: '#FF5722',
    },
    {
      icon: <Email />,
      url: `mailto:${portfolioData.contact.email}`,
      label: 'Email',
      color: '#D14836',
    },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 1000 1000\\"><polygon fill=\\"%23ffffff08\\" points=\\"0,1000 1000,0 1000,1000\\"/></svg>")',
          backgroundSize: 'cover',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack spacing={4} alignItems="flex-start" maxWidth="800px">
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ marginLeft: '2px' }}
                  >
                    |
                  </motion.span>
                )}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 600,
                  color: '#e5e7eb',
                  mb: 1,
                }}
              >
                {portfolioData.title}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: '#d1d5db',
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                {portfolioData.subtitle}
                <br />
                {portfolioData.description}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: 4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => scrollToSection('contact')}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)',
                      },
                    }}
                  >
                    Get In Touch
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection('projects')}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: 'primary.main',
                        borderColor: 'white',
                      },
                    }}
                  >
                    View My Work
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack direction="row" spacing={2}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      component="a"
                      href={social.url}
                      target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={social.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <IconButton
            onClick={() => scrollToSection('about')}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <KeyboardArrowDown sx={{ fontSize: 40 }} />
          </IconButton>
        </motion.div>
      </motion.div>

      {/* Background particles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              position: 'absolute',
              width: 4 + Math.random() * 4,
              height: 4 + Math.random() * 4,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
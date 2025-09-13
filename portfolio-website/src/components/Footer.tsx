'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Language as WebsiteIcon,
  Email,
  Favorite,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';

export default function Footer() {
  const theme = useTheme();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        color: 'white',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 1000 1000\\"><polygon fill=\\"%23ffffff03\\" points=\\"0,0 1000,1000 0,1000\\"/></svg>")',
          backgroundSize: 'cover',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                cursor: 'pointer',
              }}
              onClick={scrollToTop}
            >
              {portfolioData.name}
            </Typography>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Stack direction="row" spacing={2}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                        borderColor: social.color,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </motion.div>

          {/* Divider */}
          <Divider
            sx={{
              width: '100%',
              maxWidth: 400,
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
          />

          {/* Copyright and Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Stack spacing={2} alignItems="center" textAlign="center">
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                © {new Date().getFullYear()} {portfolioData.name}. Made with
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Favorite sx={{ color: '#ef4444', fontSize: 16 }} />
                </motion.div>
                and Next.js
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontStyle: 'italic',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                }}
              >
                "From lines of code to seamless user experiences."
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  mt: 1,
                }}
              >
                Built with Next.js, Material UI, and Framer Motion
              </Typography>
            </Stack>
          </motion.div>

          {/* Back to top hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                '&:hover': {
                  color: 'rgba(255, 255, 255, 0.8)',
                },
              }}
              onClick={scrollToTop}
            >
              ↑ Back to top
            </Typography>
          </motion.div>
        </Stack>
      </Container>

      {/* Floating particles */}
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 200,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 200,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              position: 'absolute',
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
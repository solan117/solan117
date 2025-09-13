'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Bolt,
  Settings,
  Rocket,
  TrendingUp,
  Code,
  Speed,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/lib/data';

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, delay }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const target = parseInt(number);
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayNumber(target);
          clearInterval(timer);
        } else {
          setDisplayNumber(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, number, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Card
        sx={{
          textAlign: 'center',
          p: 3,
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          {displayNumber}+
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {label}
        </Typography>
      </Card>
    </motion.div>
  );
};

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: <Bolt />,
      text: 'Passionate about performance, clean code, and user-centered design',
    },
    {
      icon: <Settings />,
      text: 'Exploring System Design, distributed architectures, and modern web tech',
    },
    {
      icon: <Rocket />,
      text: '2025 Goal: Contribute to open source and level up skills continuously',
    },
  ];

  const stats = [
    { number: '4', label: 'Years Experience' },
    { number: '20', label: 'Technologies' },
    { number: '10', label: 'Projects Completed' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.6,
      },
    },
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)',
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  borderRadius: 2,
                },
              }}
            >
              About Me
            </Typography>
          </motion.div>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={8}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.8,
                  }}
                >
                  {portfolioData.about}
                </Typography>
              </motion.div>

              <Stack spacing={2} sx={{ mt: 4 }}>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <Card
                      sx={{
                        p: 2,
                        background: 'white',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                        '&:hover': {
                          boxShadow: '0 8px 30px rgba(37, 99, 235, 0.15)',
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(37, 99, 235, 0.1)',
                          }}
                        >
                          {highlight.icon}
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 500, flex: 1 }}
                        >
                          {highlight.text}
                        </Typography>
                      </Stack>
                    </Card>
                  </motion.div>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Stack spacing={2}>
                {stats.map((stat, index) => (
                  <StatItem
                    key={stat.label}
                    number={stat.number}
                    label={stat.label}
                    delay={index * 0.2}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>

          {/* Additional decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 6,
                gap: 4,
                flexWrap: 'wrap',
              }}
            >
              {[
                { icon: <Code />, label: 'Clean Code' },
                { icon: <Speed />, label: 'Performance' },
                { icon: <TrendingUp />, label: 'Scalability' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(37, 99, 235, 0.05)',
                      minWidth: 100,
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 600, textAlign: 'center' }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
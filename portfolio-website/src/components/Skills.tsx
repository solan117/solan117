'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Code,
  Storage,
  Cloud,
  Build,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/lib/data';

interface SkillCardProps {
  category: string;
  skills: Array<{ name: string; level: number }>;
  icon: React.ReactNode;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills, icon, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
    >
      <Card
        sx={{
          height: '100%',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid',
          borderColor: 'divider',
          '&:hover': {
            borderColor: 'primary.main',
            boxShadow: '0 15px 40px rgba(37, 99, 235, 0.15)',
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
            <Box
              sx={{
                color: 'primary.main',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderRadius: '50%',
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {category}
            </Typography>
          </Stack>

          <Stack spacing={2}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: delay + index * 0.1 }}
              >
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 1 }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {skill.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 600, color: 'primary.main' }}
                    >
                      {skill.level}%
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={isInView ? skill.level : 0}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                      },
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillChip: React.FC<{ skill: string; delay: number }> = ({ skill, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <Chip
        label={skill}
        sx={{
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          color: 'primary.main',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
        }}
      />
    </motion.div>
  );
};

export default function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Group skills by category
  const skillCategories = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push({ name: skill.name, level: skill.level });
    return acc;
  }, {} as Record<string, Array<{ name: string; level: number }>>);

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Code />,
    Backend: <Storage />,
    Cloud: <Cloud />,
    Tools: <Build />,
  };

  const allSkills = portfolioData.skills.map(skill => skill.name);

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%)',
          clipPath: 'polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
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
            Tech Stack & Expertise
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
          >
            Technologies I work with to build scalable applications
          </Typography>
        </motion.div>

        {/* Skill Cards Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <Grid item xs={12} md={6} lg={3} key={category}>
              <SkillCard
                category={category}
                skills={skills}
                icon={categoryIcons[category] || <Code />}
                delay={index * 0.2}
              />
            </Grid>
          ))}
        </Grid>

        {/* All Skills as Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 3, fontWeight: 600 }}
          >
            All Technologies
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'center',
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            {allSkills.map((skill, index) => (
              <SkillChip
                key={skill}
                skill={skill}
                delay={1 + index * 0.05}
              />
            ))}
          </Box>
        </motion.div>

        {/* Interactive Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10%',
            transform: 'translateY(-50%)',
            opacity: 0.05,
            zIndex: 0,
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Code sx={{ fontSize: 200 }} />
          </motion.div>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            opacity: 0.05,
            zIndex: 0,
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Cloud sx={{ fontSize: 150 }} />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
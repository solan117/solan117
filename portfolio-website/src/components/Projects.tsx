'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Close,
  CheckCircle,
} from '@mui/icons-material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onViewDetails }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid',
          borderColor: 'divider',
          cursor: 'pointer',
          '&:hover': {
            borderColor: 'primary.main',
            boxShadow: '0 15px 40px rgba(37, 99, 235, 0.15)',
          },
        }}
        onClick={() => onViewDetails(project)}
      >
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="250"
            image={project.image}
            alt={project.title}
            sx={{
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(124, 58, 237, 0.8) 100%)',
              opacity: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            <Stack direction="row" spacing={2}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    backgroundColor: 'white',
                    color: 'text.primary',
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    backgroundColor: 'white',
                    color: 'text.primary',
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                >
                  <Launch />
                </IconButton>
              </motion.div>
            </Stack>
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'text.primary',
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 3,
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </Typography>

          <Box sx={{ mt: 'auto' }}>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {project.technologies.slice(0, 4).map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: 'primary.main',
                    fontWeight: 500,
                  }}
                />
              ))}
              {project.technologies.length > 4 && (
                <Chip
                  label={`+${project.technologies.length - 4}`}
                  size="small"
                  sx={{
                    backgroundColor: 'grey.100',
                    color: 'text.secondary',
                  }}
                />
              )}
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, open, onClose }) => {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: '90vh',
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {project.title}
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          {project.description}
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Key Features
        </Typography>
        <List sx={{ mb: 3 }}>
          {project.features.map((feature, index) => (
            <ListItem key={index} sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircle sx={{ color: 'primary.main', fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  variant: 'body2',
                  sx: { lineHeight: 1.6 },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Technologies Used
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                color: 'primary.main',
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<Launch />}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ flex: 1 }}
          >
            Live Demo
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ flex: 1 }}
          >
            Source Code
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <Box
      id="projects"
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
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
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
            Featured Projects
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
          >
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            modern web technologies, and user experience design.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {portfolioData.projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <ProjectCard
                project={project}
                index={index}
                onViewDetails={handleViewDetails}
              />
            </Grid>
          ))}
        </Grid>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Want to see more?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              Check out my GitHub for more projects and contributions
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<GitHub />}
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                View GitHub Profile
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      <ProjectDialog
        project={selectedProject}
        open={dialogOpen}
        onClose={handleCloseDialog}
      />
    </Box>
  );
}
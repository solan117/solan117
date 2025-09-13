'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Alert,
  Snackbar,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  GitHub,
  Language as WebsiteIcon,
  Send,
  LocationOn,
  Phone,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/lib/data';

interface ContactLinkProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay: number;
}

const ContactLink: React.FC<ContactLinkProps> = ({ icon, label, value, href, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 10 }}
    >
      <Card
        component="a"
        href={href}
        target={href.startsWith('mailto:') ? '_self' : '_blank'}
        rel={href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'inherit',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid',
          borderColor: 'divider',
          '&:hover': {
            borderColor: 'primary.main',
            boxShadow: '0 8px 30px rgba(37, 99, 235, 0.15)',
            transform: 'translateX(5px)',
          },
        }}
      >
        <Box
          sx={{
            color: 'primary.main',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderRadius: '50%',
            p: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
          }}
        >
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
            {label}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {value}
          </Typography>
        </Box>
      </Card>
    </motion.div>
  );
};

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        open: true,
        message: 'Please fill in all fields.',
        severity: 'error',
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setNotification({
        open: true,
        message: 'Please enter a valid email address.',
        severity: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (in a real app, you'd send to a server)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setNotification({
        open: true,
        message: "Message sent successfully! I'll get back to you soon.",
        severity: 'success',
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setNotification({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: <Email />,
      label: 'Email',
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: portfolioData.contact.linkedin,
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      value: 'View my code',
      href: portfolioData.contact.github,
    },
    {
      icon: <WebsiteIcon />,
      label: 'Portfolio',
      value: 'Visit my website',
      href: portfolioData.contact.portfolio,
    },
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
      id="contact"
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
              Let's Connect & Collaborate!
            </Typography>

            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 6, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
            >
              Ready to Build Something Amazing Together? I'm always interested in hearing 
              about new opportunities, interesting projects, and ways to collaborate.
            </Typography>
          </motion.div>

          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{ mb: 3, fontWeight: 600 }}
                >
                  Get in Touch
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}
                >
                  Whether you have a project in mind, want to collaborate, or just want to 
                  say hello, I'd love to hear from you. Let's create something amazing together!
                </Typography>

                <Stack spacing={2}>
                  {contactLinks.map((link, index) => (
                    <ContactLink
                      key={link.label}
                      {...link}
                      delay={index * 0.1}
                    />
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    p: 3,
                    background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}
                  >
                    Send a Message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />

                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />

                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          disabled={isSubmitting}
                          startIcon={<Send />}
                          sx={{
                            py: 1.5,
                            fontSize: '1.1rem',
                            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                              boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)',
                            },
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </motion.div>
                    </Stack>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Additional info */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Open to Opportunities
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                <strong>Full-Stack Developer</strong> • <strong>Backend Developer</strong> • <strong>Frontend Developer</strong>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontStyle: 'italic',
                  color: 'primary.main',
                  fontWeight: 500,
                }}
              >
                "From lines of code to seamless user experiences."
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={() => setNotification({ ...notification, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setNotification({ ...notification, open: false })}
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
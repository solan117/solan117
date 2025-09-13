'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} sx={{ px: 3 }}>
            <Button
              fullWidth
              onClick={() => scrollToSection(item.href.substring(1))}
              sx={{
                justifyContent: 'flex-start',
                color: activeSection === item.href.substring(1) ? 'primary.main' : 'text.primary',
                fontWeight: activeSection === item.href.substring(1) ? 600 : 400,
              }}
            >
              <ListItemText primary={item.label} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    cursor: 'pointer',
                  }}
                  onClick={() => scrollToSection('home')}
                >
                  Karan Solanki
                </Typography>
              </motion.div>

              {!isMobile ? (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Button
                        onClick={() => scrollToSection(item.href.substring(1))}
                        sx={{
                          color: isScrolled ? 'text.primary' : 'white',
                          fontWeight: activeSection === item.href.substring(1) ? 600 : 400,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: activeSection === item.href.substring(1) ? '100%' : '0%',
                            height: 2,
                            backgroundColor: 'primary.main',
                            transition: 'width 0.3s ease',
                          },
                          '&:hover::after': {
                            width: '100%',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: isScrolled ? 'text.primary' : 'white' }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 250,
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
}
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb',
      light: '#3b82f6',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c3aed',
      light: '#8b5cf6',
      dark: '#6d28d9',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '2rem',
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      '@media (max-width:768px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.8,
      color: '#4b5563',
      '@media (max-width:768px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#6b7280',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '12px 30px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          fontWeight: 500,
          '&:hover': {
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            '&:hover fieldset': {
              borderColor: '#2563eb',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#2563eb',
              boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
            },
          },
        },
      },
    },
  },
});
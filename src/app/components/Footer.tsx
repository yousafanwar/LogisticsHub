import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import { LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333333', padding: '20px', color: 'white' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">Address: 1234 Elm Street, Springfield, IL 62704, USA</Typography>
          <Typography variant="body1">Phone: (555) 123-4567</Typography>
          <Typography variant="body1">Email: example@email.com</Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Quick links</Typography>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  color: '#CCCCCC',
                },
              }}
              variant="body1"
            >
              Home
            </Typography>
          </Link>
          <Link href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  color: '#CCCCCC',
                },
              }}
              variant="body1"
            >
              Services
            </Typography>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  color: '#CCCCCC',
                },
              }}
              variant="body1"
            >
              Contact us
            </Typography>
          </Link>
          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  color: '#CCCCCC',
                },
              }}
              variant="body1"
            >
              About us
            </Typography>
          </Link>
          <Link href="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  color: '#CCCCCC',
                },
              }}
              variant="body1"
            >
              FAQ
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <LinkedIn sx={{ marginRight: 1 }} />
            <Twitter sx={{ marginRight: 1 }} />
            <Facebook />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

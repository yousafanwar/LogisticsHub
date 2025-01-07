import styles from './Home.module.css';
import { Box, Typography, Button, List, ListItem, Card, CardContent } from '@mui/material';
import data from './homePageData';
import type { Metadata } from "next";
import {ArrowForward} from '@mui/icons-material';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Logistics Hub | Premier Truck Dispatching Services",
  description: "Discover top-tier truck dispatching services at Logistics Hub. Your trusted partner in efficient freight logistics.",
};

const Home = () => {

  return (
    <Box>
      <Box className={`${styles.hero}`}>
        <Box gap={5} className={`${styles.overlay}`}>
          <Typography variant='h1'>Reliable Truck Dispatching Services Across the USA</Typography>
          <List>
            <ListItem>Dispatch services for dry vans, reefers, flatbeds, hotshots, and box trucks.</ListItem>
            <ListItem>Access to premium freight and real-time load matching.</ListItem>
            <ListItem>24/7 dispatch support from experienced professionals.</ListItem>
          </List>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Link href={'/contact'}>
          <Button sx={{backgroundColor: 'white', color: 'black', ":hover": {backgroundColor: 'black', color: 'white'} }}>Get Started Now <ArrowForward /></Button>
          </Link>
          </Box>
        </Box>
      </Box>
      <Card className={styles.cardContainer}>
        {data.map((item, index) => {
          return <CardContent key={index} className={styles.card}>
            <Typography variant='h5' className={styles.cardTitle}>{item.title}</Typography>
            <Typography variant='body1' className={styles.cardDescription}>{item.description}</Typography>
            <Link href={'/contact'}>
            <Button fullWidth className={styles.btn}>Learn More</Button>
            </Link>
          </CardContent>
        })}
      </Card>
    </Box>

  );
}

export default Home;
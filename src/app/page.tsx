import styles from './Home.module.css';
import { Box, Typography, Button, List, ListItem, Card, CardContent } from '@mui/material';

const Home = () => {

  const cardItemdata = [
    {
      title: "Dispatch",
      description: "Efficient load planning and dispatching to maximize your fleet productivity and revenue."
    },
    {
      title: "Safety",
      description: "Ensure your fleet meets all safety regulations and standards to avoid fines and downtime."
    },
    {
      title: "LogBook",
      description: "Maintain accurate, up-to-date driver logbooks to comply with HOS regulations and improve safety."
    },
    {
      title: "IFTA",
      description: "Simplify fuel tax reporting with our IFTA management services to stay compliant."
    },
    {
      title: "Accounting",
      description: "Financial management tailored for trucking business, including invoices, collections, and payroll."
    },
    {
      title: "Administration",
      description: "Streamlined administrative support to handle paperwork, permits, and day-to-day operations."
    },
    {
      title: "Hiring drivers",
      description: "Professional drivers recruitment services to find qualified, reliable drivers for your fleet"
    },
    {
      title: "MC Setup",
      description: "Set up with brokers to access a larger pool of loads and grow your business"
    }
  ]

  return (
    <Box>
      {/* <Navbar /> */}
      <Box className={`${styles.hero}`}>
        <Box gap={5} className={`${styles.overlay}`}>
          <Typography variant='h1'>Reliable Truck Dispatching Services Across the USA</Typography>
          <List>
            <ListItem>Dispatch services for dry vans, reefers, flatbeds, hotshots, and box trucks.</ListItem>
            <ListItem>Access to premium freight and real-time load matching.</ListItem>
            <ListItem>24/7 dispatch support from experienced professionals.</ListItem>
          </List>
        </Box>
      </Box>
      <Card className={styles.cardContainer}>
        {cardItemdata.map((item, index) => {
          return <CardContent key={index} className={styles.card}>
            <Typography variant='h5' className={styles.cardTitle}>{item.title}</Typography>
            <Typography variant='body1' className={styles.cardDescription}>{item.description}</Typography>
            <Button fullWidth className={styles.btn}>Learn More</Button>
          </CardContent>
        })}
      </Card>
    </Box>

  );
}

export default Home;
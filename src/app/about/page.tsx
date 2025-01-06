import { List, ListItem, Input, Typography, Box, Select, MenuItem, Button, FormHelperText, Alert } from '@mui/material';
import styles from './About.module.css';
import Check from '@mui/icons-material/Check'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Logistics Hub - Your Trusted Dispatch Partner",
    description:  "Learn about Logistics Hub, your trusted partner in efficient truck dispatching and logistics solutions.",
  };

const about = () => {

    return (
        <Box>
            <Box className={styles.about}>
                <Typography variant='h1' className={styles.overlay}>Who We Are</Typography>
                <Typography variant='h5' className={styles.overlay}>At Logistics Hub, we are dedicated to revolutionizing the truck dispatch industry by providing reliable, efficient, and customer-focused dispatch services. With years of experience and a deep understanding of the freight industry, our team works tirelessly to match truckers with the best loads to ensure timely deliveries. Our mission is to simplify logistics and help drivers succeed, providing them with 24/7 support and making the dispatch process smooth and hassle-free.</Typography>
            </Box>
            <Box gap={2} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Typography variant='h3'>Our Values</Typography>
                <Typography variant='body1'>At Logistics Hub, we operate with a set of core values that guide everything we do:</Typography>
                <List>
            <ListItem><Check /> 24/7 Dispatch Support: We understand the importance of always being available when you need us. Our dispatch team is here for you at any time of the day or night.</ListItem>
            <ListItem><Check /> Fast Load Matching: We leverage advanced technology and industry expertise to match you with loads quickly, ensuring minimal downtime and maximized revenue for truckers.</ListItem>
            <ListItem><Check /> Customer Satisfaction: We are committed to providing exceptional service that meets the unique needs of every customer. Our goal is to exceed expectations and build long-lasting relationships with both truckers and freight brokers.</ListItem>
          </List>

            </Box>
        </Box>
    )
}

export default about;
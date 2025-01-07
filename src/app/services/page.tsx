  import {Box, Grid, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import Image from 'next/image';
  import styles from './Services.module.css';
  import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: "Our Services | Truck Dispatching & Logistics Solutions",
    description: "Explore our comprehensive truck dispatching and logistics solutions tailored to your needs.",
  };

  const services = () => {

      return(
          <div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant='h4' component="span">Dry van</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box gap={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Box>
                      <Image 
                          src={'/dryvan.webp'}
                          layout="responsive"
                          width={300} 
                          height={250}
                          className={styles.responsiveImage}
                          alt='Dry Van'
                      />
                  </Box>
              <Box>
              <Typography variant='h5'>Reliable freight dispatching for dry vans.</Typography>
              <Typography variant='body1'>
                We provide efficient dispatching services for dry vans, ensuring timely and secure transportation of general cargo across various routes.
              </Typography>              </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant='h4' component="span">Reefers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box gap={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Box>
                      <Image 
                          src={'/reefer-truck.jpg'}
                          layout="responsive"
                          width={300} 
                          height={250}
                          className={styles.responsiveImage}
                          alt='Dry Van'
                      />
                  </Box>
              <Box>
              <Typography variant='h5'>Temperature-sensitive freight dispatching services.</Typography>
              <Typography variant='body1'>
                Our reefer dispatch services specialize in transporting perishable goods, ensuring they remain at optimal temperatures throughout the journey.
              </Typography>
              </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant='h4' component="span">Flatbeds</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box gap={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Box>
                      <Image 
                          src={'/flatbed-truck.jpg'}
                          layout="responsive"
                          width={300} 
                          height={250}
                          className={styles.responsiveImage}
                          alt='Dry Van'
                      />
                  </Box>
              <Box>
              <Typography variant='h5'>Efficient dispatch services for flatbed trucks.</Typography>
              <Typography variant='body1'>
                We handle oversized and heavy loads with our flatbed dispatching services, ensuring safe and efficient transportation.
              </Typography>
              </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant='h4' component="span">Box Trucks</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box gap={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Box>
                      <Image 
                          src={'/BoxTrucks.webp'}
                          layout="responsive"
                          width={300} 
                          height={250}
                          className={styles.responsiveImage}
                          alt='Hotshots'
                      />
                  </Box>
              <Box>
              <Typography variant='h5'>Dedicated dispatching for box trucks.</Typography>
              <Typography variant='body1'>
                Our box truck dispatch services are tailored to meet regional and long-haul needs, ensuring consistent load availability and support.
              </Typography>
              </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant='h4' component="span">Hot shots</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box gap={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Box>
                      <Image 
                          src={'/hotshot.webp'}
                          layout="responsive"
                          width={300} 
                          height={250}
                          className={styles.responsiveImage}
                          alt='Hotshots'
                      />
                  </Box>
              <Box>
              <Typography variant='caption'>Fast dispatch services for hotshot trucks.</Typography>
              <Typography variant='body1'>
                We provide rapid dispatching services for hotshot trucks, perfect for urgent and time-sensitive deliveries.
              </Typography>
              </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

        </div>
      )
  }

  export default services;
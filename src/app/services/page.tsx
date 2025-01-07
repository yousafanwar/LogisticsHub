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
              <Typography variant='body1'>Our dry van services offer secure and efficient transportation for general freight. We ensure your goods are delivered safely and on time. Ideal for various types of cargo, our dry vans are a reliable choice for your logistics needs. We focus on maintaining high standards of safety and efficiency. Let us handle your freight with care and precision..</Typography>

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
              We specialize in temperature-controlled freight with our reefer services. Perfect for perishable goods, we ensure your cargo reaches its destination in optimal condition. Our team handles your temperature-sensitive shipments with utmost care. Count on us for reliable and safe reefer dispatching. We prioritize maintaining the integrity of your goods throughout transit.
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
              Our flatbed dispatching services are tailored for oversized and heavy cargo. We provide safe and reliable transport solutions for complex freight needs. With specialized equipment, we can handle your unique shipping requirements. Trust us to deliver your oversized loads securely and efficiently. Our team is experienced in managing flatbed logistics.
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
              Versatile and efficient, our box truck services are ideal for small to medium-sized freight. We offer quick deliveries within urban areas, ensuring your cargo arrives on time. Our box trucks are perfect for businesses requiring flexible and reliable transportation. We adapt to your specific logistics needs with ease. Experience seamless box truck dispatching with us.
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
              <Typography variant='h4'>Fast dispatch services for hotshot trucks.</Typography>
              <Typography variant='body1'>
              For urgent deliveries, our hot shot services provide fast and efficient transport. Ideal for smaller loads needing immediate attention, we ensure your freight is prioritized. We specialize in time-sensitive deliveries, meeting tight deadlines with precision. Our hot shots are perfect for emergency shipments requiring rapid response. Trust us for reliable hot shot dispatching.              </Typography>
              </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

        </div>
      )
  }

  export default services;
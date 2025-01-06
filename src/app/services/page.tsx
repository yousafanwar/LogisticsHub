import {Box, Grid, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import styles from './Services.module.css';

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
                <Typography variant='caption'>Reliable freight dispatching for dry vans.</Typography>
                <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
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
                <Typography variant='caption'>Temperature-sensitive freight dispatching services.</Typography>
                <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
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
                <Typography variant='caption'>Temperature-sensitive freight dispatching services.</Typography>
                <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
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
                <Typography variant='caption'>Temperature-sensitive freight dispatching services.</Typography>
                <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
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
                <Typography variant='caption'>Temperature-sensitive freight dispatching services.</Typography>
                <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

      </div>
    )
}

export default services;
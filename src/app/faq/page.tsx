'use client';
import { useState, useEffect } from 'react';
import { Box, TextField, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Faq.module.css';
import { FaqData, data } from './data';
import Head from 'next/head';

<Head>
    <title>FAQ | Logistics Hub - Truck Dispatching Services</title>
    <meta name="description" content =  "Find answers to common questions about our truck dispatching services at Logistics Hub." />
</Head>

const faq = () => {

    const [query, setQuery] = useState<string>("");
    const [filteredData, setFilteredData] = useState<FaqData[]>([]);

    useEffect(() => {
        const searchData = () => {
            if (query.length > 0) {
                const arr = data.filter((element) => {
                    return element.question.includes(query);
                })
                setFilteredData(arr);
            } else {
                setFilteredData(data);
            }
        }
        searchData();
    }, [query])

    return (
        <Box>
            <TextField fullWidth label="Search" variant="outlined" onChange={(e) => setQuery(e.target.value)} sx={{ margin: '5px' }} />
            <Box className={styles.faq}>
                <Typography variant='h1'>Welcome to Our Truck Dispatching FAQ</Typography>
                <Typography variant='h5'>Whether you're new to trucking or an experienced driver, navigating the complexities of freight dispatching can be challenging. Our FAQ is designed to provide clear answers to your most pressing questions about truck dispatching services, pricing, and operational processes.</Typography>

            </Box>
            {filteredData.map((item, index) => {
                return <Accordion key={index}>
                    <AccordionSummary sx={{backgroundColor: "#555555", color: "white"}}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant='h5' component="span">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography variant='h6' component="span">{item.answer}</Typography>
                        </AccordionDetails>
                </Accordion>
            })}
        </Box>
    )
}

export default faq;
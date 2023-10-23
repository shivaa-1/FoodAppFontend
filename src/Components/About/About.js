import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import './About.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const About=()=>{
  return (
    <Box sx={{ flexGrow: 1 }}>
        <div className='heading mb-5 font-bold text-4xl'>
            <h1>Popular localities in and around DELHI NCR</h1>
        </div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid item xs={2} sm={4} md={4}>
            <Item>Connaught Place
            <p>260 Places</p>
            <div className='logo'>
                <ArrowForwardIosRoundedIcon/>
            </div>
            </Item>
            
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>Sector 29
            <p>110 Places</p>
            <div className='logo'>
            <ArrowForwardIosRoundedIcon/>
            </div>
            </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>Sector 18 , Noida
            <p>140 Places</p>
            <div className='logo'>
            <ArrowForwardIosRoundedIcon/>
            </div>
            </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>Saket DLF Cyber City
            <p>80 Places</p>
            <div className='logo'>
            <ArrowForwardIosRoundedIcon/>
            </div>
            </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>Gurugram
            <p>280+ Places</p>
            <div className='logo'>
            <ArrowForwardIosRoundedIcon/>
            </div>
            </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>Delhi Dwarka
            <p>240 Places</p>
            <div className='logo'>
            <ArrowForwardIosRoundedIcon/>
            </div>
            </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>Faridabad
            <p>190 Places</p>
            <div className='logo'>
            <ArrowForwardIosRoundedIcon/>
            </div>
            </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>Delhi Janakpuri
            <p>120 Places</p>
            <div className='logo'>
            <ArrowForwardIosRoundedIcon/>
            </div>
            </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>See More
            <div className='logo'>
                <KeyboardArrowDownRoundedIcon/>
            </div>
            </Item>
          </Grid>
        
      </Grid>
    </Box>
  );
};

export default About;
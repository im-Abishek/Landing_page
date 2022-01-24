import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Image } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Amadeus from '../images/section_10/amadeus.svg'
import Booking from '../images/section_10/booking.svg'
import Cheapflights from '../images/section_10/cheapflights.svg'
import Momondo from '../images/section_10/momondo.svg'
import Trainline from '../images/section_10/trainline.svg'
import Trivago from '../images/section_10/trivago.svg'


const useStyles = makeStyles((theme)=>({
    root:{
        height:"fit-content",
        marginBottom:"10rem",
        marginTop:"10rem",

        [theme.breakpoints.between('xs','sm')]: {
            marginBottom:"5rem",
            marginTop:"5rem",
        },
    },
    text_section:{
        textAlign:"center",
    },
    heading_1:{
        fontSize:"42px",
        fontWeight:"700",
        marginBottom:"0rem",
        color:"#1E2A39",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"28px"
        }
    },
    heading_2:{
        fontSize:"18px",
        color:"#5C6272",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"12px"
        }
    },
    img_row1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:"5rem",

        [theme.breakpoints.between('xs','sm')]: {
            marginTop:"3rem",
        },
    },
    img_row2:{
        display:"flex",
        flexDirection:"row",
        marginTop:"4rem",
        justifyContent:"center",

        [theme.breakpoints.between('xs','sm')]: {
            marginTop:"2rem",
        },
    },
    Cheapflights:{
        marginLeft:"2em",

        [theme.breakpoints.between('sm','lg')]: {
            height:"15px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"11px",
            marginLeft:"1rem"
        },
    },
    Momondo:{
        marginRight:"2rem",

        [theme.breakpoints.between('sm','lg')]: {
            height:"15px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"11px",
            marginRight:"1rem"
        },
    },
    Amadeus:{
        [theme.breakpoints.between('sm','lg')]: {
            height:"15px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"11px"
        },
    },
    break_2:{
        display:"none",

        [theme.breakpoints.between('xs','sm')]: {
            display:"flex"
        },
    },
    break_1:{
        [theme.breakpoints.between('xs','sm')]: {
            display:"none"
        },
    }
}))

const Section_10 = () => {

    const classes = useStyles()

  return (
      <Container className={classes.root}>
          <Box className={classes.container}>
              <Box className={classes.text_section}>
                  <p className={classes.heading_1}>Our Tour Partner</p>
                  <p className={classes.heading_2}>There are many variations of passages of Lorem Ipsum<br  className={classes.break_2}/> available, but the<br className={classes.break_1}/>majority have suffered alteration.</p>
              </Box>
              <Box className={classes.img_row1}>
                 <Image src={Amadeus} className={classes.Amadeus}/>
                 <Image src={Booking} className={classes.Amadeus}/>
                 <Image src={Trivago} className={classes.Amadeus}/>
                 <Image src={Trainline} className={classes.Amadeus}/>
              </Box>
              <Box className={classes.img_row2}>
                 <Image src={Momondo} className={classes.Momondo}/>
                 <Image src={Cheapflights} className={classes.Cheapflights}/>
              </Box>
          </Box>
      </Container>
  )
};

export default Section_10;

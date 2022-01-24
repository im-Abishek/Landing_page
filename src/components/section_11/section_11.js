import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Image } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Client1 from '../images/section_11/Client 01.svg'
import Client2 from '../images/section_11/Client 02.svg'
import Client3 from '../images/section_11/Client 03.svg'
import Client4 from '../images/section_11/Client 04.svg'
import Client5 from '../images/section_11/Client 05.svg'
import Client6 from '../images/section_11/Client 06.svg'
import Client7 from '../images/section_11/Client 07.svg'
import Client8 from '../images/section_11/Client 08.svg'

const useStyles = makeStyles((theme)=>({
    root:{
        height:"fit-content",
        marginTop:"10rem",
        marginBottom:"8rem",
        fontFamily: "Libre Baskerville",
        color:"#2C3847",

        [theme.breakpoints.between('xs','sm')]: {
            marginBottom:"5rem",
            marginTop:"5rem",
        },
    },
    row_1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",

        [theme.breakpoints.between('xs','sm')]: {
            flexDirection:"column",
            marginLeft:"1.7rem"
        },
    },
    left:{
        display:"flex",
        flexDirection:"row"
    },
    right:{
        display:"flex",
        flexDirection:"row"
    },
    row_2:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",

        [theme.breakpoints.between('xs','sm')]: {
            flexDirection:"column",
            marginLeft:"1.7rem"
        },
    },
    left_2:{
        display:"flex",
        flexDirection:"row"
    },
    right_2:{
        display:"flex",
        flexDirection:"row"
    },
    heading:{
        fontSize:"42px",
        fontWeight:"600",
        textAlign:"center",
        marginBottom:"5rem",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"28px"
        },
    },
    Client1:{
        [theme.breakpoints.between('xs','lg')]: {
            height:"100px"
        },
    }
}))

const Section_11 = () => {

    const classes = useStyles()

  return (
      <Container className={classes.root}>
          <Box className={classes.container}>
              <p className={classes.heading}>Our Happy Clients</p>
              <Box className={classes.row_1}>
                  <Box className={classes.left}>
                     <Image src={Client1} className={classes.Client1}/>
                     <Image src={Client2} className={classes.Client1}/>
                  </Box>
                  <Box className={classes.right}>
                     <Image src={Client3} className={classes.Client1}/>
                     <Image src={Client4} className={classes.Client1}/>
                  </Box>
              </Box>
              <Box className={classes.row_2}>
                  <Box className={classes.left_2}>
                     <Image src={Client5} className={classes.Client1}/>
                     <Image src={Client6} className={classes.Client1}/>
                  </Box>
                  <Box className={classes.right_2}>
                     <Image src={Client7} className={classes.Client1}/>
                     <Image src={Client8} className={classes.Client1}/>
                  </Box>
              </Box>
          </Box>
      </Container>
  )
};

export default Section_11;

import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Image } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import Tiktok from '../images/section_7/tiktok.svg'
import Profile01 from '../images/section_7/profile01.svg'
import Profile03 from '../images/section_7/profile03.svg'
import Profile04 from '../images/section_7/profile04.svg'
import Insta from '../images/section_7/insta.svg'
import FB from '../images/section_7/fb.svg'
import Insta_2 from '../images/section_7/insta_2.svg'
import Ball from '../images/section_7/ball.svg'
import Profile02 from '../images/section_7/profile02.svg'
import Profile05 from '../images/section_7/profile05.svg'
import Profile06 from '../images/section_7/profile06.svg'
import W_logo from '../images/section_7/W_logo.svg'
import Profile06_1 from '../images/section_7/profile06_1.svg'
import Profile04_1 from '../images/section_7/profile04_1.svg'


const useStyles = makeStyles((theme)=>({
    root:{
        height:"fit-content",
        marginTop:"10rem",
        marginBottom:"10rem",
        width:"100%",
    },
    container:{
        textAlign:"center",
        justifyContent:"center",
        width:"100%",
    },
    heading:{
        fontSize:"60px",
        fontWeight:"700",
        color:"#19233C",
        marginBottom:"3rem",
        marginTop:"4rem",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"32px",
            marginBottom:"2rem"
        },
    },
    btn:{
        height:"60px",
        width:"215px",
        backgroundColor:"#7073BE !important",
        borderRadius:"5px",
        boxShadow:"0px 4px 26px #D2D3F4",
        textAlign:"center",
        color:"white !important",
        fontSize:"14px !important",

        [theme.breakpoints.between('xs','lg')]: {
            height:"35px",
            width:"140px",
            fontSize:"8px !important"
        }
    },
    btn_sec:{
        justifyContent:"center"
    },
    btn_heading:{
        fontSize:"16px",
        color:"#6D6D6D",
        marginTop:"3rem",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"12px",
            marginTop:"2rem"
        }
    },
    btntext_sec:{
        position:"relative"
    },
    heading_sec:{
        position:"relative"
    },
    Tiktok:{
        position:"absolute",
        left:"3%",
        top:"0%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"35px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"35px",
            left:"0%",
            top:"-30%"
        }
    },
    Profile01:{
        position:"absolute",
        left:"20%",
        top:"-20%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"30px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"24px",
            top:"-60%"
        }
    },
    Profile03:{
        position:"absolute",
        left:"15%",
        bottom:"0%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"40px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"30px",
            left:"4%"
        }
    },
    Profile04:{
        position:"absolute",
        right:"0%",
        top:"-10%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"45px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            display:"none"
        }
    },
    facebook:{
        position:"absolute",
        right:"8%",
        bottom:"-20%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"45px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"45px",
            right:"3%"
        }
    },
    Insta:{
        position:"absolute",
        right:"15%",
        top:"-10%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"35px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"35px",
            top:"-50%",
            right:"30%"
        }
    },
    Insta_2:{
        position:"absolute",
        left:"0%",
        top:"-20%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"70px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"70px",
            top:"120%",
            left:"5%"
        }
    },
    Ball:{
        position:"absolute",
        left:"10%",
        bottom:"-20%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"35px",
            bottom:"0%"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"45px",
            top:"10%",
            left:"3%"
        }
    },
    Profile02:{
        position:"absolute",
        bottom:"0%",
        left:"25%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"30px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"30px",
            bottom:"-100%"
        }
    },
    Profile06:{
        position:"absolute",
        right:"0%",
        top:"10%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"70px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            display:"none"
        }
    },
    Profile05:{
        position:"absolute",
        right:"15%",
        bottom:"-20%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"30px",
            bottom:"-10%"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"30px",
            bottom:"-60%",
            right:"40%"
        }
    },
    W_logo:{
        position:"absolute",
        right:"25%",
        top:"-30%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"60px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"40px",
            top:"100%",
            right:"5%"
        }
    },
    Profile04_1:{
        display:"none",

        [theme.breakpoints.between('sm','xl')]: {
            display:"none"
        },
        [theme.breakpoints.between('xs','sm')]: {
            display:"block",
            position:"absolute",
            right:"8%",
            top:"-35%",
        }
    },
    Profile06_1:{
        display:"none",

        [theme.breakpoints.between('sm','lg')]: {
            display:"none"
        },
        [theme.breakpoints.between('xs','sm')]: {
            display:"block",
            position:"absolute",
            right:"20%",
            bottom:"-120%",
        }
    }
}))

const Section_7 = () => {

    const classes = useStyles()

  return (
      <Box className={classes.root}>
          <Box className={classes.container}>
              <Box className={classes.heading_sec}>
                  <p className={classes.heading}>Find the content that<br/>performs best.</p>
                  <Box>
                     <Image src={Tiktok} className={classes.Tiktok}/>
                     <Image src={Profile01} className={classes.Profile01}/>
                     <Image src={Profile03} className={classes.Profile03}/>
                  </Box>
                  <Box>
                     <Image src={FB} className={classes.facebook}/>
                     <Image src={Insta} className={classes.Insta}/>
                     <Image src={Profile04} className={classes.Profile04}/>
                     <Image src={Profile04_1} className={classes.Profile04_1}/>
                  </Box>
              </Box>
              <Box className={classes.btntext_sec}>
                  <Button className={classes.btn} variant="contained">Start 7 Day Free Trial</Button>
                  <p className={classes.btn_heading}>Try Besnik free for 14 days. No credit card needed.</p>
                  <Box>
                     <Image src={Insta_2} className={classes.Insta_2}/>
                     <Image src={Ball} className={classes.Ball}/>
                     <Image src={Profile02} className={classes.Profile02}/>
                  </Box>
                  <Box>
                     <Image src={W_logo} className={classes.W_logo}/>
                     <Image src={Profile05} className={classes.Profile05}/>
                     <Image src={Profile06} className={classes.Profile06}/>
                     <Image src={Profile06_1} className={classes.Profile06_1}/>
                  </Box>
              </Box>
          </Box>
      </Box>
  )
};

export default Section_7;

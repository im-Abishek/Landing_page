import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    root:{
        height:"fit-content",
        marginBottom:"10rem",
        color:"#19233C",
        
        
        [theme.breakpoints.between('xs','sm')]: {
            marginBottom:"5rem",
            marginTop:"5rem",
        },
    },
    container:{
        justifyContent:"center"
    },
    text_section:{
        textAlign:"center",
        marginLeft:"5rem",
        marginRight:"5rem",

        [theme.breakpoints.between('xs','sm')]: {
            marginLeft:"0rem",
            marginRight:"0rem"
        }
    },
    heading_1:{
        fontSize:"50px",
        fontWeight:"700",

        [theme.breakpoints.between('sm','lg')]: {
            fontSize:"28px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            fontSize:"25px"
        }
    },
    heading_2:{
        fontSize:"18px",
        marginLeft:"4rem",
        marginRight:"4rem",

        [theme.breakpoints.between('sm','lg')]: {
            fontSize:"12px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            fontSize:"12px",
            marginLeft:"2rem",
            marginRight:"2rem"
        }
    },
    box_1:{
        height:"210px",
        width:"265px",
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)",
        borderRadius:"10px",
        textAlign:"center",
        backgroundColor:"white",
        marginTop:"3rem",
        marginLeft:"2rem",

        [theme.breakpoints.between('xs','lg')]: {
            height:"110px",
            width:"140px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            marginLeft:"1rem",
            marginTop:"2rem"
        }
    },
    amount:{
        fontSize:"60px",
        fontWeight:"700",
        marginBottom:"0.2rem",
        marginTop:"1rem",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"30px"
        }
    },
    amount_text:{
        fontSize:"20px",
        marginTop:"0rem",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"10px"
        }
    },
    numbers:{
        padding:"1rem",

        [theme.breakpoints.between('xs','lg')]: {
            padding:"0.2rem"
        }
    },
    box_row:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",

        [theme.breakpoints.between('xs','sm')]: {
            flexDirection:"column",
            marginLeft:"2rem",
            marginRight:"2rem"
        }
    },
    left:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    right:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
}))

const Section_6 = () => {

    const classes = useStyles()

  return(
      <Container className={classes.root}>
          <Box className={classes.container}>
              <Box className={classes.text_section}>
                  <p className={classes.heading_1}>Time saved in hiring, onboarding and compliance</p>
                  <p className={classes.heading_2}>Every day we save clinicians and employers hundreds of hours that they can spend offering care.</p>
              </Box>
              <Box className={classes.box_row}>
                  <Box className={classes.left}>
                     <Box className={classes.box_1}>
                         <Box className={classes.numbers}>
                             <p className={classes.amount}>25,365</p>
                             <p className={classes.amount_text}>Expiration reminders<br/>sent</p>
                         </Box>
                     </Box>
                     <Box className={classes.box_1}>
                         <Box className={classes.numbers}>
                             <p className={classes.amount}>6,050</p>
                             <p className={classes.amount_text}>Non-compliant files<br/>found</p>
                         </Box>
                     </Box>
                  </Box>
                  <Box className={classes.right}>
                     <Box className={classes.box_1}>
                         <Box className={classes.numbers}>
                             <p className={classes.amount}>25,365</p>
                             <p className={classes.amount_text}>Expiration reminders<br/>sent</p>
                         </Box>
                     </Box>
                     <Box className={classes.box_1}>
                         <Box className={classes.numbers}>
                             <p className={classes.amount}>6,050</p>
                             <p className={classes.amount_text}>Non-compliant files<br/>found</p>
                         </Box>
                     </Box>
                  </Box>
              </Box>
          </Box>
      </Container>
  )
};

export default Section_6;

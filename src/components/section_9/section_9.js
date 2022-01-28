import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Image } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Pic1 from '../images/section_9/pic1.svg'
import Pic2 from '../images/section_9/pic2.svg'
import Pic3 from '../images/section_9/pic3.svg'

const useStyles = makeStyles((theme)=>({
    root:{
        height:"fit-content",
        marginTop:"5rem",
        marginBottom:"5rem",
        backgroundColor:"#EFF2F7",
        paddingTop:"5rem",
        paddingBottom:"5rem",
        width:"100%"
    },
    
    row1:{
        display:"flex",
        flexDirection:"row",
        flexWrap: 'wrap',
        justifyContent:"center",
        width:"100%",
        marginLeft:"0",

        [theme.breakpoints.between('md','lg')]: {
            marginLeft: "10%",
            width:"80%"
        },
        [theme.breakpoints.between('sm','md')]: {
            marginLeft: "0%",
            width:"100%"
        },
        [theme.breakpoints.between('xs','sm')]: {
            marginLeft: "0%",
            width:"100%"
        },
        // [theme.breakpoints.between('xs','lg')]: {
        //     display:"flex",
        //     flexWrap:"wrap"
        // },
        
        // [theme.breakpoints.between('xs','sm')]: {
        //     marginLeft: "8%",
        // },
    },
    // row2:{
    //     display:"flex",
    //     flexDirection:"row",
    //     flex:1,
    //     marginTop:"7rem",
    //     justifyContent:"space-between",

    //     [theme.breakpoints.between('xs','sm')]: {
    //         display:"flex",
    //         flexWrap:"wrap"
    //     },
    // },
    box:{
        height:"485px",
        width:"375px",
        backgroundColor:"white",
        boxShadow:"0px 45px 104px -10px rgba(112, 115, 190, 0.2)",
        borderRadius:"20px",
        textAlign:"center",
        margin: 20,
        borderRadius: 5,
        // padding: 20,
        // paddingTop: 10,
        alignItems: "center",
        justifyContent: "space-between",

        [theme.breakpoints.between('md','lg')]: {
            height:"260px",
            width:"200px",
        },
        [theme.breakpoints.between('sm','md')]: {
            height:"260px",
            width:"200px",
            margin: 10
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"185px",
            width:"145px",
            margin: 10
        },
        
    },
    
    name:{
        fontSize:"36px",
        fontWeight:"600",
        color:"#19233C",
        marginTop:"0rem",
        marginBottom:"0rem",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"18px"
        },
    },
    position:{
        fontSize:"16px",
        color:"#6D6D6D",
        marginTop:"0rem",
        marginBottom:"4rem",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"10px",
            marginBottom:"2rem"
        },
    },
    profile:{
        fontSize:"20px",
        fontWeight:"500",
        color:"#19233C",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"10px"
        },
    },
    
    Pic1:{
        [theme.breakpoints.between('sm','lg')]: {
            height:"100px",
            marginTop:"1.5rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"50px",
            marginTop:"1.5rem"
        },
    }
}))

const Section_9 = () => {

    const classes = useStyles()

  return(
      <Box className={classes.root}>
          <Box className={classes.container}>
              <Box className={classes.row1}>
                  
                     <Box className={classes.box}>
                        <Image src={Pic1} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Dan REES</p>
                           <p className={classes.position}>Project Manager</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  
                  
                     <Box className={classes.box}>
                        <Image src={Pic2} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Sabine HERTV</p>
                           <p className={classes.position}>Better Work Chief</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  
                  
                     <Box className={classes.box}>
                        <Image src={Pic3} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Conor BOYLE</p>
                           <p className={classes.position}>Head of Communications</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  
                  
                     <Box className={classes.box}>
                        <Image src={Pic1} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Dan REES</p>
                           <p className={classes.position}>Project Manager</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  
                  
                     <Box className={classes.box}>
                        <Image src={Pic2} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Sabine HERTV</p>
                           <p className={classes.position}>Better Work Chief</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  
                  
                     <Box className={classes.box}>
                        <Image src={Pic3} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Conor BOYLE</p>
                           <p className={classes.position}>Head of Communications</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  
              </Box>
          </Box>
      </Box>
  )
};

export default Section_9;

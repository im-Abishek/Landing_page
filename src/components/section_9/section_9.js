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
        paddingBottom:"8rem",
        width:"100%"
    },
    container:{
        justifyContent:"center",
    },
    row1:{
        display:"flex",
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between",
        flexWrap:"wrap",

        [theme.breakpoints.between('xs','lg')]: {
            display:"flex",
            flexWrap:"wrap"
        },
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
    box1:{
        height:"485px",
        width:"375px",
        backgroundColor:"white",
        boxShadow:"0px 45px 104px -10px rgba(112, 115, 190, 0.2)",
        borderRadius:"20px",
        textAlign:"center",
        // marginLeft:"8rem",
        // marginTop:"4rem",

        [theme.breakpoints.between('sm','md')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"5rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"185px",
            width:"145px",
            // marginLeft:"2rem"
        },
        [theme.breakpoints.between('md','lg')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"8rem",
            // marginTop:"4rem",
        },
    },
    box2:{
        height:"485px",
        width:"375px",
        backgroundColor:"white",
        boxShadow:"0px 45px 104px -10px rgba(112, 115, 190, 0.2)",
        borderRadius:"20px",
        textAlign:"center",
        // marginLeft:"5rem",
        // marginTop:"4rem",

        [theme.breakpoints.between('sm','md')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"0.8rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"185px",
            width:"145px",
            // marginLeft:"0"
        },
        [theme.breakpoints.between('md','lg')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"5rem",
            // marginTop:"4rem",
        },
    },
    box3:{
        height:"485px",
        width:"375px",
        backgroundColor:"white",
        boxShadow:"0px 45px 104px -10px rgba(112, 115, 190, 0.2)",
        borderRadius:"20px",
        textAlign:"center",
        // marginLeft:"1.5rem",
        // marginTop:"4rem",

        [theme.breakpoints.between('sm','md')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"-1rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"185px",
            width:"145px"
        },
        [theme.breakpoints.between('md','lg')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"1.5rem",
            // marginTop:"4rem",
        },
    },
    box1_2:{
        height:"485px",
        width:"375px",
        backgroundColor:"white",
        boxShadow:"0px 45px 104px -10px rgba(112, 115, 190, 0.2)",
        borderRadius:"20px",
        textAlign:"center",
        // marginLeft:"8rem",
        // marginTop:"4rem",

        [theme.breakpoints.between('sm','md')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"5rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"185px",
            width:"145px",
            // marginLeft:"2rem"
        },
        [theme.breakpoints.between('md','lg')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"8rem",
            // marginTop:"4rem",
        },
    },
    box2_2:{
        height:"485px",
        width:"375px",
        backgroundColor:"white",
        boxShadow:"0px 45px 104px -10px rgba(112, 115, 190, 0.2)",
        borderRadius:"20px",
        textAlign:"center",
        // marginLeft:"5rem",
        // marginTop:"4rem",

        [theme.breakpoints.between('sm','md')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"0.8rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"185px",
            width:"145px",
            // marginLeft:"0"
        },
        [theme.breakpoints.between('md','lg')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"5rem",
            // marginTop:"4rem",
        },
    },
    box3_2:{
        height:"485px",
        width:"375px",
        backgroundColor:"white",
        boxShadow:"0px 45px 104px -10px rgba(112, 115, 190, 0.2)",
        borderRadius:"20px",
        textAlign:"center",
        // marginLeft:"1.5rem",
        // marginTop:"4rem",

        [theme.breakpoints.between('sm','md')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"-1rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"185px",
            width:"145px"
        },
        [theme.breakpoints.between('md','lg')]: {
            height:"260px",
            width:"200px",
            // marginLeft:"1.5rem",
            // marginTop:"4rem",
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
    column1:{
        display:"flex",
        justifyContent:"center",
        margin:"4rem",


        [theme.breakpoints.between('xs','sm')]: {
            display:"flex",
            flex:0.5,
            margin:"0.5rem"
        },
        [theme.breakpoints.between('sm','md')]: {
            display:"flex",
            flex:0.5,
            margin:"1rem"
        },
        [theme.breakpoints.between('md','lg')]: {
            display:"flex",
            flex:0.7,
            margin:"2rem"
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
                  <Box className={classes.column1}>
                     <Box className={classes.box1}>
                        <Image src={Pic1} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Dan REES</p>
                           <p className={classes.position}>Project Manager</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  </Box>
                  <Box className={classes.column1}>
                     <Box className={classes.box2}>
                        <Image src={Pic2} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Sabine HERTV</p>
                           <p className={classes.position}>Better Work Chief</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  </Box>
                  <Box className={classes.column1}>
                     <Box className={classes.box3}>
                        <Image src={Pic3} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Conor BOYLE</p>
                           <p className={classes.position}>Head of Communications</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  </Box>
                  <Box className={classes.column1}>
                     <Box className={classes.box1_2}>
                        <Image src={Pic1} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Dan REES</p>
                           <p className={classes.position}>Project Manager</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  </Box>
                  <Box className={classes.column1}>
                     <Box className={classes.box2_2}>
                        <Image src={Pic2} className={classes.Pic1}/>
                        <Box className={classes.text_section}>
                           <p className={classes.name}>Sabine HERTV</p>
                           <p className={classes.position}>Better Work Chief</p>
                           <a href='#' className={classes.profile}>View Profile</a>
                        </Box>
                     </Box>
                  </Box>
                  <Box className={classes.column1}>
                     <Box className={classes.box3_2}>
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
      </Box>
  )
};

export default Section_9;

import React from 'react'
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


const usestyles = makeStyles((theme)=>({
    navSection:{
        // height:"fit_content",
        paddingTop:"1.5rem",
        backgroundColor:"#EFF2F7",
        width:"100%",
        

        [theme.breakpoints.between('sm','md')]:{
            width:"100%"
        },
    },
    row:{
        display:"flex",
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-evenly",

        [theme.breakpoints.between('md','lg')]:{
            width:"100%"
        },
        [theme.breakpoints.between('sm','md')]:{
            width:"100%"
        },
        [theme.breakpoints.between('xs','sm')]:{
            justifyContent:"space-between"
        },
    },
    heading:{
        color:"#7073BE",
        fontWeight:"700",
        display:"flex",
        fontSize:"24px",

        [theme.breakpoints.between('md','lg')]:{
            // marginLeft:"13rem",
            // marginRight:"6rem",
            fontSize:"16px",
            fontWeight:"bold",
            marginTop:"0.3rem"
        },
        [theme.breakpoints.between('sm','md')]:{
            // marginLeft:"0rem",
            // marginRight:"2rem",
            fontSize:"16px",
            fontWeight:"bold",
            marginTop:"0.3rem"
        },
        [theme.breakpoints.between('xs','sm')]:{
            fontSize:"24px",
            fontWeight:"700 !important",
        },
    },
    center_content:{
        
        marginBottom:"15px",
        // marginLeft:"19rem",
        // marginRight:"13rem",

        [theme.breakpoints.between('md','lg')]:{
            // marginLeft:"0rem",
            // marginRight:"7rem !important",
            fontSize:"12px",
            marginTop:"0.5rem"
        },
        [theme.breakpoints.between('sm','md')]:{
            // marginLeft:"0rem",
            // marginRight:"2.5rem !important",
            fontSize:"12px",
            marginTop:"0.5rem"
        },
        [theme.breakpoints.between('xs','sm')]:{
            display:"none"
        },
    },
    center_text:{
        textDecoration:"none",
        color:"#6D6D6D",
        paddingLeft:"2rem",

        [theme.breakpoints.between('sm','md')]:{
            paddingLeft:"1rem"
        },
    },
    right_content:{
        marginBottom:"10px",
       [theme.breakpoints.between('xs','sm')]:{
        display:"none"
    },
    },
    button:{
        backgroundColor:"#7073BE !important",
        borderRadius:"5px !important",
    },
    icon:{
        display:"none",
        [theme.breakpoints.between('xs','sm')]:{
            display:"flex",
            
        },
    },
    button_1:{
        borderRadius:"5px !important",
        marginLeft:"0rem",
        border:"1px solid #7073BE",
        color:"#7073BE !important",
        marginRight:"1rem !important"
    },


}))


const HeaderComponent = () => {

    const classes = usestyles()

    return (
        <Box fixed className={classes.navSection}>
            <Box className={classes.row} style={{display:"flex",flexDirection:"row"}}>
                <Box className={classes.heading}>
                    <p>LAWCO.</p>
                </Box>
                <Box className={classes.center_content}>
                     <a className={classes.center_text} href='#'>Home</a>
                     <a className={classes.center_text} href='#'>Services</a>
                     <a className={classes.center_text} href='#'>Project</a>
                     <a className={classes.center_text} href='#'>Review</a>
                </Box>
                <Box className={classes.right_content}>
                     <Button className={classes.button_1} variant="outlined">Log In</Button>
                     <Button className={classes.button} variant="contained">Register</Button>
                </Box>
                <Box className={classes.icon}>
                   <DensityMediumIcon/>
                </Box>
            </Box>
        </Box>
        
    )
}

export default HeaderComponent;

import React from 'react'
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


const usestyles = makeStyles((theme)=>({
    navSection:{
        display:"flex",
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        marginTop:"1.5rem",

        [theme.breakpoints.between('sm','md')]:{
            width:"100%"
        },
    },
    row:{
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
            marginLeft:"3rem",
            marginRight:"6rem",
            fontSize:"16px",
            fontWeight:"bold",
            marginTop:"0.3rem"
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:"0rem",
            marginRight:"2rem",
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
        
        marginTop:"5px",
        marginLeft:"19rem",
        marginRight:"13rem",

        [theme.breakpoints.between('md','lg')]:{
            marginLeft:"0rem",
            marginRight:"7rem !important",
            fontSize:"12px",
            marginTop:"0.5rem"
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:"0rem",
            marginRight:"2.5rem !important",
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

       [theme.breakpoints.between('xs','sm')]:{
        display:"none"
    },
    },
    right_text:{
        textDecoration:"none",
        color:"#6D6D6D",
        paddingRight:"2rem",

        [theme.breakpoints.between('xs','sm')]:{
            display:"none"
        },
        [theme.breakpoints.between('sm','md')]:{
            paddingRight:"1rem"
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
        <Container fixed className={classes.navSection}>
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
        </Container>
        
    )
}

export default HeaderComponent;

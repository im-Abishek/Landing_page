import { Box, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import clsx from "clsx"
import { NavBar, UseNav, useNav } from '../../../provider/NavBarProvider';


const useStyles = makeStyles(theme => ({

    navBox:{
        display:"flex",
        flex:1,
        width:"100%",
        height:50,
        flexDirection:"column",
        position:"fixed",
        background:"white",
        zIndex:1
    },
    navbar:{
      display:"flex",
      flex:1,
      height:53,
      background:"white",
      justifyContent:"space-between",
      padding:"10px"
    },
    contentBox:{
        display:"flex",
        position:"relative",
        height:"40vh !important",
        background:"yellow",
    },
    activeNav:{
        height:350
    }

}))


export default function MobileNav({children}) {
    const classes = useStyles()
    const {open,setOpen} = useContext(NavBar)
    console.log(open)
   
    const handleClick = () =>{
        setOpen(!open)
    }
  return (
       <>
         <Box componen="div" className={clsx(classes.navBox,{[classes.activeNav]:open})}>
              {/* <Box component="div">
                  <Box component="p">LAWCO</Box>
              </Box>
              <Box component="div">
                   <IconButton onClick={handleClick}>
                        <DensityMediumIcon/>
                   </IconButton>
              </Box>
              <Box className={classes.contentBox}>

              </Box>
             */}
             <Box component="div" className={classes.navbar}>
             <Box component="div">
                  <Box component="p">LAWCO</Box>
              </Box>
              <Box component="div">
                   <IconButton onClick={handleClick}>
                        <DensityMediumIcon/>
                   </IconButton>
              </Box>
             </Box>
             <Box component="div" className={classes.contentBox}>

             </Box>
              
         </Box>
        
       </>
     
  );
}

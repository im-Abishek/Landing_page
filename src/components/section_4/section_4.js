import React from 'react'
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Image } from 'react-bootstrap';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Circle1 from '../images/section_4/circle1.svg'
import Circle2 from '../images/section_4/circle2.svg'
import Circle3 from '../images/section_4/circle3.svg'
import DesignCircle from '../images/section_4/designCircle.svg'

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
    container_row:{
        display:"flex",
        flex:1,
        justifyContent:"center"
    },
    container:{
        height:"600px",
        width:"950px",
        boxShadow:"0px 30.329px 38.2108px rgba(198, 195, 195, 0.3)",
        backgroundColor:"white",
        borderRadius:"10px",
        position:"relative",

        [theme.breakpoints.between('sm','lg')]: {
            height:"430px",
            width:"655px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"1195px",
            width:"315px"
        },
    },
    row1:{
        marginTop:"2rem",
        marginLeft:"1rem",

        [theme.breakpoints.between('xs','lg')]: {
            marginTop:"1rem"
        },
    },
    row2:{
        marginTop:"2rem",
        marginLeft:"3rem",

        [theme.breakpoints.between('xs','lg')]: {
            marginTop:"1rem",
            marginLeft:"2rem"
        },
    },
    row3:{
        display:"flex",
        justifyContent:"space-evenly",
        marginTop:"2rem",
        flexDirection:"row",

        [theme.breakpoints.between('sm','lg')]: {
            marginTop:"2rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            flexDirection:"column",
            marginTop:"0"
        },
    },
    dot_1:{
        color:"#FA5B55",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px"
        },
    },
    dot_2:{
        color:"#FEB931",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px"
        },
    },
    dot_3:{
        color:"#23C73F",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px"
        },
    },
    heading:{
        fontSize:"30px",
        fontWeight:"600",

        [theme.breakpoints.between('xs','lg')]: {
            marginTop:"1rem",
            marginBottom:"1rem",
            fontSize:"20px"
        },
    },
    box_1:{
        height:"335px",
        width:"255px",
        border: "1px solid rgba(182, 183, 185, 0.18)",
        boxShadow: "0px 10px 20px rgba(145, 145, 145, 0.06)",
        borderRadius:"5px",
        backgroundColor:"#F1F2F6",

        [theme.breakpoints.between('sm','lg')]: {
            height:"260px",
            width:"180px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            marginLeft:"2rem",
            marginTop:"1rem"
        },
    },
    box_heading:{
        fontSize:"16px",
        fontWeight:"500",
        color:"white",
        marginTop:"0",
        paddingTop:"7px",

        [theme.breakpoints.between('sm','lg')]: {
            fontSize:"12px"
        },
    },
    heading_bg:{
        height:"40px",
        width:"255px",
        backgroundColor:"#FF805D",
        textAlign:"center",
        borderRadius:"5px 5px 0px 0px",

        [theme.breakpoints.between('sm','lg')]: {
            height:"30px",
            width:"180px"
        },
    },
    heading_bg2:{
        height:"40px",
        width:"255px",
        backgroundColor:"#FFCC7B",
        textAlign:"center",
        borderRadius:"5px 5px 0px 0px",

        [theme.breakpoints.between('sm','lg')]: {
            height:"30px",
            width:"180px"
        },
    },
    heading_bg3:{
        height:"40px",
        width:"255px",
        backgroundColor:"#462C4F",
        textAlign:"center",
        borderRadius:"5px 5px 0px 0px",

        [theme.breakpoints.between('sm','lg')]: {
            height:"30px",
            width:"180px"
        },
    },
    smallBox_row:{
        display:"flex",
        flexDirection:"column",
        margin:"1rem",

        [theme.breakpoints.between('sm','lg')]: {
            margin:"0.6rem"
        },
    },
    smallBox_1:{
        height:"105px",
        width:"225px",
        backgroundColor:"white",
        borderRadius:"5px",

        [theme.breakpoints.between('sm','lg')]: {
            height:"85px",
            width:"160px"
        },
    },
    smallBox_2:{
        height:"105px",
        width:"225px",
        backgroundColor:"white",
        marginTop:"1rem",
        borderRadius:"5px",

        [theme.breakpoints.between('sm','lg')]: {
            height:"85px",
            width:"160px"
        },
    },
    text:{
        fontSize:"8px",
        color:"#FF805D",
        marginBottom:"0rem"
    },
    text1_2:{
        fontSize:"8px",
        color:"#FFCC7B",
        marginBottom:"0rem"
    },
    text2:{
        fontSize:"12px",
        fontWeight:"500",
        marginTop:"0.5rem",

        [theme.breakpoints.between('sm','lg')]: {
            fontSize:"10px"
        },
    },
    circlesRow:{
        display:"flex",
        flexDirection:"row",
        position:"relative",
    },
    circle1:{
        [theme.breakpoints.between('sm','lg')]: {
            height:"15px"
        },
    },
    circle2:{
        position:"absolute",
        top:"0%",
        left:"5%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"15px"
        },
    },
    circle3:{
        position:"absolute",
        top:"0%",
        left:"10%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"15px"
        },
    },
    smallBox1_contents:{
        marginTop:"0.5rem",
        marginLeft:"1rem"
    },
    button:{
        height:"20px",
        width:"50px",
        borderRadius:"20px",
        backgroundColor:"rgba(255, 128, 93, 0.4)",
        marginLeft:"2rem",
        textAlign:"center",

        [theme.breakpoints.between('sm','lg')]: {
            height:"16px",
            width:"40px"
        },
    },
    button2:{
        height:"20px",
        width:"50px",
        borderRadius:"20px",
        backgroundColor:"rgba(255, 204, 123, 0.4)",
        marginLeft:"2rem",
        textAlign:"center",

        [theme.breakpoints.between('sm','lg')]: {
            height:"16px",
            width:"40px"
        },
    },
    button3:{
        height:"20px",
        width:"50px",
        borderRadius:"20px",
        backgroundColor:"rgba(71, 45, 80, 0.4)",
        marginLeft:"2rem",
        textAlign:"center",

        [theme.breakpoints.between('sm','lg')]: {
            height:"16px",
            width:"40px"
        },
    },
    buttonText:{
        fontSize:"8px",
        color:"#FF805D",
        marginTop:"4px",

        [theme.breakpoints.between('sm','lg')]: {
            marginTop:"2px"
        },
    },
    buttonText2:{
        fontSize:"8px",
        color:"rgba(255, 204, 123, 1)",
        marginTop:"4px",

        [theme.breakpoints.between('sm','lg')]: {
            marginTop:"2px"
        },
    },
    buttonText3:{
        fontSize:"8px",
        color:"rgba(71, 45, 80, 1)",
        marginTop:"4px",

        [theme.breakpoints.between('sm','lg')]: {
            marginTop:"2px"
        },
    },
    design:{
        position:"absolute",
        bottom:"0",

        [theme.breakpoints.between('sm','lg')]: {
            height:"40px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            display:"none"
        },
    }
}))

const Section_4 = () => {

    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Box className={classes.container_row}>
               <Box className={classes.container}>
                   <Box className={classes.row1}>
                       <FiberManualRecordIcon className={classes.dot_1}/>
                       <FiberManualRecordIcon className={classes.dot_2}/>
                       <FiberManualRecordIcon className={classes.dot_3}/>
                   </Box>
                   <Box className={classes.row2}>
                       <p className={classes.heading}>Tickets</p>
                   </Box>
                   <Box className={classes.row3}>
                       <Box className={classes.box_1}>
                           <Box className={classes.heading_bg}>
                               <p className={classes.box_heading}>Pending</p>
                           </Box>
                           <Box className={classes.smallBox_row}>
                             <Box className={classes.smallBox_1}>
                                 <Box className={classes.smallBox1_contents}>
                                     <p className={classes.text}>Workplace Team</p>
                                     <p className={classes.text2}>There is no more soap in the men's room.</p>
                                     <Box>
                                         <Box className={classes.circlesRow}>
                                             <Image src={Circle1} className={classes.circle1}/>
                                             <Image src={Circle2} className={classes.circle2}/>
                                             <Image src={Circle3} className={classes.circle3}/>
                                             <Box className={classes.button}>
                                                <p className={classes.buttonText}>High</p>
                                             </Box>
                                         </Box>
                                     </Box>
                                 </Box>
                             </Box>
                             <Box className={classes.smallBox_2}>
                               <Box className={classes.smallBox1_contents}>
                                     <p className={classes.text1_2}>Workplace Team</p>
                                     <p className={classes.text2}>We have a investor meeting on tuesday. can you order a room?</p>
                                     <Box>
                                         <Box className={classes.circlesRow}>
                                             <Image src={Circle1} className={classes.circle1}/>
                                             <Image src={Circle2} className={classes.circle2}/>
                                             <Box className={classes.button2}>
                                                <p className={classes.buttonText2}>Medium</p>
                                             </Box>
                                         </Box>
                                     </Box>
                                 </Box>
                             </Box>
                           </Box>
                       </Box>
                       <Box className={classes.box_1}>
                           <Box className={classes.heading_bg2}>
                               <p className={classes.box_heading}>In Progress</p>
                           </Box>
                           <Box className={classes.smallBox_row}>
                             <Box className={classes.smallBox_1}>
                                 <Box className={classes.smallBox1_contents}>
                                     <p className={classes.text1_2}>Workplace Team</p>
                                     <p className={classes.text2}>Can I have a standing desk?</p>
                                     <Box>
                                         <Box className={classes.circlesRow}>
                                             <Image src={Circle1} className={classes.circle1}/>
                                             <Image src={Circle2} className={classes.circle2}/>
                                             <Image src={Circle3} className={classes.circle3}/>
                                             <Box className={classes.button}>
                                                <p className={classes.buttonText}>High</p>
                                             </Box>
                                         </Box>
                                     </Box>
                                 </Box>
                             </Box>
                             <Box className={classes.smallBox_2}>
                               <Box className={classes.smallBox1_contents}>
                                     <p className={classes.text}>Workplace Team</p>
                                     <p className={classes.text2}>There is no more soap in the men's room.</p>
                                     <Box>
                                         <Box className={classes.circlesRow}>
                                             <Image src={Circle1} className={classes.circle1}/>
                                             <Image src={Circle2} className={classes.circle2}/>
                                             <Image src={Circle3} className={classes.circle3}/>
                                             <Box className={classes.button}>
                                                <p className={classes.buttonText}>High</p>
                                             </Box>
                                         </Box>
                                     </Box>
                                 </Box>
                             </Box>
                           </Box>
                       </Box>
                       <Box className={classes.box_1}>
                           <Box className={classes.heading_bg3}>
                               <p className={classes.box_heading}>Completed</p>
                           </Box>
                           <Box className={classes.smallBox_row}>
                             <Box className={classes.smallBox_1}>
                                 <Box className={classes.smallBox1_contents}>
                                     <p className={classes.text}>Workplace Team</p>
                                     <p className={classes.text2}>There is no more soap in the men's room.</p>
                                     <Box>
                                         <Box className={classes.circlesRow}>
                                             <Image src={Circle1} className={classes.circle1}/>
                                             <Image src={Circle2} className={classes.circle2}/>
                                             <Image src={Circle3} className={classes.circle3}/>
                                             <Box className={classes.button3}>
                                                <p className={classes.buttonText3}>High</p>
                                             </Box>
                                         </Box>
                                     </Box>
                                 </Box>
                             </Box>
                             <Box className={classes.smallBox_2}>
                               <Box className={classes.smallBox1_contents}>
                                     <p className={classes.text}>Workplace Team</p>
                                     <p className={classes.text2}>My computer is soo slow. What is the the criteria for update?</p>
                                     <Box>
                                         <Box className={classes.circlesRow}>
                                             <Image src={Circle1} className={classes.circle1}/>
                                             <Image src={Circle2} className={classes.circle2}/>
                                             <Box className={classes.button}>
                                                <p className={classes.buttonText}>High</p>
                                             </Box>
                                         </Box>
                                     </Box>
                                 </Box>
                             </Box>
                           </Box>
                       </Box>
                   </Box>
                   <Image src={DesignCircle} className={classes.design}/>
               </Box>
            </Box>
        </Container>
    )
}

export default Section_4

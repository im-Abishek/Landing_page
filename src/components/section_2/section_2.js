import React, { useContext } from 'react'
// import { useMediaQuery } from 'beautiful-react-hooks';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Image } from 'react-bootstrap';
import Elipse from '../images/section_2/Elipse.svg'
import Half_circle from '../images/section_2/half_circle.svg'
import Contents from '../images/section_2/box1_contents.svg'
import Half_circle2 from '../images/section_2/smallcircle_half.svg'
import Contents2 from '../images/section_2/box2_contents.svg'
import box3_img1 from '../images/section_2/box3_img1.svg'
import box3_img2 from '../images/section_2/box3_img2.svg'
import box3_img3 from '../images/section_2/box3_img3.svg'
import box3_img22 from '../images/section_2/box3_img2-2.svg'
import { NavBar } from '../../provider/NavBarProvider';

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
    heading:{
        textAlign:"center"
    },
    heading_1:{
        fontSize:"50px",
        fontFamily:"Seaweed Script",
        marginBottom:"1rem",
        color:"#BA39D3",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"28px"
        }
    },
    heading_2:{
        fontSize:"42px",
        color:"#19233C",
        fontWeight:"700",
        marginTop:"0rem",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"28px"
        }
    },
    row_1:{
        display:"flex",
        flex:"1",  
        
        [theme.breakpoints.between('sm','lg')]: {
            justifyContent:"center"
        },
        [theme.breakpoints.between('xs','sm')]: {
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center"
        }
    },
    row_2:{
        display:"flex",
        flex:"1",  
        
        
        [theme.breakpoints.between('xs','lg')]: {
            justifyContent:"center"
        }
    },
    left_side:{
        display:"flex",
        flex:"0.5",
    },
    box_1:{
        height:"380px",
        width:"570px",
        backgroundColor:"#E3E7FF",
        borderRadius:"12px",
        marginRight:"1.5rem",
        position:"relative",
        marginTop:"1rem",

        [theme.breakpoints.between('xs','lg')]: {
            height:"200px",
            width:"320px",
            marginRight:"0rem"
        },
        // [theme.breakpoints.between('xs','sm')]: {
        //     marginLeft:"1rem"
        // },
    },
    right_side:{
        display:"flex",
        flex:"0.5"
    },
    box_2:{
        height:"380px",
        width:"570px",
        borderRadius:"12px",
        background: "linear-gradient(131.93deg, #FFACA2 26.34%, #FF9183 100%)",
        marginLeft:"1rem",
        position:"relative",
        marginTop:"1rem",

        [theme.breakpoints.between('sm','lg')]: {
            height:"200px",
            width:"320px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"200px",
            width:"320px",
            marginLeft:"0"
        }
    },
    box1_heading1:{
        marginBottom:"0rem",
        color:"#8F6C98",
        fontSize:"12px",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"8px"
        }
    },
    box1_heading2:{
        fontSize:"24px",
        fontWeight:"700",
        marginTop:"0",
        color:"#351F43",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"12px"
        }
    },
    text_img:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        position:"relative"
    },
    text:{
        paddingTop:"1rem",
        paddingLeft:"1rem"
    },
    img:{
        marginLeft:"16.3rem",
        marginTop:"2rem",

        [theme.breakpoints.between('xs','lg')]: {
            marginLeft:"0rem",
        }
    },
    elipse:{
        position:"absolute",
        right:"25%",

        [theme.breakpoints.between('xs','lg')]: {
            height:"18px",
        }
    },
    contents:{
        position:"absolute",
        top:"33.5%",
        left:"15%",

        [theme.breakpoints.between('xs','lg')]: {
            height:"135px",
        }
    },
    half_circle:{
        [theme.breakpoints.between('xs','lg')]: {
            height:"100px",
        }
    },
    half_circle2:{
        position:"absolute",
        left:"0%",
        top:"70%",

        [theme.breakpoints.between('xs','lg')]: {
            height:"45px",
        }
    },
    box2_heading1:{
        marginBottom:"0rem",
        color:"white",
        fontSize:"12px",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"8px"
        }
    },
    box2_heading2:{
        fontSize:"24px",
        fontWeight:"700",
        marginTop:"0",
        color:"white",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"12px"
        }
    },
    box2_text:{
        paddingTop:"1rem",
        paddingLeft:"2rem",
    },
    Contents2:{
        position:"absolute",
        top:"9%",

        [theme.breakpoints.between('xs','lg')]: {
            height:"180px",
            position:"absolute",
            top:"10.5%",
            left:"5%"
        }
    },
    box_3:{
        height:"380px",
        width:"1170px",
        marginTop:"2rem",
        background: "linear-gradient(120.81deg, #FDD7FE 1.79%, #EFF8FF 101.44%)",
        borderRadius:"12px",
        position:"relative",

        [theme.breakpoints.between('sm','lg')]: {
            height:"200px",
            width:"670px",
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"400px",
            width:"320px",
        },
        
    },
    box3_images:{
        display:"flex",
    },
    box3_img1:{
        position:"absolute",
        top:"50%",
        left:"3%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"110px",
            top:"45%",
            left:"5%"
        },
        [theme.breakpoints.between('xs','sm')]: {
            display:"none"
        }
    },
    box3_img2:{
        position:"absolute",
        left:"22.5%",
        top:"20%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"170px",
            position:"absolute",
            top:"15%",
            left:"24.5%"
        },
        [theme.breakpoints.between('xs','sm')]: {
            display:"none"
        }
    },
    box3_img3:{
        position:"absolute",
        left:"42%",
        top:"12.5%",

        [theme.breakpoints.between('sm','lg')]: {
            height:"180px",
            position:"absolute",
            left:"45%",
            top:"10%"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"140px",
            position:"absolute",
            left:"9%",
            top:"65%",
        }
    },
    box3_img12:{
        display:"none",

        [theme.breakpoints.between('xs','sm')]: {
            display:"flex",
        }
    },
    box3_img22:{
        display:"none",

        [theme.breakpoints.between('xs','sm')]: {
            display:"flex",
            marginLeft:"2rem",
            opacity:"0.2"
        }
    },


}))

const Section_2 = () => {

    const classes = useStyles()
    const {open,setOpen} = useContext(NavBar)
    return (
        <Container className={classes.root} >
            <Box className={classes.heading}>
                <p className={classes.heading_1}>Our Works</p>
                <p className={classes.heading_2}>Exploration Work</p>
            </Box>
            <Box className={classes.row_1}>
                <Box classes={classes.left_side}>
                    <Box className={classes.box_1}>
                        <Box className={classes.text_img}>
                             <Box className={classes.text}>
                                 <p className={classes.box1_heading1}>Project 01</p>
                                 <p className={classes.box1_heading2}>Social Media App</p>
                             </Box>
                             <Box className={classes.img}>
                                 <Image src={Elipse} className={classes.elipse} />
                                 <Image src={Half_circle} className={classes.half_circle} />
                             </Box>
                        </Box>
                        <Box>
                            <Image src={Contents} className={classes.contents} />
                         </Box>
                         <Box>
                             <Image src={Half_circle2} className={classes.half_circle2} />
                         </Box>
                    </Box>
                </Box>
                <Box classes={classes.right_side}>
                    <Box className={classes.box_2}>
                        <Box className={classes.box2_text}>
                            <p className={classes.box2_heading1}>Project 02</p>
                            <p className={classes.box2_heading2}>Ezzy Ui Design</p>
                        </Box>
                        <Box>
                             <Image src={Contents2} className={classes.Contents2} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.row_2}>
                <Box className={classes.box_3}>
                    <Box className={classes.box2_text}>
                        <p className={classes.box1_heading1}>Project 03</p>
                        <p className={classes.box1_heading2}>Car Management</p>
                    </Box>
                    <Box className={classes.box3_images}>
                      <Image src={box3_img1} className={classes.box3_img1} />
                      <Image src={box3_img2} className={classes.box3_img2} />
                      <Image src={box3_img3} className={classes.box3_img3} />
                      <Image src={box3_img22} className={classes.box3_img22} />
                      <Image src={box3_img22} className={classes.box3_img12} />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Section_2

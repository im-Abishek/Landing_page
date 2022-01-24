import React from 'react'
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Image } from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Arrows from '../images/section_5/Arrows.svg'
import Boxes from '../images/section_5/Boxes.svg'
import Maps from '../images/section_5/Maps.svg'
import Lines_hr from '../images/section_5/line_hr.svg'
import Lines_vr from '../images/section_5/line_vr.svg'
import Design from '../images/section_5/design.svg'


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
    container:{
        display:"flex",
        flex:1,
        position:"relative",

        [theme.breakpoints.between('sm','lg')]: {
            alignItems:"center"
        },
        [theme.breakpoints.between('xs','sm')]: {
            justifyContent:"center",
            flexDirection:"column",
            textAlign:"center"
        }
    },
    left_side:{
        flex:0.5,
        flexDirection:"column",

        [theme.breakpoints.between('sm','md')]: {
            marginLeft:"1rem"
        },
        [theme.breakpoints.between('md','lg')]: {
            marginLeft:"7rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            flex:1,
            margin:"2rem"
        }
    },
    right_side:{
        flex:0.5,
        marginLeft:"2rem",
        position:"relative",

        [theme.breakpoints.between('sm','lg')]: {
            marginLeft:"0"
        },
        [theme.breakpoints.between('xs','sm')]: {
            flex:1,
            marginTop:"2rem",
            marginLeft:"0rem",
            width:"100%"
        }
    },
    right_text1:{
        color:"#7073BE",
        fontWeight:"500",
        fontSize:"18px",

        [theme.breakpoints.between('sm','lg')]: {
            fontSize:"10px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            fontSize:"15px",
            fontWeight:"500"
        }
    },
    right_text4:{
        color:"#7073BE",
        marginRight:"1rem",
        fontSize:"18px",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"10px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            fontSize:"15px"
        }
    },
    arrow_icon:{
        color:"#7073BE",

        [theme.breakpoints.between('xs','sm')]: {
            height:"15px !important",
        }
    },
    right_text2:{
        fontSize:"42px",
        fontWeight:"600",
        color:"#19233C",
        marginTop:"0",
        marginBottom:"0",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"28px"
        }
    },
    right_text3:{
        fontSize:"18px",
        fontWeight:"400",
        color:"#19233C",

        [theme.breakpoints.between('sm','lg')]: {
            fontSize:"12px"
        },
        [theme.breakpoints.between('xs','sm')]: {
            fontSize:"13px"
        }
    },
    bigbox_container:{
        [theme.breakpoints.between('xs','sm')]: {
            justifyContent:"center"
        }
    },
    big_box:{
        height:"255px",
        width:"470px",
        border:"1px solid #F4F4F4",
        boxShadow: "0px 14.329px 38.2108px rgba(198, 195, 195, 0.2)",
        borderRadius:"5px",
        marginLeft:"5rem",
        backgroundColor:"white",

        [theme.breakpoints.between('sm','lg')]: {
            height:"135px",
            width:"250px",
            marginLeft:"4rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"135px",
            width:"250px",
            marginLeft:"3rem",
        }
    },
    column_box:{
        height:"60px",
        width:"465px",
        border:"1px solid rgba(182, 183, 185, 0.18)",
        marginTop:"1rem",
        marginLeft:"1rem",
        borderRadius:"5px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        boxShadow: "0px 9.55269px 19.1054px rgba(145, 145, 145, 0.06)",
        backgroundColor:"white",

        [theme.breakpoints.between('xs','lg')]: {
            height:"30px",
            width:"250px",
            marginTop:"0.6rem"
        }
    },
    dot_1:{
        color:"#F29494",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px !important"
        }
    },
    dot_2:{
        color:"#F2AE72",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px !important"
        }
    },
    dot_3:{
        color:"#01CA8E",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px !important"
        }
    },
    column_text:{
        fontSize:"15px",
        color:"#383F5B",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"8px"
        }
    },
    button:{
        height:"29px",
        width:"95px",
        backgroundColor:"#F2AE72",
        borderRadius:"20px",
        textAlign:"center",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px",
            width:"51px",
            borderRadius:"10px",
        }
    },
    button_text1:{
        fontSize:"13px",
        color:"white",
        marginTop:"5px",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"8px",
            marginTop:"1.5px"
        }
    },
    button_2:{
        height:"29px",
        width:"29px",
        backgroundColor:"rgba(242, 174, 114, 0.15)",
        borderRadius:"20px",
        textAlign:"center",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px",
            width:"15px",
            borderRadius:"10px",
        }
    },
    price_1:{
        fontSize:"18px",
        color:"#383F5B",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"10px"
        },
    },
    button_text2:{
        fontSize:"15px",
        color:"#F2AE72",
        marginTop:"5px",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"8px",
            marginTop:"1px"
        }
    },
    button_3:{
        height:"29px",
        width:"95px",
        backgroundColor:"#F29494",
        borderRadius:"20px",
        textAlign:"center",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px",
            width:"51px",
            borderRadius:"10px",
        }
    },
    button_text3:{
        fontSize:"13px",
        color:"white",
        marginTop:"5px",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"8px",
            marginTop:"1.5px"
        }
    },
    button_4:{
        height:"29px",
        width:"29px",
        backgroundColor:"rgba(242, 148, 148, 0.15)",
        borderRadius:"20px",
        textAlign:"center",

        [theme.breakpoints.between('xs','lg')]: {
            height:"15px",
            width:"15px",
            borderRadius:"10px",
        }
    },
    button_text4:{
        fontSize:"15px",
        color:"#F29494",
        marginTop:"5px",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"8px",
            marginTop:"1px"
        }
    },
    row_Box:{
        height:"140px",
        width:"140px",
        border:"1px solid #F4F4F4",
        borderRadius:"5px",
        boxShadow: "0px 14.329px 38.2108px rgba(198, 195, 195, 0.2)",
        marginLeft:"2rem",
        textAlign:"center",
        backgroundColor:"white",

        [theme.breakpoints.between('sm','lg')]: {
            height:"75px",
            width:"75px",
            marginLeft:"1rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            height:"75px",
            width:"75px",
            marginLeft:"0rem"
        }
    },
    row:{
        display:"flex",
        flexDirection:"row",
        marginTop:"2rem",
        marginLeft:"3rem",

        [theme.breakpoints.between('sm','lg')]: {
            marginLeft:"3rem"
        },
        [theme.breakpoints.between('xs','sm')]: {
            marginLeft:"1.5rem",
            justifyContent:"space-evenly"
        }
    },
    row_Text:{
        fontSize:"15px",
        fontWeight:"500",
        color:"#383F5B",

        [theme.breakpoints.between('xs','lg')]: {
            fontSize:"8px"
        }
    },
    img:{
        marginTop:"1rem",

        [theme.breakpoints.between('xs','lg')]: {
            height:"25px",
            marginTop:"0.5rem"
        }
    },
    hr:{
        position:"absolute",
        top:"30%",
        left:"5%"
    },
    vr:{
        position:"absolute",
        top:"29%",
        left:"5%"
    },
    vr2:{
        position:"absolute",
        top:"84%",
        left:"5%"
    },
    design:{
        position:"absolute",
        right:"-12%",
        top:"35%",

        [theme.breakpoints.between('sm','md')]: {
            height:"60px",
            right:"0%",
            position:"absolute"
        },
        [theme.breakpoints.between('md','lg')]: {
            height:"60px",
            right:"5%"
        },
        [theme.breakpoints.between('xs','sm')]: {
            display:"none"
        },
    },
    arrow_text:{
        display:"flex",
         flexDirection:"row",
         alignItems:"center",

        [theme.breakpoints.between('xs','sm')]: {
            justifyContent:"center"
        },
    }
}))

const Section_5 = () => {

    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Box className={classes.container}>
                <Box className={classes.left_side}>
                    <p className={classes.right_text1}>Feedback Hub</p>
                    <p className={classes.right_text2}>All your customer feedback in one place.</p>
                    <p className={classes.right_text3}>Centralize product feedback from all tools and channels, at scale. Save time and get a comprehensive overview of customer needs.</p>
                    <Box className={classes.arrow_text} style={{}}>
                        <p className={classes.right_text4}>Explore our integration</p>
                        <ArrowForwardIcon className={classes.arrow_icon}/>
                    </Box>
                </Box>
                <Box className={classes.right_side}>
                    <Box>
                         <Box className={classes.bigbox_container}>
                             <Box className={classes.big_box}>
                                 <Box className={classes.column_box}>
                                     <FiberManualRecordIcon className={classes.dot_1}/>
                                    <p className={classes.column_text}>Pay with Bitcoins</p>
                                    <Box className={classes.button}>
                                        <p className={classes.button_text1}>Must Have</p>
                                    </Box>
                                    <Box className={classes.button_2}>
                                        <p className={classes.button_text2}>40</p>
                                    </Box>
                                    <p className={classes.price_1}>$10,000</p>
                                </Box>
                                <Box className={classes.column_box}>
                                    <FiberManualRecordIcon className={classes.dot_2}/>
                                    <p className={classes.column_text}>Pay with Bitcoins</p>
                                    <Box className={classes.button_3}>
                                        <p className={classes.button_text3}>Must Have</p>
                                    </Box>
                                    <Box className={classes.button_4}>
                                        <p className={classes.button_text4}>40</p>
                                    </Box>
                                    <p className={classes.price_1}>$5,000</p>
                                </Box>
                                <Box className={classes.column_box}>
                                    <FiberManualRecordIcon className={classes.dot_3}/>
                                    <p className={classes.column_text}>Pay with Bitcoins</p>
                                    <Box className={classes.button}>
                                        <p className={classes.button_text1}>Must Have</p>
                                    </Box>
                                    <Box className={classes.button_2}>
                                        <p className={classes.button_text2}>40</p>
                                    </Box>
                                    <p className={classes.price_1}>$6,000</p>
                                </Box>
                            </Box>
                         </Box>
                         <Box className={classes.row}>
                             <Box className={classes.row_Box}>
                                <Image src={Arrows} className={classes.img} />
                                <p className={classes.row_Text}>Identify <br/> priorities</p>
                             </Box>
                             <Box className={classes.row_Box}>
                                <Image src={Boxes} className={classes.img} />
                                <p className={classes.row_Text}>Push to <br/> Jira, trello</p>
                             </Box>
                             <Box className={classes.row_Box}>
                                <Image src={Maps} className={classes.img} />
                                <p className={classes.row_Text}>Track <br/> priorities</p>
                             </Box>
                         </Box>
                         {/* <Image src={Lines_hr} className={classes.hr} />
                         <Image src={Lines_vr} className={classes.vr} />
                         <Image src={Lines_vr} className={classes.vr2} /> */}
                    </Box>
                </Box>
                <Image src={Design} className={classes.design}/>
            </Box>
        </Container>
    )
}

export default Section_5

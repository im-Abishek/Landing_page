import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Box, Image } from "@mui/system";
import Standmen from "../images/section_8/Cashew.svg";
import Tickbox from "../images/section_8/tickbox.svg";
import colorRect from "../images/section_8/Rectangle.svg";
import Triangle from "../images/section_8/base.svg";
import illustration from "../images/section_8/Illustration.svg";
import { red } from "@mui/material/colors";
const useStyles = makeStyles((theme) => ({
  Main: {
    display: "flex",
    width: "100%",
    height:'fit-content',
    flex: 1,
    // height: "100vh",
    position: " relative",
    // flexDirection:'column',
    padding:'30px 0px 30px 0px',
    [theme.breakpoints.down('lg')]:{
      padding:'30px 60px 30px 0px',
     
     },
    [theme.breakpoints.down('sm')]:{
     display:'flex',
     flexDirection:'column-reverse',
     padding:'30px 5px 30px 0px',
    
    },
  },

  Leftside: {
    display: "flex",
    flex: 0.49,
    [theme.breakpoints.down('md')]:{
      flex: 0.40,
     
     },
     Cashewimg:{
      [theme.breakpoints.down('xs')]:{
      maxWidth:200,
      maxHeight:200
     
      }, 
     },
  },
  Rightside: {
    display: "flex",
    flex: 0.51,
    flexDirection: "column",
    paddingLeft:'20px',
    // overflowX: 'hidden',
    [theme.breakpoints.down('md')]:{
      flex: 0.60,
      paddingLeft:'0px',
     },
  },
  // Align_box: {
  //   display: "flex",
  //   flexDirection: "column",
    
  //   position:'relative',
  //   zIndex:'1'
  // },
  // Align_box1: {
  //   width: 210,
  //   height: 100,

  // },
  // Align_box2: {
  //   width: 210,
  //   height: 100,
  // },
  // Align_box3: {
  //   width: 210,
  //   height: 100,
  // },


  ////////Right side
  Title:{
     backgroundColor: "linear-gradient(#FF9B61 0.29%, #7073BE 56.38%)",
    // color: 'linear-gradient(to right, #430089, #82ffa1)', 
    // fontColor: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",  
    //  fontStyle:'italic',
    [theme.breakpoints.down('md')]:{
      fontSize:14
      },
  },
  Work: {
    marginBottom: "12px",
    fontWeight:'900',
    fontStyle:'italic',
    [theme.breakpoints.down('md')]:{
      fontSize:28
      },
  },
  H6_content:{
    marginTop:'12px',
    color:'#000000',
    opacity: 0.6,
    width:'84%',
    [theme.breakpoints.down('md')]:{
     fontSize:12
     },
  },
  SixBoxes:{
    display: "flex!important",
    flexDirection: "row",
    flexWrap: "wrap!important",
    justifyContent:'space-between',
    position:'relative',
    zIndex:'1'
  

  },
  Boxes:{
    width: "278px",
    height: "106px",
    boxShadow: "8px 8px 43px -6px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
    background: "#FFFFFF",
    marginBottom:'10px',
    marginTop:'5px',
    padding:15,
    [theme.breakpoints.down('lg')]:{
      width: "220px",
    height: "100px",
     },
     [theme.breakpoints.down('md')]:{
      width: "180px",
    height: "80px",
     },
    [theme.breakpoints.down('sm')]:{
      width: "170px",
    height: "80px",
     },
     [theme.breakpoints.down('xs')]:{
      width: "150px",
    height: "80px",
     },
  },
  VioletTriangle:{
    position:'absolute',
    right:-2,
    top:-150,
    width:'300px',
    height:'520px',
    overflowX: 'hidden',
    [theme.breakpoints.down('lg')]:{
      width:'140px',
    height:'420px',
    top:0,
      },
      [theme.breakpoints.down('sm')]:{
        width:'120px',
      height:'420px',
      top:-50,
        },
     
  },
  Boxh5_content:{
  color:'#19233C',
  fontWeight:'bold',
  [theme.breakpoints.down('lg')]:{
    fontSize:16
    },
  [theme.breakpoints.down('md')]:{
   fontSize:12
   },

  },
  BoxP_content:{
    color: '#000000',
    opacity:0.5,
    [theme.breakpoints.down('lg')]:{
      fontSize:14
      },
      [theme.breakpoints.down('md')]:{
        fontSize:10
      },
  }

}));

const List = [
  {
    Content: {
      title: "Business Consulting",
      Subtitle: "These cases are perfectly simple and easy to distinguish.",
    },
  },
  {
    Content: {
      title: "Financial Consulting",
      Subtitle: "These cases are perfectly simple and easy to distinguish.",
    },
  },
  {
    Content: {
      title: "Market Research",
      Subtitle: "These cases are perfectly simple and easy to distinguish.",
    },
  },
  {
    Content: {
      title: "Risk Management",
      Subtitle: "These cases are perfectly simple and easy to distinguish.",
    },
  },
  {
    Content: {
      title: "Mortgage Advisor",
      Subtitle: "These cases are perfectly simple and easy to distinguish.",
    },
  },
  {
    Content: {
      title: "Savings Money",
      Subtitle: "These cases are perfectly simple and easy to distinguish.",
    },
  },
];
export const Section_8 = () => {
  const classes = useStyles();
  return (
    <>
    <section style={{backgroundColor:'#FFFFFF'}}>
       <Box
          component="img"
          sx={{  
            maxHeight: { xs: 400, sm: 380, md: 300, lg: 640,xl:630},
            maxWidth: { xs: 310, sm: 400, md: 300, lg: 640 ,xl:630}
          }}
          alt="The house from the offer."
          src={Triangle}
          className={classes.VioletTriangle} />
    {/* <img src={} ></img> */}
      <Container className={classes.Root}>
        <Box className={classes.Main}>
          <Box className={classes.Leftside}>
            {/* <Box className={classes.Cashewimg}
          component="img"
          sx={{  
            position: "absolute",
            top: 30,
            maxHeight: { xs: 500, sm: 500, md: 500, lg: 540, xl: 500 },
            maxWidth: { xs: 410, sm: 500, md: 500, lg: 540, xl: 500 },
          }}
          alt="The house from the offer."
          src={Standmen} />
            <Box className={classes.Align_box}>
              <img src={Tickbox} className={classes.Align_box1} />
              <img src={Tickbox} className={classes.Align_box2} />
              <img src={Tickbox} className={classes.Align_box3} />
            </Box> */}
             <Box className={classes.Cashewimg}
          component="img"
          sx={{  
            maxHeight: { xs: 400, sm: 400, md: 500, lg: 550},
            maxWidth: { xs: 330, sm: 300, md: 450, lg: 500},
          }}
          src={illustration} />
          </Box>
          <Box className={classes.Rightside}>
            <h6 className={classes.Title} >We are Specialist</h6>
            {/* <GradientText data='today will be a really good day' gradient={red} animating={false} /> */}
            <h1 className={classes.Work}>Work Features</h1>
            <img src={colorRect} width="70px" />
            <h6 className={classes.H6_content} >
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice.
            </h6>
            <Box className={classes.SixBoxes}>
            {List.map((items, index) => {
              return (
                <Box className={classes.Boxes}>
                  <h5 className={classes.Boxh5_content}>{items.Content.title}</h5>
                  <p className={classes.BoxP_content}>{items.Content.Subtitle}</p>
                </Box>  
              );
            })}
             </Box>
          </Box>
        </Box>
      </Container>
      </section>
    </>
  );
};

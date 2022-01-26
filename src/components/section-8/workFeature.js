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
    height: "fit-content",
    flex: 1,
    position: "relative",
    padding: "30px 0px 30px 0px",
    marginTop:200,
    [theme.breakpoints.down("lg")]: {
      padding: "30px 50px 30px 0px",
      marginTop:'-50px!important',
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      padding: "30px 5px 30px 0px",
      marginTop:'0px!important',
    },
  },

  Leftside: {
    display: "flex",
    flex: 0.49,
    paddingTop:'50px',
    [theme.breakpoints.down("md")]: {
      flex: 0.40,
    },
    Cashewimg: {
      marginTop:50,
      [theme.breakpoints.down("xs")]: {
        maxWidth: 200,
        maxHeight: 200,
      },
    },
  },
  Rightside: {
    display: "flex",
    flex: 0.51,
    flexDirection: "column",
    paddingLeft: "20px",
    // overflowX: 'hidden',
    position: "relative",
    [theme.breakpoints.between('sm','lg')]: {
      flex: 0.60,
      paddingLeft: "22px",
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: "2px",
    },
  },

  ////////Right side
  Title: {
    backgroundColor: "linear-gradient(#FF9B61 0.29%, #7073BE 56.38%)",
    // color: 'linear-gradient(to right, #430089, #82ffa1)',
    // fontColor: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    //  fontStyle:'italic',
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  Work: {
    marginBottom: "12px",
    fontWeight: "900!important",
    fontStyle: "italic!important",
    [theme.breakpoints.down("md")]: {
      fontSize: 28,
    },
  },
  Color_Rectangle:{
    [theme.breakpoints.down("md")]: {
      width:'50px'
    },
  },
  H6_content: {
    marginTop: "12px",
    color: "#000000",
    opacity: 0.6,
    width: "83%",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  SixBoxes: {
    display: "flex!important",
    flexDirection: "row",
    flexWrap: "wrap!important",
    justifyContent: "space-between",
    position: "relative",
    zIndex: "1",
  },
  Boxes: {
    width: "278px",
    height: "106px",
    boxShadow: "8px 8px 43px -6px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
    background: "#FFFFFF",
    marginBottom: "10px",
    marginTop: "5px",
    padding: 15,
    [theme.breakpoints.down("lg")]: {
      width: "220px",
      height: "100px",
    },
    [theme.breakpoints.down("md")]: {
      width: "170px",
      height: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "163px",
      height: "80px",
    },
    [theme.breakpoints.down("xs")]: {
     
    },
  },
  VioletTriangle: {
    position: "absolute",
    right: -186,
    top:-150,
    width: "300px",
    height: "520px",
    overflowX: "hidden",
    // display:'none',
    [theme.breakpoints.down("lg")]: {
      width: "190px",
      height: "520px",
      top: 20,
      right: -24,
    },
    [theme.breakpoints.down("md")]: {
      top: -33,
      right: -24,
    },
    [theme.breakpoints.down("sm")]: {
      top: -3,
      right: -74,
    },
  },
  Boxh5_content: {
    color: "#19233C",
    fontWeight: "bold",
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  BoxP_content: {
    color: "#000000",
    opacity: 0.5,
    [theme.breakpoints.down("lg")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
    },
  },
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
      <section style={{ backgroundColor: "#FFFFFF" }}>
        {/* <img src={} ></img> */}
        <Container className={classes.Root}>
        
          <Box className={classes.Main}>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 290, sm: 300, md: 310, lg: 640, xl: 630 },
              maxWidth: { xs: 220, sm: 170, md: 290, lg: 640, xl: 630 },
            }}
            alt="The house from the offer."
            src={Triangle}
            className={classes.VioletTriangle}
          />
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
              <Box  className={classes.Cashewimg}
              
                component="img"
                sx={{
                  maxHeight: { xs: 400, sm: 400, md: 500, lg: 550 },
                  maxWidth: { xs: 330, sm: 300, md: 450, lg: 500 },
                  
                }}
                src={illustration}
              />
            </Box>
            <Box className={classes.Rightside}>
              <h6 className={classes.Title} id="title" >We are Specialist</h6>
              <h1 className={classes.Work}>Work Features</h1>
              <img src={colorRect} width="70px" className={classes.Color_Rectangle}/>
              <h6 className={classes.H6_content}>
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice.
              </h6>
         
              <Box className={classes.SixBoxes}>
                {List.map((items, index) => {
                  return (
                    <Box className={classes.Boxes}>
                      <h5 className={classes.Boxh5_content}>
                        {items.Content.title}
                      </h5>
                      <p className={classes.BoxP_content}>
                        {items.Content.Subtitle}
                      </p>
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

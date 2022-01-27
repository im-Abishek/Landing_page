import { Container } from "@mui/material";
import React, { useContext } from "react";
import { Box } from "@mui/material";
// import Header from "../../Header/header";
import { Button } from "@mui/material";
import { Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Iamge1 from "../images/section_1/human.svg";
import Mace from "../images/section_1/mace.svg";
import Lawyer from "../images/section_1/lawyer.svg";
import weight from "../images/section_1/weightmachine.svg";
import human_1 from "../images/section_1/human1.svg";
import human_2 from "../images/section_1/human2.svg";
import human_3 from "../images/section_1/human3.svg";
import Main_BelowContent from "./mainPage_belowbox";
import "../../App.css";
import { Image } from 'react-bootstrap';
import '../../App.css'
import { NavBar } from "../../provider/NavBarProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 10,
    paddingTop: 20,
    marginBottom: 60,
    zIndex:1,
    
  //  background:"#EFF2F7"
  },
  Main: {
    display: "flex",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 70,
    },
  },
  Rectangle: {
    border: "2px solid #7073BE",
    display: "inline-block",
    width: 25,
    height: 0,
    marginRight: 10,
  },
  FilmWords: {
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  Bold_words: {
    fontStyle: "italic!important",
    fontWeight:'800',
    fontFamily:"sans-serif",
    fontSize: 64,
    color: "#19233C",
    paddingBottom: 16,
    [theme.breakpoints.down("md")]: {
      fontSize: 34,
    },
  },
  Bold_words_2:{
  paddingBottom:30,
  fontWeight:500 ,
  color:'#6D6D6D',
 [theme.breakpoints.down("md")]: {
  fontSize:12
},
[theme.breakpoints.down("sm")]: {
  paddingBottom:10,
},
  },
  Main_content: {
    flex: 0.5,
    paddingTop: 100,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingTop: 0, /// Add Header
    },
  },
  Picture_content: {
    flex: 0.5,
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  First_content: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  inside_btn: {
    width: 140,
    padding: "10px 20px 10px 20px!important",
    borderRadius: "2px!important",
    background: "#7073BE!important",
    textTransform: "none!important",
    marginRight: "30px!important",
    height: 51,
    [theme.breakpoints.down("md")]: {
      fontSize: "13px!important",
      width: 100,
      height: 42,
      padding: "2px 5px 2px 5px!important",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px!important",
      fontSize: "12px!important",
      width: 115,
      height: 45,
      marginBottom: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center!important",
      textAlign: "center",
    },
  },
  PlayButton: {
    marginRight: 20,
    marginTop: 10,
    marginLeft: 0,
    [theme.breakpoints.down("md")]: {
      marginLeft: -15,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: -10,
      marginTop: 5,
    },
  },
  Watchwords: {
    marginTop: 10,
    color: "#19233C",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
      marginLeft: -15,
    },
  },
  Underline: {
    width: "115px",
    height: "15px",
    marginTop: -6,
    color: "black",
    [theme.breakpoints.down("md")]: {
      width: "87px",
      marginLeft: -15,
    },
  },
  PlaybtnwithWatch: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
  },
  button_content: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  //right side contents // /// /// /// //

  image: {
    width: 400,
    height: 506,
    display: "flex",
    background: "transparent",

    [theme.breakpoints.down("md")]: {
      width: 300,
      height: 406,
    },
  },

  Main_img1: {
    position: "absolute",
    top: 40,
    right: 100,
    [theme.breakpoints.down("md")]: {
      width: 43,
      height: 43,
      right: 70,
    },
  },
  Main_img2: {
    position: "absolute",
    top: 220,
    right: 10,
    [theme.breakpoints.down("md")]: {
      width: 43,
      height: 43,
      right: 5,
    },
  },
  Main_img3: {
    position: "absolute",
    top: 70,
    left: 30,
    [theme.breakpoints.down("md")]: {
      width: 43,
      height: 43,
    },
  },
  Picture_box: {
    width: 165,
    height: 115,
    Radius: 1066,
    top: 370,
    left: 50,
    padding: 12,
    position: "absolute",
    background: "#FFFFFF",
    boxShadow: "0px 14px 28px rgba(0, 0, 0, 0.05)",
    borderRadius: "14px",
    [theme.breakpoints.down("md")]: {
      left: -30,
      top: 300,
      width: 160,
    },
    [theme.breakpoints.down("sm")]: {
      left: -5,
      top: 300,
      width: 145,
    },
  },
  images_1: {
    width: 43,
    borderRadius: 20,
    position: "absolute",
    left: 12,
  },
  images_2: {
    width: 45,
    borderRadius: 20,
    position: "absolute",
    left: 39,

    background: "#53D5BB",
  },
  images_3: {
    width: 45,
    borderRadius: 20,
    position: "absolute",
    left: 65,
    height: 46,
    background: "#FEAE29",
  },
  userCount: {
    width: 46,
    height: 46,
    borderRadius: "50%",
    background: "#7073BE",
    position: "absolute",
    left: 90,
    padding: "12px",
    color: "white",
    fontSize: 13,
  },
}));

const Main_properties = () => {
  const classes = useStyles();
  const {open,setOpen} = useContext(NavBar)
  return (
    <section style={{opacity: open ? 0.7 : 1,background: open ? "rgba(25, 35, 60, 0.1)":"#EFF2F7"}}>

      <Container className={classes.root}>
        {/* <Header/> */}
        <Box component="div" className={classes.Main}>
          <Box component="div" className={classes.Main_content}>
            <Box className={classes.First_content}>
              <span
                style={{ marginTop: "-5px" }}
                className={classes.Rectangle}
              ></span>
              <h6 className={classes.FilmWords}>Best law Film</h6>
            </Box>
            <h1 className={classes.Bold_words} id="Lawyer_text">
              The Lawyer You Choose will make a Difference
            </h1>
            <p className={classes.Bold_words_2}>
              we are providing the best law serivice for the people.We are
              provifing all kind of law services that you need.
            </p>
            <Box className={classes.button_content}>
              <Box className={classes.ButtonAlign}>
                <Button variant="contained" className={classes.inside_btn}>
                  Get started
                </Button>
              </Box>

              <Box className={classes.PlaybtnwithWatch}>
                <PlayArrowIcon className={classes.PlayButton} />
                <a href="#" className={classes.Watchwords}>
                  {" "}
                  Watch the Video
                </a>
                {/* <hr className={classes.Underline}/> */}
              </Box>
            </Box>
          </Box>
          <Box component="div" className={classes.Picture_content}>
            <Image src={Iamge1} className={classes.image} />
            <Image src={Mace} className={classes.Main_img1} />
            <Image src={Lawyer} className={classes.Main_img2} />
            <Image src={weight} className={classes.Main_img3} />
            <Box component="div" className={classes.Picture_box}>
              <p style={{ color: "#19233C" }}>Happy clients</p>
              <Image src={human_1} className={classes.images_1} />
              <Image src={human_2} className={classes.images_2} />
              <Image src={human_3} className={classes.images_3} />
              <span className={classes.userCount}>2K+</span>
            </Box>
          </Box>
        </Box>
      </Container>
      <Main_BelowContent />
    </section>
  );
};
export default Main_properties;

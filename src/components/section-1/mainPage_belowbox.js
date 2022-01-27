import React from "react";
import { Box } from "@mui/material";
// import Header from "../../Header/header";
import { Button } from "@mui/material";
import { Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Law from "../images/section_1/law.svg";
import Defent from "../images/section_1/defendant.svg";
import Feedback from "../images/section_1/feedback.svg";
import Award from "../images/section_1/award.svg";

const useStyles = makeStyles((theme) => ({
  root_content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 1000,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    height: 142,
    margin: "auto",
    background: "#FFFFFF",
    boxShadow: "0px 18px 36px rgba(0, 0, 0, 0.05)",
    borderRadius: "4px",
    marginTop: 50,
    position: "relative",
    top: 50,
    [theme.breakpoints.between('md','lg')]:{
      width: "85%",
    },
    [theme.breakpoints.down("md")]: {
      width: "85%",
      marginLeft: "5.5%",
      paddingLeft: 20,
      paddingRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:'15px 15px 15px 15px',
      },
  },
  main: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent:'space-between',
        
      },
  },
  Customer_count_img: {
    width: 59,
    height: 59,
    [theme.breakpoints.down("md")]: {
      width: 48,
      height: 55,
    },
    [theme.breakpoints.down("sm")]: {
        width: 32,
        height: 38,
      },
      [theme.breakpoints.down('xs')]:{
        width: 30,
        height: 33,
      }
  },
  Usernumners: {
    color: "#19233C",
    fontWeight: "bold",
    [theme.breakpoints.between('md','lg')]:{
      fontSize: 23,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: 12,
      }
     
  },
  usernumbers_1: {
    color: "#4C565D",
    [theme.breakpoints.between('md','lg')]:{
      fontSize: 14,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 11,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 9,
      },
      [theme.breakpoints.down('xs')]:{
        fontSize:8,
      }
  },
  UserTotlecount:{
    paddingLeft: 20,
    lineHeight:1,
  },
}));

const list = [
  {
    content: {
      image: Law,
      title: "789",
      subtitle: "Cases won",
    },
  },
  {
    content: {
      image: Defent,
      title: "170",
      subtitle: "Skilled lawyers",
    },
  },
  {
    content: {
      image: Feedback,
      title: "2387",
      subtitle: "Happy clients",
    },
  },
  {
      paddingLeft:25,
      paddingRight:2,
    content: {
      image: Award,
      title: "547",
      subtitle: "Happy clients",
    },
  },
];

const Main_BelowContent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root_content}>
      {list.map((items, index) => {
        return (
          <Box className={classes.main}>
          

            <img
              src={items.content.image}
              className={classes.Customer_count_img}
            />
            <Box style={{paddingLeft:items.paddingLeft,paddingRight:items.paddingRight }} className={classes.UserTotlecount}>
              <h3 className={classes.Usernumners}>{items.content.title}</h3>
              <span className={classes.usernumbers_1}>
                {items.content.subtitle}
              </span>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default Main_BelowContent;

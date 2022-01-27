import logo from '../logo.svg';
import '../App.css';
import Section_2 from '../components/section_2/section_2';
import { ThemeProvider } from '@mui/styles';
import ThemeComponent from '../components/Theme';
import Section_5 from '../components/section_5/section_5';
import Section_4 from '../components/section_4/section_4';
import Section_6 from '../components/section_6/section_6';
import Section_10 from '../components/section_10/section_10';
import Section_11 from '../components/section_11/section_11';
import Section_9 from '../components/section_9/section_9';
import Section_7 from '../components/section_7/section_7';
import Main_properties from '../components/section-1/main';
import Main_BelowContent from '../components/section-1/mainPage_belowbox';
import Section_3 from '../components/section-3/card-list';
import { Section_8 } from '../components/section-8/workFeature';
import Footer from '../components/Footer/footer';
import HeaderComponent from '../components/header_nav/nav';
import { useContext } from 'react';
import { NavBar } from '../provider/NavBarProvider';
import Box from '@mui/material/Box';




function LandingPage() {

  const {open,setOpen} = useContext(NavBar)

  return (
    
    <ThemeProvider theme={ThemeComponent}>
      <HeaderComponent/>
      <Box component = 'div' style={{opacity: open ? 0.7 : 1,background: open ? "rgba(25, 35, 60, 0.1)": null}}>
      <Main_properties/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
      <Section_6/>
      <Section_7/>
      <Section_8/>
      <Section_9/>
      <Section_10/>
      <Section_11/>
      <Footer/>
      </Box>
    </ThemeProvider>
    // opacity:open ? 0.5 : 1
  );
}

export default LandingPage;

import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from "../../partials/content/Portlet";
import { toAbsoluteUrl } from "../../../_metronic";
// Icon
import Devices from '@material-ui/icons/Devices';
// Code
import CodeExampleHome from "../../partials/content/CodeExampleHome";
// Bootstrap
import { Dropdown, Jumbotron } from "react-bootstrap";
import { 
  Drawer,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button, Container, makeStyles } from "@material-ui/core";
// Animations
import { Zoom, Slide, Grow, Fade } from '@material-ui/core';
import ContactUs from '../home/ContactUs';
//Date
import moment from "moment";
//Styles
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(0),
    padding: '15px 25px 5px 25px',
    borderRadius: '8px'
  },
  input: {
    display: 'none',
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
  },
  card: {
    maxWidth: 345,
    borderRadius: '0px',
    background: '#2cc26b',
  },
  media: {
    height: 140,
  },
  btn: {
    margin: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const TIME_OPTIONS = { hour12 : true, hour:  '2-digit', minute: '2-digit', second: '2-digit'};
  const DATE_OPTIONS = moment(new Date()).format('ddd MMM YYYY');

  /* LIST */
  const [state, setState] = React.useState({ top: false, left: false, bottom: false, right: false, });
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return; }
    setState({ ...state, [side]: open });
  };
  const sideList = side => (
  <div className={classes.list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)} >
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image="/media/project-web/nirvel.jpg" title="Nirvel Cosmetics" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">Nirvel Cosmetics</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Magento, CSS, HTML5, Javascript, PhotoShop, Dreamweaver
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image="/media/project-web/nuvitron.jpg" title="Nuvitron" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">Nuvitron</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            WordPress, CSS, HTML5, Javascript, PhotoShop, Dreamweaver
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image="/media/project-web/plugadosgames.jpg" title="Plugados Games" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">Plugados Games</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Angular, CSS, HTML5, TypeScript, JavaScript, PhotoShop
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image="/media/project-web/digitalsignsandprinting.jpg" title="Digital Signs and Printing" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">Digital Signs and Printing</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Prestashop, CSS, HTML5, Javascript, PhotoShop, Dreamweaver
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>);
  const fullList = side => (
    <div className={classes.fullList} role="presentation" >
      <ContactUs></ContactUs>
    </div>);
  return (
    <>
      <div className="row">
        <div className="col window-text-code">
        <div id="window">
            <div id="toolbar">
              <div className="top">
                <div id="lights">
                  <div className="light red"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>				
                  <div className="light yellow"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>
                  <div className="light green"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>
                </div>
                <div id="title"> <div className="folder"> <div className="tab"></div> <div className="body"></div> </div> d7c.info </div>
                <div id="bubble"> <div className="shine"></div> <div className="glow"></div> </div>
              </div>
            </div>
            <div id="body">{/*<span className="whiteCode">Last login: Tue Nov 12 09:12:11 on ttys006</span><br />*/}
              <p className="whiteCode">user:~ d7c$<span className="greenCode"> WEB DEVELOPMENT</span><div className="cursor"></div></p>
            </div>	
        </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="row">
            <div className="col-xs-6 col-sm-12 col-md-12 col-lg-12">
              <div className="kt-space-40" />
              <div className="row">
                <div className="col col-sm-4 col-md-4 col-lg-4">
                  <div className="content-center-box">
                    <Zoom in="true" style={{ transitionDelay: '1000ms' }}>
                      <img src={toAbsoluteUrl("/media/d7c/html.png")} title="" alt="" width="158px" height="auto" className="img-fluid"/>
                    </Zoom>
                  </div>
                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4">
                  <div className="content-center-box">
                    <Zoom in='true' style={{ transitionDelay: '1500ms' }}>
                      <img src={toAbsoluteUrl("/media/d7c/css.png")} title="" alt="" width="158px" height="auto" className="img-fluid"/>                 
                    </Zoom>
                  </div>
                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4">
                  <div className="content-center-box">
                    <Zoom in='true' style={{ transitionDelay: '2000ms' }}>
                      <img src={toAbsoluteUrl("/media/d7c/js.png")} title="" alt="" width="158px" height="auto" className="img-fluid"/>
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="kt-space-20" />
            </div>
            <div className="col col-sm-12 col-md-12 col-lg-12 window-subtext-code">
              <div className="kt-space-20" />
              <div id="toolbar-sub">
              <div className="top">
                <div id="lights">
                  <div className="light red"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>				
                  <div className="light yellow"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>
                  <div className="light green"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>
                </div>
                <div id="title"> <div className="folder"> <div className="tab"></div> <div className="body"></div> </div> Web Development </div>
                <div id="bubble"> <div className="shine"></div> <div className="glow"></div> </div>
              </div>
            </div>
              <div className="text-code-body">
                <p className="whiteCode">Last login: {(DATE_OPTIONS)} {(new Date()).toLocaleTimeString('en-US', TIME_OPTIONS)} on ttys006</p>
                <p className="whiteCode">user:~ web_dev$<span className="greenCode"> help</span></p>                  
                <p className="greenCode">Choose proven technologies, ensuring unlimited possibilities of developing your site.</p>                  
                <p className="line-code-web"><span className="whiteCode">user:~ web_dev$</span> ./web_development start</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="kt-space-20" />
          <Slide direction="up" in='true' {...(true ? { timeout: 2200 } : 2200)} mountOnEnter unmountOnExit>
            <Portlet fluidHeight={true} className="window-glass">
              <PortletHeader title="Web Development" toolbar={
              <PortletHeaderToolbar>
                <Button variant="contained" color="primary" className={classes.btn} onClick={toggleDrawer('left', true)}> <Devices/> </Button>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}> {sideList('left')} </Drawer>
              </PortletHeaderToolbar> } />
              <PortletBody> 
                <div className="img-section">
                  {/*<Slide direction="up" in='true' {...(true ? { timeout: 2000 } : 2000)} mountOnEnter unmountOnExit></Slide>*/}
                  <Fade in='true' style={{ transitionDelay: '2800ms' }}>
                    <img src={toAbsoluteUrl("/media/d7c/web_dev.png")} title="" alt="" width="609px" height="auto" className="img-fluid"/>
                  </Fade>
                </div>
              </PortletBody>
            </Portlet>
          </Slide>
        </div>
      </div>
      <div className="row">
        <Slide direction="up" in='true' {...(true ? { timeout: 6000 } : 6000)} mountOnEnter unmountOnExit>
          <div className="col">
            <div className="kt-space-20" />
            <CodeExampleHome jsCode={jsCodeWeb} beforeCodeTitle="">
              <div className="kt-section">
                <Jumbotron>
                  <Container>
                    <div className="row">
                      <div className="col content-center-box"> 
                      <Button variant="outlined" component="span" color="primary" className={classes.button} onClick={toggleDrawer('bottom', true)}>
                      <h2>Let's design now!</h2>
                      </Button>
                      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}> {fullList('bottom')} </Drawer>
                      </div>
                    </div>
                  </Container>
                </Jumbotron>
              </div>
            </CodeExampleHome>
          </div>
        </Slide>
      </div>
      <div className="row">
        <div className="col window-text-code">
          <div id="window">
              <div id="toolbar">
                <div className="top">
                  <div id="lights">
                    <div className="light red"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>				
                    <div className="light yellow"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>
                    <div className="light green"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>
                  </div>
                  <div id="title"> <div className="folder"> <div className="tab"></div> <div className="body"></div> </div> d7c.info </div>
                  <div id="bubble"> <div className="shine"></div> <div className="glow"></div> </div>
                </div>
              </div>
              <div id="body">
                <p className="whiteCode">user:~ d7c$<span className="greenCode"> SOFTWARE DEVELOPMENT</span><div className="cursor"></div></p>
              </div>	
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="kt-space-20" />
          <Slide direction="up" in='true' {...(true ? { timeout: 2200 } : 2200)} mountOnEnter unmountOnExit>
            <Portlet fluidHeight={true} className="window-glass">
              <PortletHeader title="Software Development" toolbar={
              <PortletHeaderToolbar>
                <Button variant="contained" color="primary" className={classes.btn} onClick={toggleDrawer('left', true)}> <Devices/> </Button>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}> {sideList('left')} </Drawer>
              </PortletHeaderToolbar> } />
              <PortletBody> 
                  {/*<Slide direction="up" in='true' {...(true ? { timeout: 2000 } : 2000)} mountOnEnter unmountOnExit></Slide>*/}
                  <Fade in='true' style={{ transitionDelay: '2800ms' }}>
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="kt-space-20" />
                        <div className="row">
                          <div className="col col-sm-3 col-md-3 col-lg-3">
                            <div className="content-center-box">
                              <img src={toAbsoluteUrl("/media/d7c/php.png")} title="" alt="" width="158px" height="auto" className="img-fluid"/>
                            </div>
                          </div>
                          <div className="col col-sm-3 col-md-3 col-lg-3">
                            <div className="content-center-box">
                              <img src={toAbsoluteUrl("/media/d7c/db.png")} title="" alt="" width="158px" height="auto" className="img-fluid"/>
                            </div>
                          </div>
                          <div className="col col-sm-3 col-md-3 col-lg-3">
                            <div className="content-center-box">
                              <img src={toAbsoluteUrl("/media/d7c/java.png")} title="" alt="" width="158px" height="auto" className="img-fluid"/>
                            </div>
                          </div>
                          <div className="col col-sm-3 col-md-3 col-lg-3">
                            <div className="content-center-box">
                              <img src={toAbsoluteUrl("/media/d7c/net.png")} title="" alt="" width="158px" height="auto" className="img-fluid"/>
                            </div>
                          </div>
                        </div>
                        <div className="kt-space-20" />
                      </div>
                    </div>
                  </Fade>
              </PortletBody>
            </Portlet>
          </Slide>
        </div>
      </div>
      <div className="kt-space-40" />

      <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-12 window-subtext-code">
          <div className="kt-space-20" />
          <div id="toolbar-sub">
            <div className="top">
              <div id="lights">
                <div className="light red"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>				
                <div className="light yellow"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>
                <div className="light green"> <div className="glyph"></div> <div className="shine"></div> <div className="glow"></div> </div>
              </div>
              <div id="title"> <div className="folder"> <div className="tab"></div> <div className="body"></div> </div> Software Development </div>
              <div id="bubble"> <div className="shine"></div> <div className="glow"></div> </div>
            </div>
          </div>
          <div className="text-code-body">
            <p className="whiteCode">Last login: {(DATE_OPTIONS)} {(new Date()).toLocaleTimeString('en-US', TIME_OPTIONS)} on ttys006</p>
            <p className="whiteCode">user:~ soft_dev$<span className="greenCode"> help</span></p>                  
            <p className="greenCode">Choose proven technologies, ensuring unlimited possibilities of developing your site.</p>                  
            <p className="line-code-soft"><span className="whiteCode">user:~ soft_dev$</span> ./software_development start</p>
          </div>
        </div>
      </div>
      <div className="row">
        <Slide direction="up" in='true' {...(true ? { timeout: 6000 } : 6000)} mountOnEnter unmountOnExit>
          <div className="col">
            <div className="kt-space-20" />
            <CodeExampleHome jsCode={jsCodeWeb} beforeCodeTitle="">
              <div className="kt-section">
                <Jumbotron>
                  <Container>
                    <div className="row">
                      <div className="col content-center-box"> 
                      <Button variant="outlined" component="span" color="default" className={classes.button} onClick={toggleDrawer('bottom', true)}>
                      <h2>Let's build something unique!</h2>
                      </Button>
                      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}> {fullList('bottom')} </Drawer>
                      </div>
                    </div>
                  </Container>
                </Jumbotron>
              </div>
            </CodeExampleHome>
          </div>
        </Slide>
      </div>
    </>
  );
}
const jsCodeWeb = `
/** contact form */
<div className="row">
  <div className="col-lg-6"><h1>Let's start now!</h1></div>
  <div className="col-lg-6">
    <ButtonToolbar>
      <Button variant="outline-dark" size="lg">Contact Us</Button>
    </ButtonToolbar>
  </div>
</div>
`;
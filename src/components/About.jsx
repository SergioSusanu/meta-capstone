import React, { useContext } from 'react'
import { ImagesPathContext } from "../data/InitialDataProvider";
import { useTheme } from "@mui/material/styles";
import Row from './common/Row';
import GridWrapper from './common/GridWrapper';
import { Grid, Typography } from '@mui/material';
import MainTitle from './common/MainTitle';

const About = () => {

    const {imagesPath} = useContext(ImagesPathContext);
     const theme = useTheme()

  return (
            <Row component="section" extraPadding>
                <GridWrapper>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <MainTitle 
                                title="Little Lemon"
                                subTitle="Chicago"
                                titleComponent='h2'
                                subtitleComponent='h2'
                                titleTheme='dark'
                            />
                             <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </Typography>
                        </Grid>
                        <Grid item  xs={12} sm={6} 
                        sx={{textAlign:{xs:'center', sm:'right'} }}>
                            <img src={imagesPath+"chef1.png"} />
                          <img src={imagesPath+"chef2.png"} />
                        </Grid>
                    </Grid>
                </GridWrapper>
            </Row>

//    <section className="about">
//     <div className="wrapper">
//         <div className="row">
//             <div className="left">
//                 <h2 className='primary-green'>About <span className='primary-yellow'>Little Lemon</span></h2>
//                 <p className='primary-green'>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//                 </p>
//             </div>
//             <div className="right">
//                 <img src={imagesPath+"chef1.png"} />
//                 <img src={imagesPath+"chef2.png"} />
//             </div>
//         </div>
//     </div>
//    </section>
  )
}

export default About
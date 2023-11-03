import Carousel from 'react-bootstrap/Carousel';
import image1 from "../assets/doctor.jpg";
import image2 from '../assets/donate.jpg'
import image3 from '../assets/maternal.jpg';
import image4 from '../assets/child.jpg';
import image5 from '../assets/nutrition.jpg';
import image6 from '../assets/wash.jpg';

import Box from '@mui/material/Box';

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    width: '1rem',
    height: '10rem',
};

export default function Carousels() {
    return (
        <div className="landing-container">
                <div>
                    <h1 className="page-heading"> Advancing access to health worldwide</h1>
                </div>
                <div>
                    <Carousel className="carousel">
                        <Carousel.Item>
                            <img src={image1} style={{ height: '400px', width: '700px' }} />
                            <Carousel.Caption>
                                <h3 className='car-text'>Deliver Healthcare</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={image2} style={{ height: '400px', width: '700px' }} />
                            <Carousel.Caption>
                                <h3 className='car-text'>Expand Access to Medicines</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={image3} style={{ height: '400px', width: '700px' }} />
                            <Carousel.Caption>
                                <h3 className='car-text'>Improve Maternal Health </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={image4} style={{ height: '400px', width: '700px' }} />
                            <Carousel.Caption>
                                <h3 className='car-text'>Reduce Child Mortality</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={image5} style={{ height: '400px', width: '700px' }} />
                            <Carousel.Caption>
                                <h3 className='car-text'>Nutrition</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={image6} style={{ height: '400px', width: '700px' }} />
                            <Carousel.Caption>
                                <h3 className='car-text'>WASH Practices</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Box sx={{ ...commonStyles, borderBottom: 1, width: '1000px' }} />
                    </Box>
                </div>
        </div>
    )
}

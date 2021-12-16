import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Banner.css';
import { Button } from "@material-ui/core";
//import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Search from './Search';
import Card from './Card'
import { useHistory } from "react-router-dom";
import Carousel, { consts } from "react-elastic-carousel";




function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);


  const handleClick = () => {
    setShowSearch((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowSearch(false);
  };



  return (
    <div className='banner'>



      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <div className='banner-info'>
              <h3>Sri Lankan Experience</h3>
              <h1>Best Place Ever</h1>
              <Button onClick={() => history.push('./search')} variant='outlined'>Explore Nearby</Button>

            </div>
          </Col>
          <Col xs={12} md={8}>
            {/* <Search /> */}
            {/* <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Search Dates": ""}
                </Button>  */}



            <Carousel
              itemsToShow={6}
              itemPosition={consts.START}

              enableAutoPlay
              autoPlaySpeed={1500}
              showArrows
              showEmptySlots
            >
              <Card />

            </Carousel>
            {/* <Col xs={12} md={4}>
<Card
 src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
 title="Unique stays"
 description="Spaces that are more than just a place to sleep."
 price="£150/night"/>
</Col>
<Col xs={12} md={4}>
<Card
 src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
 title="Unique stays"
 description="Spaces that are more than just a place to sleep."/>
</Col>   */}







          </Col>

        </Row>
      </Container>


    </div>
  )
}

export default Banner





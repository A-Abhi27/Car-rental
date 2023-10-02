import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import LocalGasStationTwoToneIcon from '@mui/icons-material/LocalGasStationTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import ElectricCarTwoToneIcon from '@mui/icons-material/ElectricCarTwoTone';
import './cards.css';
import { Button} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Cards = ({
  poster,
  title,
  date,
  carclass
}) => {


  //implementing loading skeleton
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])


  //render data based on provided props
  return (
    isLoading
      ?
      <div className="car">
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton height={600} duration={1} />
        </SkeletonTheme>
      </div>
      :
      // <Link to={`/${title}`} style={{ textDecoration: "none" }}>
        <div className="car">
          <img
            className="poster"
            src={poster}
            alt={title}
          />
          <div className='details'>
            <b className="title">{title}</b>
            <div className="subTitle">{date}</div>
          </div>
          {/* hardcoding some values due to absebce of data */}
          <div className='details'>
            <div className='detail-element'><PeopleTwoToneIcon style={{marginRight:"5px"}}/>4 People</div>
            <div className='detail-element'><LocalGasStationTwoToneIcon style={{marginRight:"5px"}}/>Hybrid</div>
          </div>
          <div className='details'>
            <div className='detail-element'><SpeedTwoToneIcon style={{marginRight:"5px"}}/>6.1 km/ 1-litre</div>
            <div className='detail-element'><ElectricCarTwoToneIcon style={{marginRight:"5px"}}/>Automatic</div>
          </div>
          <hr style={{width:"80%"}}></hr>
          <div className='pricing'>
            <div className='detail-element' style={{fontSize:"25px"}}>$440 <span style={{fontSize:"14px"}}>/month</span></div>
            <div className='pricing'>
            <button className='heart-button'><FavoriteBorderIcon/></button>
              <Button variant='contained' style={{
                borderRadius: 12,
                padding: "6px 15px",
              }}>Rent now</Button></div>
          </div>
        </div>
      // </Link>
  );
};

export default Cards;
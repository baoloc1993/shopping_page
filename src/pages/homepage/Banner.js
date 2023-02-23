import React from "react";
import classes from './Banner.module.css';
import bannerImage from '../../img/banner1.jpg';

function Banner() {
  return (
    <div className={classes.banner} style={{      backgroundImage: `url(${bannerImage})`  } }>
        <div className={classes["banner-content"]}>
          <p>NEW INSPIRATION 2020</p>
          <h3>20% OFF ON NEW SEASON</h3>
          <button className={classes.btn}>Browse Collections</button>
        </div>
      </div>
  );
}

export default Banner;

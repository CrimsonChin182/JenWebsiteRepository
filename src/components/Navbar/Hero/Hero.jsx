import React, { useEffect } from "react";
import styles from './Hero.module.css';
import { Navbar } from '../Navbar';
import { getImageUrl } from '../../../utils';

const preloadImages = (urls) => { /* pre load images since lazy loading and async decoding did not fix*/
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };


export const Hero = () => {
    useEffect(() => {
      const imageUrls = ["/JenImg.png"]; 
      preloadImages(imageUrls);
    }, []);

    return <section className={styles.row} id="about">
    <div classname={styles.container}>
      <div className={styles.content}>
        <p className={styles.description}>
            <img className={styles.imgJen} src={"/JenImg2.png"}/>
                In all my years, I have never considered myself an artist by any stretch of the imagination. I barely could draw a stick figure! Here I find myself later in life, diving head first into crafting! And now trying to take crafting to the next level! I enjoy making just about anything. I make wreaths out of ribbon, flowers, deco mesh- you name it! I love working with wood and paint as well as decoupaging. I have been known to hit a few thrift stores and clearance aisles at local stores to breathe new life into items. Loving this new found creativity and more importantly the smiles on everyone's faces when they see what I have made. If you see something you like, let me know! If you have something in mind, I would love to partner with you and make it happen for you!! 
                </p>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
            <img className={styles.imgKris} src={"/letterKDecal.jpg"}/>
            Kris started her sewing hobby approximately 5 years ago. Currently she sews bowl cozies, drawstring bags, tote bags in various sizes, pillow covers, aprons, pillow cases, nesting baskets, and jar openers. Kris is known for her sewing creations being given as gifts to family, friends, and care givers. She is now elevating to the next adventure in sewing and joining up with Princess in Command Crafts to see where this partnership may take her sewing hobby!
                </p>
      </div>
    

    </div>
    </section>;
};

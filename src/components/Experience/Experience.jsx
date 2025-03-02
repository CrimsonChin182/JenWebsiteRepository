
import React, { useEffect } from "react";
import styles from "./Experience.module.css";

const preloadImages = (urls) => { /* pre load images since lazy loading and async decoding did not fix*/
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  export const Experience = () => {
    useEffect(() => {
      const imageUrls = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg", "/img10.jpg", "/img11.jpg", "/img12.jpg", "/img3.jpg", "/img14.jpg", ]; 
      preloadImages(imageUrls);
    }, []);


    return  ( <section className={styles.container} id="experience">
        <h2 className={styles.title}>Products</h2>
        <div className={styles.content}>
            <div className={styles.imageRow}>
                <div className={styles.imageColumn}>
                    <img
                        className={styles.Img}
                        src={"/img1.jpg"}

                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img2.jpg"}
                       
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img3.jpg"}
                        loading="lazy"
                        decoding="async"
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img4.jpg"}
                        loading="lazy"
                        decoding="async"
                        
                    />
                    </div>
                    <div className={styles.imageColumn}>
                    <img
                        className={styles.Img}
                        src={"/img5.jpg"}
                       
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img6.jpg"}
                       
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img7.jpg"}
                        loading="lazy"
                        decoding="async"
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img8.jpg"}
                        loading="lazy"
                        decoding="async"
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img9.jpg"}
                        loading="lazy"
                        decoding="async"
                        
                    />
                    </div>
                    <div className={styles.imageColumn}>
                    
                    <img
                        className={styles.Img}
                        src={"/img10.jpg"}
                       
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img11.jpg"}
                       
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img12.jpg"}
                        loading="lazy"
                        decoding="async"
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img13.jpg"}
                        loading="lazy"
                        decoding="async"
                        
                    />
                    <img
                        className={styles.Img}
                        src={"/img14.jpg"}
                        loading="lazy"
                        decoding="async"
                        
                    />
                </div>
            </div>
        </div>
    </section>
    );
}; 
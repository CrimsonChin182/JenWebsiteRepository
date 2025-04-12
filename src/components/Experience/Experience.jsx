import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";

const images = [
    { src: "/img1.jpg", category: "wallDecoration" },
    { src: "/img2.jpg", category: "shelfDecoration" },
    { src: "/img3.jpg", category: "wallDecoration" },
    { src: "/img4.jpg", category: "wreathDecoration" },
    { src: "/img5.jpg", category: "shelfDecoration" },
    { src: "/img6.jpg", category: "shelfDecoration" },
    { src: "/img7.jpg", category: "wallDecoration" },
    { src: "/img8.jpg", category: "wallDecoration" },
    { src: "/img9.jpg", category: "shelfDecoration" },
    { src: "/img10.jpg", category: "wallDecoration" },
    { src: "/img11.jpg", category: "shelfDecoration" },
    { src: "/img12.jpg", category: "wallDecoration" },
    { src: "/img13.jpg", category: "wallDecoration" },
    { src: "/img14.jpg", category: "wallDecoration" },
    { src: "/img17-min.jpg", category: "wallDecoration" },
    { src: "/img19-min.jpg", category: "wreathDecoration" },
    { src: "/img20.jpg", category: "wallDecoration" },
    { src: "/img21-min.jpg", category: "wallDecoration" },
    { src: "/img22.jpg", category: "wallDecoration" },
    { src: "/img24-min.jpg", category: "wreathDecoration" },
    { src: "/img25-min.jpg", category: "bagDecoration" },
    { src: "/img26-min.jpg", category: "bagDecoration" },
    { src: "/img27-min.jpg", category: "bagDecoration" },
    { src: "/img28-min.jpg", category: "bagDecoration" },
    { src: "/img29-min.jpg", category: "bagDecoration" },
    { src: "/img30-min.jpg", category: "bagDecoration" },
    { src: "/img31-min.jpg", category: "bagDecoration" },
    { src: "/img32-min.jpg", category: "bagDecoration" },
    { src: "/img33-min.jpg", category: "bagDecoration" },
    { src: "/img34-min.jpg", category: "bagDecoration" },
    { src: "/img35-min.jpg", category: "bagDecoration" },
    { src: "/img36-min.jpg", category: "wreathDecoration" },
    { src: "/img37-min.jpg", category: "shelfDecoration" },
    { src: "/img38-min.jpg", category: "wreathDecoration" },
    { src: "/img39-min.jpg", category: "shelfDecoration" },
    { src: "/img40-min.jpg", category: "wallDecoration" },
    { src: "/img41-min.jpg", category: "shelfDecoration" },
    { src: "/img42-min.jpg", category: "wallDecoration" },
    { src: "/img43-min.jpg", category: "wallDecoration" },
    { src: "/img44-min.jpg", category: "wreathDecoration" },
    { src: "/img45-min.jpg", category: "wreathDecoration" },
    { src: "/img46-min.jpg", category: "wallDecoration" },
    { src: "/img47-min.jpg", category: "wallDecoration" },
    { src: "/img48-min.jpg", category: "wallDecoration" },
    { src: "/img49-min.jpg", category: "wallDecoration" },
    { src: "/img50-min.jpg", category: "shelfDecoration" },
];

const preloadImages = (urls) => {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
};

export const Experience = () => {
    const [activeCategory, setActiveCategory] = useState("wallDecoration");

    useEffect(() => {
        preloadImages(images.map(img => img.src));
    }, []);

    const setCategory = (category) => {
        setActiveCategory(category);
    };

    const filteredImages = images.filter(img => img.category === activeCategory);

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Products</h2>
            <div className={styles.buttonDiv}>
                <div className={styles.margin}> </div>
                <button onClick={() => setCategory("wallDecoration")} className={styles.categoryBtn} >Wall Decorations</button>
                <button onClick={() => setCategory("shelfDecoration")} className={styles.categoryBtn} >Shelf Accessories</button>
                <button onClick={() => setCategory("wreathDecoration")} className={styles.categoryBtn} >Wreaths</button>
                <button onClick={() => setCategory("bagDecoration")} className={styles.categoryBtn} >Bags</button>
            </div>
            <div className={styles.content}>
                <div className={styles.imageRow}>
                    <div className={styles.imageColumn}>
                        {filteredImages.slice(0, Math.ceil(filteredImages.length / 3)).map((img, index) => (
                            <img key={index} className={styles.Img} src={img.src} />
                        ))}
                    </div>
                    <div className={styles.imageColumn}>
                        {filteredImages.slice(Math.ceil(filteredImages.length / 3), Math.ceil(2 * filteredImages.length / 3)).map((img, index) => (
                            <img key={index} className={styles.Img} src={img.src} />
                        ))}
                    </div>
                    <div className={styles.imageColumn}>
                        {filteredImages.slice(Math.ceil(2 * filteredImages.length / 3)).map((img, index) => (
                            <img key={index} className={styles.Img} src={img.src} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

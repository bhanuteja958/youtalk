import { FC } from "react";
import styles from './Home.module.css';
import Header from "../../Components/Header/Header";
import HeroImage from "../../Components/Common/SVGs/HeroImage";
import MaleProfilePic from "../../Components/Common/SVGs/MaleProfilePic";
import FemaleProfilePic from "../../Components/Common/SVGs/FemaleProfilePic";
import HandArtArrow from "../../Components/Common/SVGs/HandArtArrow";

const Home:FC<{}> = () => {
    return (
        <main className={styles.homeContainer}>
            <Header />
            <section className={styles.heroSection}>
                <HeroImage styles={styles.heroImage}/>
                <div className={styles.heroTextContainer}>
                    <div className={styles.heroText}>
                        <h1 className={styles.tagline}>Talk with people <br /> in a secure way</h1>
                        <h2 className={styles.subTagline}>Simple, Reliable, Private</h2>
                    </div>
                    <MaleProfilePic styles={styles.malePic} />
                    <FemaleProfilePic styles={styles.femalePic}/>
                </div>  
            </section>
            <HandArtArrow styles={styles.artArrow}/>
            <a href="#" className={styles.ctaLink}>Talk with people now</a> 
        </main>
    )
};

export default Home;
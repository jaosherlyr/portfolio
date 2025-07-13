import styles from "./HomePage.module.scss";

function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.placeholder}></div>
      <div className={styles.homedetails}>
        <span className={styles.title}>Hi! I am <span className={styles.name}>Sherly R. Jao</span></span>
        <span className={styles.subtitle}>Artist | Web Developer & Designer</span>
        <p>I code and I draw. Based in the Philippines. <br/>
        Just trying my best to navigate life with the skills I have. </p>
      </div>
    </div>
  )
}

export default Home
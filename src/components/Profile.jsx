import profile from "../assets/profile.jpg";
import styles from "./Profile.module.scss";

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.placeholder}></div>
            <img src={profile} alt="profile pic" />
        </div>
    );
}
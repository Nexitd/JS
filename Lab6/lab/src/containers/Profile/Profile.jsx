import React from 'react'
import styles from "./Profile.module.css"


const Profile = () => {
    return (
        <div className={styles.profile}>
            <h2>Login: {localStorage.getItem("login")}</h2>
            <h2>Password: {localStorage.getItem("password")}</h2>
        </div>
    )
}

export default Profile;
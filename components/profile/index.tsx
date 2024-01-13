import React from "react";
import styles from "./profile.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ProfileComponent = () => {
  return (
    <div className={styles.profile}>
      <h2>プロフィール</h2>
      <div
        style={{
          display: "flex", // Make this a flex container
          justifyContent: "center", // Center children horizontally
          alignItems: "center", // Center children vertically
          height: "auto", // Use 100% of the viewport height
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            position: "relative",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `url(/icon.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
      <div className={styles.me}>
        <h3>Mike</h3>
        <Link
          href="https://www.instagram.com/mike_money_life/"
          className={styles.instagram}
        >
          <FontAwesomeIcon icon={faInstagram} size="xs" />
        </Link>
      </div>
      <p>
        ・経済学部出身×株式投資歴4年
        <br />
        ・20代会社員
        <br />
        ・新卒一年目で資産120万円達成！
        <br />
      </p>
    </div>
  );
};

ProfileComponent.displayName = "Profile";
export const Profile = React.memo(ProfileComponent);

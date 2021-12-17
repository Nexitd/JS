import React from "react";
import { useSelector } from "react-redux";
import FriendCard from "../../components/FriendCard/FriendCard";
import styles from "./FriendList.module.css";

const FriendList = () => {
  const { friendsArr } = useSelector((state) => state.friends);

  return (
    <div>
      <h2>Friends List</h2>

      <div className={styles.friendsList}>
        {Boolean(friendsArr.length) ? (
          friendsArr.map((user, index) => (
            <FriendCard
              key={index}
              name={user.name}
              img={user.picture.medium}
              gender={user.gender}
              dob={user.dob}
              location={user.location}
              email={user.email}
              phone={user.phone}
              user={user}
            />
          ))
        ) : (
          <h2>No data</h2>
        )}
      </div>
    </div>
  );
};

export default FriendList;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData } from "../../store/reducers/users";
import UserCard from "../../components/UserCard/UserCard";
import Button from "../../components/Button/Button";
import Preloader from "../../components/Preloader/Preloader";
import styles from "./UserList.module.css";

const UserList = () => {
  const { usersData, initialLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getUsersData());
  };

  return (
    <div>
      {usersData.length === 0 && (
        <>
          <h1 style={{ textAlign: "center" }}>There are no users</h1>
          <Button onClick={getData} />
        </>
      )}

      <div className={styles.cards}>
        {initialLoading ? (
          <Preloader />
        ) : (
          usersData.map((user, index) => {
            return (
              <UserCard
                id={index}
                key={index}
                name={user.name}
                img={user.picture.medium}
                gender={user.gender}
                dob={user.dob}
                location={user.location}
                email={user.email}
                phone={user.phone}
                userObject={user}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default UserList;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";
import { getGender } from "../../Utils/getGender";
import { parseDate } from "../../Utils/parseDate";
import {
  addToFriendList,
  checkIsInList,
} from "../../store/reducers/bestFriends";
import styles from "./UserCard.module.css";

const UserCard = ({
  userObject,
  img,
  name,
  id,
  gender,
  dob,
  location,
  email,
  phone,
}) => {
  const { friendsArr } = useSelector((state) => state.friends);
  const [friend, setFriend] = useState(false);
  const dispatch = useDispatch();

  const isInList = (obj) => {
    for (let el of friendsArr) {
      if (el.name.first === obj.name.first && el.name.last === obj.name.last) {
        setFriend(true);
      }
    }
  };

  useEffect(() => {
    isInList(userObject);
  }, [userObject]);

  const addFriend = (obj) => {
    dispatch(addToFriendList(obj));
    setFriend(true);
  };

  return (
    <div className={styles.card} key={id}>
      <div className={styles.cardHead}>
        <Avatar image={img} />
        <span>{friend ? "В друзьях" : "Не в друзьях"}</span>
        <h3 className={styles.headTitle}>
          {name.title} {name.first} {name.last}
        </h3>

        {friend === false && (
          <button onClick={() => addFriend(userObject)}>
            Add to best friends
          </button>
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Пол: {getGender[gender]}</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>
            Адрес: {location.country} {location.state} {location.city}{" "}
            {location.street.name}, <span>{location.street.number}</span>
          </p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Дата рождения: {parseDate(dob.date)}</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Email: {email}</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Возраст: {dob.age} лет</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Телефон: {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

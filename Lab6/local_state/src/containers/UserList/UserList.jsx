import React, { useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import Button from "../../components/Button/Button";
import Preloader from "../../components/Preloader/Preloader";
import styles from "./UserList.module.css";

const UserList = () => {
	const [usersData, setUsersData] = useState([]);
	const [initialLoading, setInitialLoading] = useState(true);

	const getData = () => {
		fetch("https://randomuser.me/api/?results=5", {
			method: "GET",
		})
			.then(response => response.json())
			.then(data => {
				setUsersData(data.results);
				setInitialLoading(false);
			});
	};

	console.log(initialLoading);

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>There are no users</h1>
			<Button onClick={getData} />

			<div className={styles.cards}>
				<Preloader style={{ display: initialLoading ? "block" : "none" }} />

				{usersData.map((user, index) => {
					return (
						<UserCard
							key={index}
							name={user.name}
							img={user.picture.medium}
							gender={user.gender}
							dob={user.dob}
							location={user.location}
							email={user.email}
							phone={user.phone}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default UserList;

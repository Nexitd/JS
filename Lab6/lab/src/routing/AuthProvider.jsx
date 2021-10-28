import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsersData } from "../store/reducers/users";
import Preloader from "../components/Preloader/Preloader";

const AuthProvider = ({ children }) => {
  const { initialLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  return initialLoading ? <Preloader /> : children;
};

export default AuthProvider;

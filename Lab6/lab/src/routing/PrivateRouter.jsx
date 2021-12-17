import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Wrapper from "../components/Wrapper/Wrapper";

const PrivateRouter = ({ ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? (
    <Wrapper>
      <Route {...rest} />
    </Wrapper>
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRouter;

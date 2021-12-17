import React from "react";
import { Route } from "react-router-dom";
import Wrapper from "../components/Wrapper/Wrapper";

const PublicRouter = ({...rest}) => {
  return (
    <Wrapper>
      <Route {...rest} />
    </Wrapper>
  );
};

export default PublicRouter;

import React from "react";
import { Route} from "react-router-dom";
import LoadingToRedirect from './LoadingToRedirect';

const AdminRouter = ({ children, ...rest }) => {

    let user = JSON.parse(localStorage.getItem('user'));

  return user && user.isUserAdmin ? (
    <Route {...rest}  />
  ) : <LoadingToRedirect/>;
};

export default AdminRouter;
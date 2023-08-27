import React from "react";
import { useEffect, useState } from "react";
import Loader from "../UIElements/Loader";
import { makeStyles } from "@material-ui/core";
import UserTable from "./UserTable";

const useStyle = makeStyles((theme) => ({
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: theme.typography.pxToRem(20),
  },
}));
const UserList = (props) => {
  const classes = useStyle();
  return (
    <UserTable
      users={props.users}
      openUserView={props.openUserView}
    />
  );
};
export default UserList;

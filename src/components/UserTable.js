import React from "react";
import { makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ViewButton from "./ViewButton";

const useStyle = makeStyles((theme) => ({
  table: {
    margin: theme.typography.pxToRem(4),
    overflowY: "scroll",
    height: "87vh",
    width: "100%",
    "&::-webkit-scrollbar": {
      width: theme.typography.pxToRem(12),
    },
    "&::-webkit-scrollbar-track": {
      background: "#f3f2ef" /* color of the tracking area */,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#585858" /* color of the scroll thumb */,
      borderRadius: "20px" /* roundness of the scroll thumb */,
      border: "3px solid #f3f2ef" /* creates padding around scroll thumb */,
    },
  },
  tablebody: {
    background: "#f3f2ef",
    color: "#585858",
  },
  viewCell: {
    cursor: "pointer",
    "&:hover": {
      background: "#B8B8B8",
      color: "#383838",
    },
  },
}));

const UserTable = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.table}>
      <TableContainer component={Paper} className={classes.tablebody}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Street-City</TableCell>
              <TableCell align="center">Phone No</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{`${user.address.street} ${user.address.city}`}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell
                  align="center"
                  className={classes.viewCell}
                  onClick={() => {
                    props.openUserView({ id: user.id });
                  }}
                >
                  <ViewButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default UserTable;

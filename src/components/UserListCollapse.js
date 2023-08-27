import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
} from "@material-ui/core";
import TableCollapseRows from "./TableCollapseRows";
const useStyle = makeStyles((theme) => ({
  table: {
    margin: theme.typography.pxToRem(4),
    overflowY: "scroll",
    height: "87vh",
    minWidth: theme.typography.pxToRem(320),
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
  },
  viewCell: {
    cursor: "pointer",
    background: "#7B7B7B",
    "&:hover": {
      background: "#B8B8B8",
      color: "#383838",
    },
    "& > p": {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  header: {
    fontSize: "18px",
    color: "black",
  },
}));
const UserListCollapse = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.table}>
      <TableContainer className={classes.tablebody}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCollapseRows
                  user={user}
                  openUserView={props.openUserView}
                  classes={classes}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default UserListCollapse;

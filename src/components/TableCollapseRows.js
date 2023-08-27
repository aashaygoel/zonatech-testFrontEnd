import { TableCell, Typography } from "@material-ui/core";
import ViewButton from "./ViewButton";

const TableCollapseRows = ({ user, openUserView, classes }) => {
  return (
    <TableCell className={classes.row}>
      <Typography className={classes.header}>Name:</Typography>
      <Typography>{user.name}</Typography>
      <Typography className={classes.header}>Email:</Typography>
      <Typography>{user.email}</Typography>
      <Typography className={classes.header}>Street-City</Typography>
      <Typography>{`${user.address.street} ${user.address.city}`}</Typography>
      <Typography className={classes.header}>Phone No.</Typography>
      <Typography>{user.phone}</Typography>
      <div className={classes.viewCell}
        onClick={() => {
          openUserView({ id: user.id });
        }}
      >
        <ViewButton />
      </div>
    </TableCell>
  );
};
export default TableCollapseRows;

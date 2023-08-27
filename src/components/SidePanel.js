import { Typography, makeStyles } from "@material-ui/core";
import Collapse from "../UIElements/Collapse";
import AddUser from "../UIElements/AddUser";
import UserList from "../UIElements/UserList";
import { useState } from "react";
import ExpandIcon from "../UIElements/ExpandIcon";

const useStyle = makeStyles((theme) => ({
  sidePanelBody: {
    minWidth: theme.typography.pxToRem(208),
    minHeight: "89vh",
    background: "white",
    transition: "width 0.3s",
  },
  sidePanelList: {
    listStyle: "none",
    marginTop: theme.typography.pxToRem(30),
    padding: `0 ${theme.typography.pxToRem(12)}`,
    "& li": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      cursor: "pointer",
      margin: `${theme.typography.pxToRem(12)} 0`,
      "&:hover": {
        background: "#B8B8B8",
        color: "#383838",
      },
    },
  },
  backButton: {
    float: "right",
    marginRight: theme.typography.pxToRem(12),
    "&:hover": {
      background: "#B8B8B8",
      borderRadius: '50%',
    },
  },
  icon: {
    height: theme.typography.pxToRem(48),
  },
  title: {
    paddingLeft: theme.typography.pxToRem(16),
  },
}));
const SidePanel = (props) => {
  const classes = useStyle();
  const [isExpanded, setIsExpanded] = useState(true);
  const expandHandler = () => {
    const sidePanel = document.getElementById("sidePanel");
    if (isExpanded) {
      sidePanel.style.minWidth = "4rem";
    } else {
      sidePanel.style.minWidth = "13rem";
    }
    setIsExpanded((prevState) => !prevState);
  };
  return (
    <div className={classes.sidePanelBody} id="sidePanel">
      {isExpanded ? (
        <Collapse class={classes.backButton} onClick={expandHandler} />
      ) : (
        <ExpandIcon class={classes.backButton} onClick={expandHandler} />
      )}
      <ul className={classes.sidePanelList} id="sidePanelList">
        <li>
          <AddUser class={classes.icon} />
          {isExpanded && (
            <Typography className={classes.title}>Add User</Typography>
          )}
        </li>
        <li
          onClick={() => {
            props?.openUserList(true);
          }}
        >
          <UserList class={classes.icon} />
          {isExpanded && (
            <Typography className={classes.title}> User List</Typography>
          )}
        </li>
      </ul>
    </div>
  );
};
export default SidePanel;

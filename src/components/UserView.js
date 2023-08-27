import { Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import Collapse from "../UIElements/Collapse";
import ExpandIcon from "../UIElements/ExpandIcon";
import CloseIcon from "../UIElements/CloseIcon";

const camelize = (str) => {
  return `${str.slice(0, 1).toLocaleUpperCase()}${str
    .slice(1)
    .toLocaleLowerCase()} : `;
};

const useStyle = makeStyles((theme) => ({
  body: {
    margin: theme.typography.pxToRem(4),
    padding: theme.typography.pxToRem(12),
    background: "white",
    width: "99%",
  },
  header: {
    color: "black",
    fontSize: "18px",
  },
  icon: {
    display: "flex",
    justifyContent: "space-between",
  },
  iconImg: {
    "&:hover": {
      background: "#B8B8B8",
      borderRadius: "50%",
    },
  },
}));

const UserView = (props) => {
  const [user, setUser] = useState({});
  const [isExpanded, setIsExpanded] = useState(true);
  const classes = useStyle();
  const fetchUserDetails = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${props.id}`
    );
    const responseData = await response.json();

    setUser(responseData);
  };
  useEffect(() => {
    fetchUserDetails();
  }, [props.id]);

  const expandViewHandler = () => {
    setIsExpanded(false);
    props.userListCollapse(false);
  };
  const collapseViewHandler = () => {
    setIsExpanded(true);
    props.userListCollapse(true);
  };
  const closeViewHandler = () => {
    props.userListCollapse(false);
    props.userList(false);
  };
  return (
    <div className={classes.body}>
      <div className={classes.icon}>
        {isExpanded ? (
          <Collapse onClick={expandViewHandler} class={classes.iconImg} />
        ) : (
          <ExpandIcon onClick={collapseViewHandler} class={classes.iconImg} />
        )}
        <CloseIcon onClick={closeViewHandler} classes={classes.iconImg} />
      </div>
      <div>
        {Object.keys(user).map((key) => {
          if (key === "address" || key === "company") {
            const subPart = user[key];
            return (
              <>
                <Typography className={classes.header}>
                  {camelize(key)}
                </Typography>
                <>
                  {Object.keys(subPart).map((key) => {
                    if (key === "geo") return;
                    return (
                      <Typography className={classes.text}>
                        {subPart[key]}
                      </Typography>
                    );
                  })}
                </>
              </>
            );
          } else if (key === "id") {
            return;
          } else {
            return (
              <>
                <Typography className={classes.header}>
                  {camelize(key)}
                </Typography>
                <Typography className={classes.text}>{user[key]}</Typography>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};
export default UserView;

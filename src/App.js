import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import UserList from "./components/UserList";
import UserView from "./components/UserView";
import UserListCollapse from "./components/UserListCollapse";
import Footer from "./components/Footer";

const App = () => {
  const [isUserListOpen, setIsUserListOpen] = useState(false);
  const [isUserListCollapse, setIsUserListCollapse] = useState(false);
  const [isUserViewOpen, setIsUserViewOpen] = useState(false);
  const [viewId, setViewId] = useState();
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    if (isUserListOpen === true) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const responseData = await response.json();

      setUsers(responseData);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [isUserListOpen]);

  const openUserListHandler = (props) => {
    setIsUserListOpen(props);
    setIsUserListCollapse(false);
    setIsUserViewOpen(false);
  };
  const openUserViewHandler = (props) => {
    setViewId(props.id);
    setIsUserViewOpen(true);
    setIsUserListOpen(false);
    setIsUserListCollapse(true);
  };

  return (
    <>
      <Header></Header>
      <div className="body">
        <SidePanel openUserList={openUserListHandler}></SidePanel>
        {isUserListOpen && (
          <UserList
            users={users}
            isLoading
            openUserView={openUserViewHandler}
          />
        )}
        {isUserListCollapse && (
          <UserListCollapse users={users} openUserView={openUserViewHandler} />
        )}
        {isUserViewOpen && viewId && (
          <UserView
            userListCollapse={setIsUserListCollapse}
            id={viewId}
            userList={openUserListHandler}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;

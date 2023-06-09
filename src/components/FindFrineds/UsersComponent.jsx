import s from "./FindFrindes.module.css";
import Paginator from "./Paginator";
import User from "./UserComponent";

let Users = (props) => {
  let user = props.users.map((u) => (
    <User
      user={u}
      key={u.id}
      hideBTN={props.hideBTN}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));

  return (
    <div className={s.test1}>
      {/* <div className={s.users}>Users</div> */}
      <div>{user}</div>

      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default Users;

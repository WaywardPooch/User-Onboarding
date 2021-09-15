import React from "react";

const UserCard = (props) => {
  const { userInfo } = props;

  return (
    <div>
      <h3>
        {userInfo.first_name} {userInfo.last_name}
      </h3>
      <p>Email: {userInfo.email}</p>
      <p>Password: {userInfo.password}</p>
    </div>
  );
};

export default UserCard;

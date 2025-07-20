import React, { useState } from "react";
import "./UserCard.css";
import { FaHeart } from "react-icons/fa";

export default function UserCard({ user , onClick }) {
  const [showEmail, setShowEmail] = useState(false);
  const [likes, setLikes] = useState(0);
  return (
    <div className="user-card">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last} `}
      />

      <h3>
        {user.name.first} {user.name.last}
      </h3>

      {showEmail && <p>{user.email}</p>}

      <button
        className="like-button"
        onClick={() => setLikes((numOfLikes) => numOfLikes + 1)}
      >
        <FaHeart color={likes > 0 ? "red" : "grey"} />
        <span style={{ marginLeft: "6px" }}>{likes}</span>
      </button>

      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? "Hida Email" : "Show Email"}
      </button>

      <button className="details-btn" onClick={() => onClick(user)}>
        Show Details
      </button>
    </div>
  );
}

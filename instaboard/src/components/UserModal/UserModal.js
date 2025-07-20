import React from "react";
import "./UserModal.css";

export default function UserModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <img src={user.picture.large} alt="User" className="modal-img" />
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Location:</strong> {user.location.city},{" "}
          {user.location.country}
        </p>
        <p>
          <strong>Age:</strong> {user.dob.age}
        </p>
      </div>
    </div>
  );
}

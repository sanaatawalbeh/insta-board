import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import UserModal from "../UserModal/UserModal";
import "./UserList.css";

export default function UserList({ darkMode, setDarkMode }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=8");
    setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(search.toLowerCase())
  );

  const handleLoadMore = () => {
    if (visibleCount >= users.length) {
      fetchUsers();
    }
    setVisibleCount((prev) => prev + 8);
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(8, prev - 8));
  };

  const handleCardClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by first name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="user-list">
        {filteredUsers.length === 0 ? (
          <p className="no-users">No users found!</p>
        ) : (
          filteredUsers
            .slice(0, visibleCount)
            .map((user, idx) => (
              <UserCard key={idx} user={user} onClick={handleCardClick} />
            ))
        )}
      </div>

      <div className="action-buttons">
        <button onClick={handleShowLess}>Show Less</button>
        <button onClick={handleLoadMore}>Load More</button>
      </div>
      {showModal && selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={() => setShowModal(false)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}

import React, { useState } from "react";

const ProfileSetup = ({ onSubmit }) => {
  const [displayName, setDisplayName] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ displayName, role, photo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={e => setRole(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Profile Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={e => setPhoto(e.target.files[0])}
        />
      </div>
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileSetup;
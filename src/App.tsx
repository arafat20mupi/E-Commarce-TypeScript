import React, { useState } from "react";
import Profile from "./Components/Profile";

export interface ProfileData {
  id: number;
  name: string;
  email: string;
  phone: number;
}

const App: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData[]>([]);

  const handleAddOrUpdate = (newData: ProfileData) => {
    setProfileData((prev) => {
      const existingIndex = prev.findIndex((data) => data.id === newData.id);
      if (existingIndex >= 0) {
        const updatedProfiles = [...prev];
        updatedProfiles[existingIndex] = newData;
        return updatedProfiles;
      }
      return [...prev, newData];
    });
  };

  const handleDelete = (id: number) => {
    setProfileData((prev) => prev.filter((data) => data.id !== id));
  };



  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">E-commerce Profile Manager</h1>
      <Profile
        profileData={profileData}
        onAddOrUpdate={handleAddOrUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;

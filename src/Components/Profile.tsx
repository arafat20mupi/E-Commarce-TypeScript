import React from "react";
import ProfileForm from "./ProfileData";
import { ProfileData } from "../App";

interface ProfileProps {
  profileData: ProfileData[];
  onAddOrUpdate: (data: ProfileData) => void;
  onDelete: (id: number) => void;
}

const Profile: React.FC<ProfileProps> = ({ profileData, onAddOrUpdate, onDelete }): JSX.Element => {
  return (
    <div>
      <ProfileForm onAddOrUpdate={onAddOrUpdate} />
      <div className="mt-6">
        <h2 className="text-2xl mb-4">Profile Details</h2>
        {profileData.length > 0 ? (
          profileData.map((profile) => (
            <div key={profile.id} className="p-4 mb-4 border rounded shadow">
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded mt-2"
                onClick={() => onDelete(profile.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No profiles added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;

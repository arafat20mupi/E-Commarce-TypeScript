import React, { useState } from "react";
import { ProfileData } from "../App";

interface ProfileFormProps {
  onAddOrUpdate: (data: ProfileData) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onAddOrUpdate }) : JSX.Element=> {
  const [formState, setFormState] = useState<ProfileData>({
    id: Date.now(),
    name: "",
    email: "",
    phone: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddOrUpdate(formState);
    setFormState({ id: Date.now(), name: "", email: "", phone: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h2 className="text-xl mb-4">Add / Update Profile</h2>
      <div className="mb-3">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Phone</label>
        <input
          type="number"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;

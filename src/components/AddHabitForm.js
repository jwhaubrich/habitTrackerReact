// src/components/AddHabitForm.js
import React, { useState } from 'react';

const AddHabitForm = ({ onAdd }) => {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAdd(habitName);
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="New Habit"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddHabitForm;

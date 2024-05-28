// src/components/Habit.js
import React from 'react';

const Habit = ({ habit, onToggle, onRemove }) => {
  return (
    <div>
      <span>{habit.name}</span>
      <button onClick={() => onToggle(habit.id)}>{habit.completed ? "Undo" : "Complete"}</button>
      <button onClick={() => onRemove(habit.id)}>Remove</button>
    </div>
  );
};

export default Habit;

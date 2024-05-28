// src/components/HabitList.js
import React from 'react';
import Habit from './Habit';
import './HabitList.css';

const HabitList = ({ habits, onToggle, onRemove }) => {
  return (
    <div>
      {habits.map(habit => (
        <Habit key={habit.id} habit={habit} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default HabitList;

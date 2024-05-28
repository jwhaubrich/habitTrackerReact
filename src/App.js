// src/App.js
import React, { useState, useEffect } from 'react';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';

const initialHabits = [
  { id: 1, name: 'Exercise', completed: false },
  { id: 2, name: 'Read a Book', completed: true },
  { id: 3, name: 'Meditate', completed: false },
];

const App = () => {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : initialHabits;
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const handleAddHabit = (name) => {
    setHabits([...habits, { id: habits.length + 1, name, completed: false }]);
  };

  const handleToggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const handleRemoveHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <AddHabitForm onAdd={handleAddHabit} />
      <HabitList habits={habits} onToggle={handleToggleHabit} onRemove={handleRemoveHabit} />
    </div>
  );
};

export default App;

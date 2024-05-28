import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    removeTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state[action.payload];
      if (task) {
        task.completed = !task.completed;
      }
    },
    setTasks: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;

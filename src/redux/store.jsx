import { configureStore } from '@reduxjs/toolkit'
import { pomodoroSlice } from './states'

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroSlice.reducer
  }
})

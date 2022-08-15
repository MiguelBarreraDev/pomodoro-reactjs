import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  time: 25,
  breakTime: 5,
  repetitions: 5,
  counter: 0,
  mode: 'inactive'// ['inactive ?end', 'work ?pause', 'not-work ?pause']
}

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    createPomodoro: (state, action) => ({
      ...state,
      time: action.payload.time,
      minutes: action.payload.time,
      breakTime: action.payload.breakTime,
      repetitions: action.payload.repetitions
    }),

    changeMode: (state, action) => {
      if (action.payload === 0) {
        state.counter = 0
        state.mode = 'inactive'
      } else if (state.mode === 'work pause' || state.mode === 'not-work pause') {
        state.mode = state.mode.split(" ")[0]
      } else {
        if (action.payload === 1) {
          state.mode = 'work'
        }
        if (action.payload === 2) {
          state.mode = 'not-work'
        }
        if (action.payload === 3) {
          state.mode = state.mode + " " + 'pause'
        }
        if (action.payload === -1) {
          state.mode = 'inactive' + ' ' + 'end'
        }
      }
    },
    incrementCounter: state => ({...state, counter: state.counter + 1}),
    softResetPomodoro: state => ({
      ...state,
      minutes: state.time,
      seconds: 0,
    }),

    hardResetPomodoro: () => initialState
  }
})

export const {
  createPomodoro,
  reloadPomodoro,
  restartPomodoro,
  changeMode,
  incrementCounter
} = pomodoroSlice.actions

export default pomodoroSlice.reducer

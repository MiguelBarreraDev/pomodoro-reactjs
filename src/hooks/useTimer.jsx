import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode, incrementCounter  } from '@/redux/states'
import { decrementTimer } from '@/utils'

let timerId = 0

export function useTimer ({ timer, updateTimer }) {
  const { minutes, seconds } = timer
  const dispatch = useDispatch()
  const {
    time,
    breakTime,
    repetitions,
    mode,
    counter
  } = useSelector(state => state.pomodoro)

  const executeTimer = useCallback(() => {
    dispatch(changeMode(1))
    timerId = setInterval(() => {
      updateTimer(cs => decrementTimer(cs))
    }, 1000)
  }, [])

  const pauseTimer = useCallback(() => {
    clearInterval(timerId)
    dispatch(changeMode(3))
  }, [])

  const reloadTimer = useCallback(() => {
    clearInterval(timerId)
    dispatch(changeMode(0))
    updateTimer({ minutes: time, seconds: 0})
  }, [])

  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      setTimeout(() => {
        if (mode === 'work') {
          console.log(counter)
          dispatch(incrementCounter())
          if (counter != repetitions - 1) {
            updateTimer({ minutes: breakTime, seconds: 0 })
            dispatch(changeMode(2))
          }
        }
        
        if (mode === 'not-work') {
          updateTimer({ minutes: time, seconds: 0 })
          dispatch(changeMode(1))
        }
      }, 1000)
    }
  }, [minutes, seconds])

  useEffect(() => {
    if (counter === repetitions) {
      clearInterval(timerId)
      dispatch(changeMode(-1))
    }
  }, [counter])

  // Add logic for the unmoiting phase
  // ...

  return {
    executeTimer,
    reloadTimer,
    pauseTimer,
    mode
  }
}

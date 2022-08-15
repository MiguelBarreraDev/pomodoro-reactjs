import { useState } from 'react'
import { useSelector } from 'react-redux'
import './styles.scss'
import Box from '@mui/material/Box'
import Actions from '@/components/Actions'
import Visualizer from '@/components/Visualizer'
import Audio from '@/components/Audio'

export default function Main () {
  const pomodoroState = useSelector(state => state.pomodoro)
  const [timer, setTimer] = useState({
    minutes: pomodoroState.time,
    seconds: 0
  })

  return (
    <Box component='main' className='main-index'>
      <Visualizer timer={timer} />
      <Actions timer={timer} updateTimer={setTimer}/>
      <Audio />
    </Box>
  )
}

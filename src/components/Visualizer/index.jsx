import './styles.scss'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'

export default function Visualizer ({ timer }) {
  const pomodoroState = useSelector(state => state.pomodoro)
  const { time, repetitions, breakTime, mode, counter } = pomodoroState

  const addZero = number => `${number < 10 ? '0' : ''}${number}`

  const timeFormat = ({ minutes, seconds }) => (
    `${addZero(minutes)}:${addZero(seconds)}`
  )

  return (
    <Box className={`visualizer ${mode}`}>
      <Box className='marker bold'>
        {`${counter} / ${repetitions}`}
      </Box>
      <Box className='timer'>
        {timeFormat(timer)}
      </Box>
      <Box className='config'>
        <Box className='pt'><Box className='bold'>pt</Box>{`${time}`}</Box>
        <Box className='bt'><Box className='bold'>bt</Box>{`${breakTime}`}</Box>
      </Box>
    </Box>
  )
}

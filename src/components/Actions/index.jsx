import './styles.scss'
import { useTimer } from '@/hooks'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ConfigButton from './ConfigButton'

export default function Actions ({ timer, updateTimer }) {
  const { mode } = useSelector(state => state.pomodoro)
  const { executeTimer, reloadTimer, pauseTimer } = useTimer({ timer, updateTimer })

  const reload = () => reloadTimer()

  const start = () => executeTimer()

  const pause = () => pauseTimer()

  const getButtonByMode = currentMode => (
    ['work', 'not-work'].includes(currentMode)
    ? { type: 'Pause', cb: pause }
    : { type: 'Start', cb: start }
  )

  const inactiveTimer = mode === 'inactive'

  const endTimer = mode === 'inactive end'

  
  return (
    <Box className='actions'>
      <Stack direction='column' className='buttons'>
        <Button
          className={`reload ${inactiveTimer && 'blocked'}`}
          variant='outlined'
          disabled={inactiveTimer ? true : false}
          onClick={reload}
        >
          Reload
        </Button>
        <Button
          className={`start ${endTimer && 'blocked'}`}
          disabled={endTimer ? true : false}
          variant='outlined'
          onClick={getButtonByMode(mode).cb}
        >
          {getButtonByMode(mode).type}
        </Button>
        <ConfigButton />
      </Stack>
    </Box>
  )
}

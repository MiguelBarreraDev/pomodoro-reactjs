import '@/App.scss'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Main from '@/components/Main'

function App () {
  return (
    <Box className='container-pomodoro'>
      <Box component='header' className='header-index'>
        <Typography variant='h3' className='title'>
          Pomodoro
        </Typography>
      </Box>
      <Main />
    </Box>
  )
}

export default App

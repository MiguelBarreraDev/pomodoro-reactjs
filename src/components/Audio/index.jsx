import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useAudio } from '@/hooks'

export default function Audio () {
  const {sound, volume, handleSound, handleChange} = useAudio()

  return (
    <Box className='audio'>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      <IconButton onClick={handleSound}>
        {sound ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
      <Slider aria-label="Volume" value={volume} onChange={handleChange} />
    </Stack>
    </Box>
  )
}

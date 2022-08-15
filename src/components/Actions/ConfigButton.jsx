import Button from '@mui/material/Button'
import { CustomModal } from '@/components/Modal'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import './ConfigButton.scss'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function ConfigButton () {
  const ButtonOpenModal = props => (
    <Button
      className='config'
      variant='outlined'
      {...props}
    >
      Config
    </Button>
  )

  return (
    <CustomModal RenderButton={ButtonOpenModal}>
      <Box className='title-config'>
        <Typography variant='h5'> Configuration </Typography>
      </Box>
      <Box sx={{ width: 300 }} className='input ctn-slider'>
        Work Time (25 - 60m)
        <Slider
          aria-label="work time"
          defaultValue={25}
          valueLabelDisplay="auto"
          marks
          step={5}
          min={25}
          max={60}
          className='slider'
        />
      </Box>
      <Box sx={{ width: 300 }} className='input ctn-slider'>
        Break Time (5 - 10m)
        <Slider
          aria-label="break time"
          defaultValue={5}
          valueLabelDisplay="auto"
          marks
          step={1}
          min={5}
          max={10}
          className='slider'
        />
      </Box>
      <Box className='input ctn-textField'>
        <TextField
          type='number'
          variant='standard'
          defaultValue={5}
          label='N° Repetitions'
          autoComplete='off'
        />
      </Box>
      <Box className='ctn-button'>
        <Button className='button' variant='outlined'>
          Save
        </Button>
      </Box>
    </CustomModal>
  )
}

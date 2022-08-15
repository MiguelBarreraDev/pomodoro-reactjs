export const decrementTimer = ({ minutes, seconds }) => {
  const response = { minutes, seconds }

  if (minutes === 0 && seconds === 0)
    return response

  if (seconds === 0)
    response.minutes = minutes - 1

  if (seconds - 1 >= 0)
    response.seconds = seconds - 1
  else
    response.seconds = 59

  return response
}

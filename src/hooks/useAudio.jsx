import { useState, useEffect } from "react";
import lofi from '@/assets/media/Cozy-Place-Chill-Background-Music.mp3'

const audio = new Audio(lofi)
audio.loop = true

export function useAudio () {
  const [volume, setVolume] = useState(50);
  const [sound, setSound] = useState(false)

  const handleChange = (event, newValue) => setVolume(newValue)

  const handleSound = () => setSound(cs => !cs)

  useEffect(() => {
    audio.volume = volume / 100
  }, [volume])

  useEffect(() => {
    sound
      ? audio.play()
      : audio.pause()
  }, [sound])

  return {
    handleChange,
    handleSound,
    sound,
    volume
  }
}

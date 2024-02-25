import React from 'react'
import { useSnapshot } from 'valtio';
import state from '../Val/val';
import { SketchPicker } from 'react-color'
const Colorpicker = () => {
  const snap=useSnapshot(state)
  return (
    <div className="absolute left-full ml-3">
    <SketchPicker 
      color={snap.color}
      disableAlpha
      onChange={(color) => state.color = color.hex}
    />
  </div>
  )
}

export default Colorpicker;
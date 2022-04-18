import React, { useEffect, useRef } from 'react'

function Paint() {
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.width = 600 + 'px';
      canvasRef.current.style.height = 400 + 'px';
      canvasRef.current.width = 600 * 2;
      canvasRef.current.height = 400 * 2;
      const ctx = canvasRef.current.getContext('2d');


    }
    const handleMouseOver = () => {
      if (canvasRef.current) {

      }
    }

  })
  return (
    <canvas ref={canvasRef} id='myCanvas'></canvas>
  )
}

export default Paint
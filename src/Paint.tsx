import React, { EventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react'
import './Paint.css';
const WIDTH = 600;
const HEIGHT = 400;
const DPI_WIDTH = WIDTH * 2;
const DPI_HEIGHT = HEIGHT * 2;

function Paint() {
  const colorRef = useRef<null | HTMLInputElement>(null)

  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);


  useEffect(() => {
    if (canvasRef.current && colorRef.current) {
      const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
      canvasRef.current.style.width = window.innerWidth + 'px';
      canvasRef.current.style.height = window.innerHeight + 'px';
      canvasRef.current.width = window.innerWidth * 2;
      canvasRef.current.height = window.innerHeight * 2;
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';

    }


  }, []);
  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvasRef.current && isDrawing) {
      const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
      ctx.moveTo(event.screenX, event.clientY);
      ctx.lineTo(event.screenX, event.clientY);
      ctx.stroke();
    }
  };
  const handleMouseDown = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
      ctx.strokeStyle = `${colorRef.current!.value}`
      ctx.beginPath();
      setIsDrawing(true);
    }
  }
  const handleMouseUp = () => {
    if (canvasRef.current && isDrawing) {
      const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
      ctx.closePath();
      setIsDrawing(false);
    }
  }
  const handleReset = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, DPI_WIDTH, DPI_HEIGHT)
    }
  }

  return (
    <>
      <canvas ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        id='myCanvas'>
      </canvas>
      <input type="color" ref={colorRef} />
      <button onClick={handleReset}>Очистить холст</button>
    </>
  )
}

export default Paint
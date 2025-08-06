'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'

export default function ButtonsPage() {
  const [isClickPressed, setIsClickPressed] = useState(false)
  const [isPooPressed, setIsPooPressed] = useState(false)

  const handleClickButton = () => {
    setIsClickPressed(true)
    setTimeout(() => setIsClickPressed(false), 150)
    console.log('Click button pressed!')
  }

  const handlePooButton = () => {
    setIsPooPressed(true)
    setTimeout(() => setIsPooPressed(false), 150)
    console.log('Poo button pressed!')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">3D Buttons</h1>
            <p className="text-gray-600">Interactive 3D-style buttons with press effects</p>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-8 mt-12">
            {/* Click Button */}
            <button
              onClick={handleClickButton}
              className={`btn-3d ${isClickPressed ? 'pressed' : ''}`}
            >
              Click
            </button>

            {/* Poo Button */}
            <button
              onClick={handlePooButton}
              className={`btn-3d-circle ${isPooPressed ? 'pressed' : ''}`}
            >
              <span className="text-2xl">💩</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


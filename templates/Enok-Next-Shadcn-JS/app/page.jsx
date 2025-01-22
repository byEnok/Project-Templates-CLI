'use client'
import Navbar from '@/components/core/Navbar'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function Home() {
  const {theme, systemTheme} = useTheme()

  return (
    <div className="flex items-center justify-center bg-background">
      <Navbar />
    </div>
  )
}

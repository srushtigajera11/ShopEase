import React from 'react'
import { useContext } from 'react'
import { DemoContext } from './DemoContext'
export default function WElcomeuser() {
    let demo = useContext(DemoContext)
  return (
    <div>wlcome: {demo.name}</div>
  )
}

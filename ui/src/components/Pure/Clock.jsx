import React from 'react'

export default function Clock({ time }) {
  const hours = time.getHours()
  let className
  if (hours >= 0 && hours <= 6) {
    className = 'night'
  } else {
    className = 'day'
  }

  return (
    <h1 className={className}>
      it is
      {' '}
      {time.toLocaleTimeString()}
      {' '}
      now.
    </h1>
  )
}

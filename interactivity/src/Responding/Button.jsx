import React from 'react'

export default function Button() {
  function handleClick() {
    alert('You clicked me!')
  }
  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Click me
    </button>
  )
}

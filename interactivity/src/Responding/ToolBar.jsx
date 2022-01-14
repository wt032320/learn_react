import React from 'react'

function Button({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`)
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Button onClick={handlePlayClick}>
      play
      “
      {movieName}
      ”
    </Button>
  )
}

function UploadButton() {
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Button onClick={() => alert('Uploading!')}>
      Upolad Image
    </Button>
  )
}
export default function ToolBar() {
  return (
    <div>
      <PlayButton movieName="《夏洛特烦恼》" />
      <UploadButton />
    </div>
  )
}

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

function ToolBar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  )
}

export default function ToolSide() {
  return (
    <ToolBar
      // eslint-disable-next-line react/jsx-no-bind
      onPlayMovie={() => alert('Playing!')}
      // eslint-disable-next-line react/jsx-no-bind
      onUploadImage={() => alert('UPloading!')}
    />
  )
}

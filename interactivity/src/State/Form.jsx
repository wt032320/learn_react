import React, { useState } from 'react'

export default function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  function handleReset() {
    setFirstName('')
    setLastName('')
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi,
        {firstName}
        and
        {lastName}
      </h1>
      <button
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  )
}

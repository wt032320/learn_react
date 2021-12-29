import React from 'react'

import getImageUrl from '../../utils/tools'

export default function Avatar({ size, person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

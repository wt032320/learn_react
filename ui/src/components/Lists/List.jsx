import React from 'react'

import { peopleInfo } from '../../data/data'
import getImageUrl from '../../utils/tools'

export default function List() {
  const chemists = peopleInfo.filter((person) => person.profession === 'chemist')
  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>
          {person.name}
          :
        </b>
        {` ${person.profession} `}
        konwn for
        {person.accomplishment}
      </p>
    </li>
  ))
  return <ul>{listItems}</ul>
}

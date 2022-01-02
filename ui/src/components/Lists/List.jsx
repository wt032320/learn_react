import React from 'react'

import { peopleInfo } from '../../data/data'
import getImageUrl from '../../utils/tools'

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
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
        ))}
      </ul>
    </>
  )
}

export default function List() {
  const chemists = []
  const everyoneElse = []

  peopleInfo.forEach((person) => {
    if (person.profession === 'chemist') {
      chemists.push(person)
    } else {
      everyoneElse.push(person)
    }
  })

  return (
    <article>
      <h1>Scientists</h1>
      <ListSection
        title="Chemists"
        people={chemists}
      />
      <ListSection
        title="Everyone Else"
        people={everyoneElse}
      />
    </article>
  )
}
